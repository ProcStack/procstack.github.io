// pxlNav Collision Manager
// -- -- -- -- -- -- -- -- --
// Written by Kevin Edzenga; 2025
//
// Parse colliders from the FBX scene, prep collision objects, and manage collision detection 

import {
  Vector2,
  Vector3
} from "../../libs/three/three.module.min.js";

import { VERBOSE_LEVEL, COLLIDER_TYPE } from "./Enums.js";

export class Colliders{
  constructor( verbose=false, hashGridSizing = 50, colliderBoundsReference = 1000.0 ){
    this.pxlEnv = null;
    this.verbose = verbose;

    this.delimiter = ',';

    this.roomColliderData = {};

    this.baseGridSize = hashGridSizing;

    // Assume a base grid size of 50 to assume for -+1000 unit bounds
    //   This will generate potentially 20x20 grid locations
    //     This should be enough to mitigate higher poly count colliders
    this.colliderBoundsReference = colliderBoundsReference;

  }
  setDependencies( pxlEnv ){
    this.pxlEnv = pxlEnv;
  }
  log( msg ){
    if( this.verbose >= VERBOSE_LEVEL.INFO ){
      console.log( msg );
    }
  }

  // For now, all classes should have a init(), start(), stop() step()
  init(){}
  start(){}
  stop(){}
  step(){}

  // -- -- --

  // Boot room colliders and find hash map for collision detection
  prepColliders( pxlRoomObj, colliderType=COLLIDER_TYPE.FLOOR, gridSize = null ){
    if( pxlRoomObj.hasColliders() ){

      if( !gridSize ){
        gridSize = this.baseGridSize;
      }

      // If the user runs `prepColliders` on Hover or Clickable objects,
      //   It's assumed the user meant to run `prepInteractables`
      // `prepColliders` is ran internally, but can be called externally
      if( colliderType == COLLIDER_TYPE.HOVERABLE || colliderType == COLLIDER_TYPE.CLICKABLE ){
        this.prepInteractables( pxlRoomObj, colliderType );
        return;
      }

      let roomName = pxlRoomObj.getName();
      let collidersForHashing = pxlRoomObj.getColliders( colliderType );
      // 
      if( !this.roomColliderData.hasOwnProperty( roomName ) ){
        this.roomColliderData[ roomName ] = {};
      }
      if( !this.roomColliderData[ roomName ].hasOwnProperty( colliderType ) ){
        this.roomColliderData[ roomName ][ colliderType ] = {};
        this.roomColliderData[ roomName ][ colliderType ][ 'gridSize' ] = gridSize;
        this.roomColliderData[ roomName ][ colliderType ][ 'faceVerts' ] = {};
        this.roomColliderData[ roomName ][ colliderType ][ 'faceGridGroup' ] = {};
      }

      // Agregate vertex locations and find min/max for collider bounds
      let vertexLocations = [];
      // Collider minimum and maximum bounding box data
      //   Infinity scares me...
      let colliderMinMax = { 
          "min" : new Vector2( Infinity, Infinity ), 
          "max" : new Vector2( -Infinity, -Infinity )
        };

      // Find grid size, gather vertex locationns for grid positioning, and store the collidering faces in the grid
      //   Utilizing barcentric coordinates to determine if a grid location is within a face triangle
      collidersForHashing.forEach( (collider)=>{
        let colliderVertices = collider.geometry.attributes.position.array;
        let colliderVertexCount = colliderVertices.length / 3;
        for( let x = 0; x < colliderVertexCount; ++x ){
          let vert = new Vector2( colliderVertices[ x * 3 ], colliderVertices[ (x * 3) + 2 ] );
          vertexLocations.push( vert );
          colliderMinMax.min.min( vert );
          colliderMinMax.max.max( vert );
        }
      });


      // Adjust gridSize based on min/max bounds
      //   If default gridSize is too large, reduce it to help performance
      let colliderSize = colliderMinMax.max.clone().sub( colliderMinMax.min );
      let maxColliderSize = Math.abs( Math.max( colliderSize.x, colliderSize.z ) );
      let gridSizeScalar = Math.min( 1.0, maxColliderSize / this.colliderBoundsReference );
      if( gridSizeScalar < 1.0 ){
        gridSize = gridSize * gridSizeScalar;
        this.roomColliderData[ roomName ][ colliderType ][ 'gridSize' ] = gridSize;
      }

      // Generate the grid map for collision detection per faces within grid locations
      //   Store the face vertices, edges, and barycentric coordinates for collision detection performance
      let colliderBaseName = -1;
      collidersForHashing.forEach( (collider)=>{
        colliderBaseName++;
        let colliderFaceVerts = collider.geometry.attributes.position.array;
        let colliderFaceCount = colliderFaceVerts.length / 3;
        let gridSizeInv = 1 / gridSize;

        //Gather occupied grid locations
        for( let x = 0; x < colliderFaceCount; ++x ){
          // Get face-vertex positions
          //   [ [...], x1,y1,z1, x2,y2,z2, x3,y3,z3, [...] ] -> Vector3( x1, y1, z1 )
          let v0 = new Vector3( colliderFaceVerts[ x * 3 ], colliderFaceVerts[ (x * 3) + 1 ], colliderFaceVerts[ (x * 3) + 2 ] );
          let v1 = new Vector3( colliderFaceVerts[ (x * 3) + 3 ], colliderFaceVerts[ (x * 3) + 4 ], colliderFaceVerts[ (x * 3) + 5 ] );
          let v2 = new Vector3( colliderFaceVerts[ (x * 3) + 6 ], colliderFaceVerts[ (x * 3) + 7 ], colliderFaceVerts[ (x * 3) + 8 ] );

          // Find bounding box for the triangle
          let minX = Math.min(v0.x, v1.x, v2.x);
          let maxX = Math.max(v0.x, v1.x, v2.x);
          let minZ = Math.min(v0.z, v1.z, v2.z);
          let maxZ = Math.max(v0.z, v1.z, v2.z);

          // Find the grid spances of the bounding box
          let minGridX = Math.floor(minX * gridSizeInv);
          let maxGridX = Math.floor(maxX * gridSizeInv);
          let minGridZ = Math.floor(minZ * gridSizeInv);
          let maxGridZ = Math.floor(maxZ * gridSizeInv);

          // -- -- --

          // Gather the core math required for every ray cast
          //   The below is stored to reduce runtime calculation latency

          // Edge vectors
          let edge0 = v1.clone().sub(v0);
          let edge1 = v2.clone().sub(v0);

          // Vertex-Edge relationships
          let dotE0E0 = edge0.dot(edge0);
          let dotE0E1 = edge0.dot(edge1);
          let dotE1E1 = edge1.dot(edge1);

          // Calculate tiangle area ratio
          let areaInv = 1 / (dotE0E0 * dotE1E1 - dotE0E1 * dotE0E1);

          // Face-Vertex data for grid location association
          let curColliderName = collider.name != "" ? collider.name : "collider_" + colliderBaseName;
          let faceKey = this.getGridKey(curColliderName,"_face_", this.flattenVector3( v0 ), this.flattenVector3( v1 ), this.flattenVector3( v2 ) );
          let faceVerts = {
              "name" : collider.name,
              "key" : faceKey,
              "verts" : [ v0, v1, v2 ],
              "edge0" : edge0,
              "edge1" : edge1,
              "dotE0E0" : dotE0E0,
              "dotE0E1" : dotE0E1,
              "dotE1E1" : dotE1E1,
              "areaInv" : areaInv
            };
          this.roomColliderData[roomName][ colliderType ]['faceVerts'][faceKey] = faceVerts;

          // -- -- --

          // Triangle is self contained within 1 grid location
          if( minGridX == maxGridX && minGridZ == maxGridZ ){
            this.addFaceToGridLocation( roomName, colliderType, minGridX, minGridZ, faceKey );
            continue;
          }

          // -- -- --

          // Only used for edge-grid intersection detection
          let edge3 = v2.clone().sub(v1);

          // -- -- --

          // Should no triangles be self contained within a grid location,
          //   Check if any triangle edges clip the grid location,
          //     If not, check if each grid center is within the triangle using barycentric coordinates

          for (let gx = minGridX; gx <= maxGridX; ++gx) {
            for (let gz = minGridZ; gz <= maxGridZ; ++gz) {

              let gridXMin = gx * gridSize;
              let gridXMax = (gx + 1) * gridSize;
              let gridZMin = gz * gridSize;
              let gridZMax = (gz + 1) * gridSize;
              // Check if any triangle edges intersect the grid location
              let checkEdgeIntersections = 
                  this.isGridEdgeIntersecting( v0, edge0, gridXMin, gridXMax, gridZMin, gridZMax ) ||
                  this.isGridEdgeIntersecting( v0, edge1, gridXMin, gridXMax, gridZMin, gridZMax ) ||
                  this.isGridEdgeIntersecting( v1, edge3, gridXMin, gridXMax, gridZMin, gridZMax ) ;


              if( checkEdgeIntersections ){
                this.addFaceToGridLocation( roomName, colliderType, minGridX, minGridZ, faceKey );
                continue;
              }

              // -- -- --

              // Triangle is larger than the grid location and no edges intersect grid edges
              //   Fallback to grid center barcentric check

              let gridCenter = new Vector3((gx + 0.5) * gridSize, 0, (gz + 0.5) * gridSize);
              
              // Origin-Edge relationships
              let origEdge = gridCenter.clone().sub(v0);

              // Vertex-Edge relationships
              let dotE0EOrig = edge0.dot(origEdge);
              let dotE1EOrig = edge1.dot(origEdge);

              // Calculate barycentric coordinates
              let u = (dotE1E1 * dotE0EOrig - dotE0E1 * dotE1EOrig) * areaInv;
              let v = (dotE0E0 * dotE1EOrig - dotE0E1 * dotE0EOrig) * areaInv;

              // Grid center collided with given triangle
              if (u >= 0 && v >= 0 && (u + v) < 1) {
                this.addFaceToGridLocation( roomName, colliderType, gx, gz, faceKey );
              }
            }
          }
        }
      });

      // Remove any duplicate face entries from `faceGridGroup`
      //   This should be rare, but since I'm not reading Y values for key naming, it's possible
      //     Make a building with a bunch of the same layout per floor, with the same collision object, you'll get duplicate face vertices
      //       Better safe than sorry, it should be a fast run, but it is javascript after all
      let faceGridGroupKeys = Object.keys( this.roomColliderData[ roomName ][ colliderType ][ 'faceGridGroup' ] );
      for( let x = 0; x < faceGridGroupKeys.length; ++x ){
        let curEntry = this.roomColliderData[ roomName ][ colliderType ][ 'faceGridGroup' ][ faceGridGroupKeys[x] ];
        this.roomColliderData[ roomName ][ colliderType ][ 'faceGridGroup' ][ faceGridGroupKeys[x] ] = [ ...new Set( curEntry ) ]; // Python has ruined me, `list( set( [...] ) )`
      }

      this.log( this.roomColliderData[roomName][ colliderType ]['faceGridGroup'] );
    }else{
      this.log( "No colliders found for room: " + pxlRoomObj.getName() );
    }
  }
  
  // -- -- --

  // Parse vert locations, calculate barcentric coordinates, and build roomColliderData dictionary
  //   No need for grid sampling, as the likely-hood of an interactable being in the same/neighboring grid location is low
  prepInteractables( pxlRoomObj, colliderType=COLLIDER_TYPE.HOVERABLE ){

    if( !pxlRoomObj.hasColliderType( colliderType ) ) return;

    let roomName = pxlRoomObj.getName();
    let curInteractables = pxlRoomObj.getColliders( colliderType );

    if( curInteractables.length == 0 ) return; // No interactables found, user may have removed objects from the scene during runtime

    // Build interactable collider base data
    if( !this.roomColliderData.hasOwnProperty( roomName ) ){
      this.roomColliderData[ roomName ] = {};
    }

    // -- -- --

    let colliderBaseName = -1;
    curInteractables.forEach( (collider)=>{
      colliderBaseName++;
      let colliderFaceVerts = collider.geometry.attributes.position.array;
      let colliderFaceCount = colliderFaceVerts.length / 3;

      let curInteractableName = collider.name ;// != "" ? collider.name : "Interactable_" + colliderBaseName;

      // Logic change from `prepColliders`, as interactables may be hover AND clickable
      //   By-pass the colliderType specification
      // If the interactable is already in the roomColliderData, skip it
      if( this.roomColliderData[ roomName ].hasOwnProperty( curInteractableName ) ){
        return; // the forEach `continue`
      }

      // Gather interactable collider data
      this.roomColliderData[ roomName ][ curInteractableName ] = {};
      this.roomColliderData[ roomName ][ curInteractableName ][ 'hoverable' ] = colliderType == COLLIDER_TYPE.HOVERABLE;
      this.roomColliderData[ roomName ][ curInteractableName ][ 'clickable' ] = colliderType == COLLIDER_TYPE.CLICKABLE;
      this.roomColliderData[ roomName ][ curInteractableName ][ 'gridSize' ] = this.baseGridSize; // Unused; it's for parity with other collider types
      this.roomColliderData[ roomName ][ curInteractableName ][ 'faceVerts' ] = {};
      this.roomColliderData[ roomName ][ curInteractableName ][ 'faceGridGroup' ] = {};

      // Gather Face-Vertex data for interactable collider and barcentric coordinates
      for( let x = 0; x < colliderFaceCount; ++x ){
        // Get Face-Vertex positions
        //   [ [...], x1,y1,z1, x2,y2,z2, x3,y3,z3, [...] ] -> Vector3( x1, y1, z1 )
        let v0 = new Vector3( colliderFaceVerts[ x * 3 ], colliderFaceVerts[ (x * 3) + 1 ], colliderFaceVerts[ (x * 3) + 2 ] );
        let v1 = new Vector3( colliderFaceVerts[ (x * 3) + 3 ], colliderFaceVerts[ (x * 3) + 4 ], colliderFaceVerts[ (x * 3) + 5 ] );
        let v2 = new Vector3( colliderFaceVerts[ (x * 3) + 6 ], colliderFaceVerts[ (x * 3) + 7 ], colliderFaceVerts[ (x * 3) + 8 ] );

        // -- -- --

        // Edge vectors
        let edge0 = v1.clone().sub(v0);
        let edge1 = v2.clone().sub(v0);
        let normal = edge0.clone().cross(edge1).normalize();

        // Vertex-Edge relationships
        let dotE0E0 = edge0.dot(edge0);
        let dotE0E1 = edge0.dot(edge1);
        let dotE1E1 = edge1.dot(edge1);

        // Calculate tiangle area ratio
        let areaInv = 1 / (dotE0E0 * dotE1E1 - dotE0E1 * dotE0E1);

        // -- -- --

        // Face-Vertex data for grid location association
        let faceKey = this.getGridKey(curInteractableName,"_face_", this.flattenVector3( v0 ), this.flattenVector3( v1 ), this.flattenVector3( v2 ) );
        let faceVerts = {
            "key" : faceKey,
            "verts" : [ v0, v1, v2 ],
            "edge0" : edge0,
            "edge1" : edge1,
            "normal" : normal
          };
        this.roomColliderData[roomName][ curInteractableName ]['faceVerts'][faceKey] = faceVerts;
      }
    });
  }


  // -- -- --

  // Check if line segment intersects 2d grid edge
  //   Used for triangle edge -> grid boundary intersection detection
  isGridEdgeIntersecting( edgeStart, edgeSegment, gridXMin, gridXMax, gridZMin, gridZMax ){
        // Line segment parameters
        let dx = edgeSegment.x;
        let dz = edgeSegment.z;
        
        // Calculate intersection parameters for each grid boundary
        let txMin = dx !== 0 ? (gridXMin - edgeStart.x) / dx : Infinity;
        let txMax = dx !== 0 ? (gridXMax - edgeStart.x) / dx : -Infinity;
        let tzMin = dz !== 0 ? (gridZMin - edgeStart.z) / dz : Infinity;
        let tzMax = dz !== 0 ? (gridZMax - edgeStart.z) / dz : -Infinity;
        
        // Find intersection interval
        let tMin = Math.max(Math.min(txMin, txMax), Math.min(tzMin, tzMax));
        let tMax = Math.min(Math.max(txMin, txMax), Math.max(tzMin, tzMax));
        
        // Line intersects if tMax >= tMin and intersection occurs within segment (0 <= t <= 1)
        return tMax >= tMin && tMax >= 0 && tMin <= 1;
  }

  // -- -- --

  // Simple key generation
  getGridKey( ...args ){
    return args.join( this.delimiter );
  }

  // Flatten Vector3 to a string
  flattenVector3( vec ){
    return this.getGridKey( this.roundToNearest(vec.x), this.roundToNearest(vec.y), this.roundToNearest(vec.z) );
  }

  // Round to nearest
  roundToNearest( val, nearest=.001 ){
    return Math.round( val / nearest ) * nearest;
  }

  // -- -- --

  // Add face to grid location by its `facekey`
  addFaceToGridLocation( roomName, colliderType, gridX, gridZ, faceKey ){
    // All your keys are belong to us!
    let gridKey = this.getGridKey(gridX, gridZ);

    // Add an empty array should it not exist
    if (!this.roomColliderData[roomName][ colliderType ]['faceGridGroup'][gridKey]) {
      this.roomColliderData[roomName][ colliderType ]['faceGridGroup'][gridKey] = [];
    }

    // Map of grid locations to [ ..., face keys, ... ]
    this.roomColliderData[roomName][ colliderType ]['faceGridGroup'][gridKey].push( faceKey );
  }

  // -- -- --

  // Returns null if no collision
  // When 'multiHits' is false, only the first hit is returned as a vector3 position
  // When 'multiHits' is true, return all [hits,...] vector3 positions
  castRay( roomName, origin, colliderType=COLLIDER_TYPE.FLOOR, multiHits=true, direction=Vector3(0, -1, 0) ){
    if( !this.roomColliderData.hasOwnProperty( roomName ) || !this.roomColliderData[roomName].hasOwnProperty( colliderType ) ){
      return null;
    }
    let roomData = this.roomColliderData[ roomName ][ colliderType ];
    let gridSize = roomData[ 'gridSize' ];
    let faceGridGroup = roomData[ 'faceGridGroup' ];

    // Find the grid location of the origin
    let gridSizeInv = 1 / gridSize;
    let gridX = Math.floor(origin.x * gridSizeInv);
    let gridZ = Math.floor(origin.z * gridSizeInv);
    let gridKeyArr = [
        this.getGridKey( gridX-1, gridZ-1 ),
        this.getGridKey( gridX-1, gridZ ),
        this.getGridKey( gridX, gridZ-1 ),
        this.getGridKey( gridX, gridZ ),
        this.getGridKey( gridX+1, gridZ ),
        this.getGridKey( gridX, gridZ+1 ),
        this.getGridKey( gridX+1, gridZ+1 ),
      ];
    
    // Find face vert arrays for current and neighboring grid locations
    //   Since the ray is cast from the origin, it's possible that the origin is not within a face,
    //     Or not within the current grid location of the face
    // Parse all face ids, remove dupelicates, and find the closest face to the origin
    let faceIds = [];
    for( let x = 0; x < gridKeyArr.length; ++x ){
      if( faceGridGroup.hasOwnProperty( gridKeyArr[x] ) ){
        faceIds = faceIds.concat( faceGridGroup[ gridKeyArr[x] ] );
      }
    }

    // No collider faces found
    if( faceIds.length == 0 ){
      return null;
    }

    // Python really has ruined me for removing dupelicates, list( set( [...] ) )
    //   But works!
    faceIds = [...new Set( faceIds )];

    let retPositions = {};

    // Find face vert arrays for the grid location
    for( let x = 0; x < faceIds.length; ++x ){
      // Face-Vertex data
      let faceVerts = roomData[ 'faceVerts' ][ faceIds[x] ];
      let v1 = faceVerts[ 'verts' ][0];

      // Get edge vectors
      let edge0 = faceVerts[ 'edge0' ];
      let edge1 = faceVerts[ 'edge1' ];
      let edgeOrigin = origin.clone().sub(v1);

      // Get Vertex-Edge relationships
      let dotE0E0 = faceVerts[ 'dotE0E0' ];
      let dotE0E1 = faceVerts[ 'dotE0E1' ];
      let dotE0EOrigin = edge0.dot(edgeOrigin);
      let dotE1E1 = faceVerts[ 'dotE1E1' ];
      let dotE1EOrigin = edge1.dot(edgeOrigin);

      // Calculate triangle area and barycentric coordinates
      let areaInv = faceVerts[ 'areaInv' ];
      let u = (dotE1E1 * dotE0EOrigin - dotE0E1 * dotE1EOrigin) * areaInv;
      let v = (dotE0E0 * dotE1EOrigin - dotE0E1 * dotE0EOrigin) * areaInv;

      if( u >= 0 && v >= 0 && (u + v) < 1 ){
        // Intersection found
        //   Return collision position on face
        let intersectionPoint = v1.clone().add(edge0.multiplyScalar(u)).add(edge1.multiplyScalar(v));

        // Store distance for sorting
        let dist = origin.distanceTo(intersectionPoint);
        retPositions[dist] = intersectionPoint;

        if( !multiHits ){
          return intersectionPoint;
        }
      }
    }

    // Find closest intersection point to the origin
    let distKeys = Object.keys( retPositions );
    distKeys.sort();
    let retArr = [];
    for( let x = 0; x < distKeys.length; ++x ){
      retArr.push( retPositions[ distKeys[x] ] );
    }

    return retArr;
  }

  // -- -- -- 

  // objectInteractList is an array of three.js objects
  // camera is a three.js camera object
  // screenUV is a Vector2 of the screen position in NDC, from -1 to 1
  //   If needed, run `pxlNav.pxlUtils.screenToNDC` to convert screen position to NDC before passing to this function
  castInteractRay( roomName, objectInteractList=[], camera=null, screenUV=Vector2(0.0, 0.0), multiHits=true ){

    // Calculate ray direction & origin
    let cameraRay = new Vector3( 0, 0, 0 );
    camera.getWorldDirection( cameraRay );
    let rayOrigin = camera.position.clone();
    
    // Calculate frustum dimensions using FOV and aspect ratio
    let fovRadians = camera.fov * Math.PI / 180;
    let tanFov = Math.tan(fovRadians / 2);
    let aspectRatio = camera.aspect;

    // Calculate ray direction in camera space
    let dirX = screenUV.x * aspectRatio * tanFov;
    let dirY = screenUV.y * tanFov;
    let dirZ = -1; // Forward in camera space

    // Create direction vector and transform to world space
    let rayDirection = new THREE.Vector3(dirX, dirY, dirZ)
        .applyMatrix4(camera.matrixWorld)
        .sub(camera.position)
        .normalize();

    // -- -- --

    let retClickedObjects = {};

    objectInteractList.forEach(( curObj )=>{
      let curName = curObj.name;

      // TODO : Add check for current object Face-Vertex data; build if not found
      //if( !this.roomColliderData[ roomName ].hasOwnProperty( curName ) ){
      //  this.prepInteractables( curObj );
      //}

      // Iterate Face-Vertex data for current object
      let curFaceData = this.roomColliderData[ roomName ][ curName ];
      let objFaceVerts = curFaceData[ 'faceVerts' ];
      let faceVertKeys = Object.keys( objFaceVerts );
      faceVertKeys.forEach(( curFaceKey )=>{
        let curFace = objFaceVerts[ curFaceKey ];
        let v1 = curFace[ 'verts' ][0];
        let v2 = curFace[ 'verts' ][1];
        let v3 = curFace[ 'verts' ][2];

        // Get edge vectors
        let edge0 = curFace[ 'edge0' ];
        let edge1 = curFace[ 'edge1' ];
        let normal = curFace[ 'normal' ];

        // Check if ray and triangle are parallel
        let NDotRay = normal.dot(rayDirection);
        if( Math.abs(NDotRay) < 0.000001 ) return;  // Ray parallel to triangle

        // Calculate distance from ray origin to triangle plane
        let d = normal.dot(v1); // TODO : Verify this is the correct
        let dist = (d - normal.dot(rayOrigin)) / NDotRay;

        if( dist < 0 ) return;  // Triangle is behind ray

        // Calculate intersection point
        let intersection = rayOrigin.clone().add(rayDirection.clone().multiplyScalar( dist ));

        // Calculate barycentric coordinates
        let va = v1.clone().sub(intersection);
        let vb = v2.clone().sub(intersection);
        let vc = v3.clone().sub(intersection);

        let na = vb.clone().cross(vc).length();
        let nb = vc.clone().cross(va).length();
        let nc = va.clone().cross(vb).length();
        let total = na + nb + nc;

        // Calculate barycentric coordinates
        let u = na / total;
        let v = nb / total;
        let w = nc / total;

        // Check if ray intersects triangle
        if( u >= 0 && u <= 1 && v >= 0 && v <= 1 && w >= 0 && w <= 1 ) {
          // Intersection found
          //   Return collision position on face
          let intersectionPoint = v1.clone().add(edge0.multiplyScalar(u)).add(edge1.multiplyScalar(v));

          // Store distance for sorting
          let dist = rayOrigin.distanceTo(intersectionPoint);
          retClickedObjects[dist] = { 
            'obj' : curObj,
            'pos' : intersection
          };

          if( !multiHits ) {
            return { 
              'obj' : curObj,
              'pos' : intersection
            };
          }
        }
      });
    });

    // Sort by closest intersection point to the camera
    let distKeys = Object.keys( retClickedObjects );
    distKeys.sort();
    let retArr = {};
    retArr[ 'order' ] = [];
    retArr[ 'hits' ] = {};
    for( let x = 0; x < distKeys.length; ++x ){
      let curObj = retClickedObjects[ distKeys[x] ][ 'obj' ];
      let curIntersect = retClickedObjects[ distKeys[x] ][ 'pos' ];
      let curName = curObj.name;
      retArr[ 'order' ].push( curObj );

      if(  !retArr[ 'hits' ].hasOwnProperty( curName ) ){
        retArr[ 'hits' ][ curName ] = [];
      }
      retArr[ 'hits' ][ curName ].push( curIntersect );
    }

    return retArr;
  }

  // -- -- -- 
  

  destroy( animName ){
    if( this.objNames.includes( animName ) ){
      this.animMixer[ animName ].stopAllAction();
      delete this.animMixer[ animName ];
      delete this.objects[ animName ];
      let idx = this.objNames.indexOf( animName );
      this.objNames.splice( idx, 1 );
    }
  }

}