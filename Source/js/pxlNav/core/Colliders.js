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
    this.collisionObjects = [];

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

      let roomName = pxlRoomObj.getName();
      let collidersForHashing = pxlRoomObj.getColliders( colliderType );
      this.collisionObjects[ roomName ] = collidersForHashing;
      // 
      this.roomColliderData[ roomName ] = {};
      this.roomColliderData[ roomName ][ colliderType ] = {};
      this.roomColliderData[ roomName ][ colliderType ][ 'gridSize' ] = gridSize;
      this.roomColliderData[ roomName ][ colliderType ][ 'faceVerts' ] = {};
      this.roomColliderData[ roomName ][ colliderType ][ 'faceGridGroup' ] = {};

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
          let v1 = new Vector3( colliderFaceVerts[ x * 3 ], colliderFaceVerts[ (x * 3) + 1 ], colliderFaceVerts[ (x * 3) + 2 ] );
          let v2 = new Vector3( colliderFaceVerts[ (x * 3) + 3 ], colliderFaceVerts[ (x * 3) + 4 ], colliderFaceVerts[ (x * 3) + 5 ] );
          let v3 = new Vector3( colliderFaceVerts[ (x * 3) + 6 ], colliderFaceVerts[ (x * 3) + 7 ], colliderFaceVerts[ (x * 3) + 8 ] );

          let minX = Math.min(v1.x, v2.x, v3.x);
          let maxX = Math.max(v1.x, v2.x, v3.x);
          let minZ = Math.min(v1.z, v2.z, v3.z);
          let maxZ = Math.max(v1.z, v2.z, v3.z);

          let minGridX = Math.floor(minX * gridSizeInv);
          let maxGridX = Math.floor(maxX * gridSizeInv);
          let minGridZ = Math.floor(minZ * gridSizeInv);
          let maxGridZ = Math.floor(maxZ * gridSizeInv);

          // Check if the grid center is within the triangle using barycentric coordinates
          for (let gx = minGridX; gx <= maxGridX; ++gx) {
            for (let gz = minGridZ; gz <= maxGridZ; ++gz) {
              let gridCenter = new Vector3((gx + 0.5) * gridSize, 0, (gz + 0.5) * gridSize);

              // Edge vectors
              let edge0 = v2.clone().sub(v1);
              let edge1 = v3.clone().sub(v1);
              let origEdge = gridCenter.clone().sub(v1);

              // Vertex-Edge relationships
              let dotE0E0 = edge0.dot(edge0);
              let dotE0E1 = edge0.dot(edge1);
              let dotE0EOrig = edge0.dot(origEdge);
              let dotE1E1 = edge1.dot(edge1);
              let dotE1EOrig = edge1.dot(origEdge);

              // Calculate tiangle area and barycentric coordinates
              let areaInv = 1 / (dotE0E0 * dotE1E1 - dotE0E1 * dotE0E1);
              let u = (dotE1E1 * dotE0EOrig - dotE0E1 * dotE1EOrig) * areaInv;
              let v = (dotE0E0 * dotE1EOrig - dotE0E1 * dotE0EOrig) * areaInv;

              if (u >= 0 && v >= 0 && (u + v) < 1) {

                let gridKey = this.getGridKey(gx, gz);

                if (!this.roomColliderData[roomName][ colliderType ]['faceGridGroup'][gridKey]) {
                  this.roomColliderData[roomName][ colliderType ]['faceGridGroup'][gridKey] = [];
                }

                let curColliderName = "collider_" + colliderBaseName;
                let faceKey = this.getGridKey(curColliderName,"_face_", this.flattenVector3( v1 ), this.flattenVector3( v2 ), this.flattenVector3( v3 ) );
                let faceVerts = {
                    "key" : faceKey,
                    "verts" : [ v1, v2, v3 ],
                    "edge0" : edge0,
                    "edge1" : edge1,
                    "dotE0E0" : dotE0E0,
                    "dotE0E1" : dotE0E1,
                    "dotE1E1" : dotE1E1,
                    "areaInv" : areaInv
                  };
                this.roomColliderData[roomName][ colliderType ]['faceVerts'][faceKey] = faceVerts;
                this.roomColliderData[roomName][ colliderType ]['faceGridGroup'][gridKey].push( faceKey );
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

      console.log( this.roomColliderData[roomName][ colliderType ]['faceGridGroup'] );
    }else{
      console.log( "No colliders found for room: " + pxlRoomObj.getName() );
    }
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

    faceIds = [...new Set( faceIds )];

    let retPositions = {};

    // Find face vert arrays for the grid location
    for( let x = 0; x < faceIds.length; ++x ){
      // Face-Vertex data
      let faceVerts = roomData[ 'faceVerts' ][ faceIds[x] ];
      let v1 = faceVerts[ 'verts' ][0];
      let v2 = faceVerts[ 'verts' ][1];
      let v3 = faceVerts[ 'verts' ][2];

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

      if (u >= 0 && v >= 0 && (u + v) < 1) {
        // Intersection found
        //   Return collision position on face
        let intersectionPoint = v1.clone().add(edge0.multiplyScalar(u)).add(edge1.multiplyScalar(v));

        // Store distance for sorting
        let dist = origin.distanceTo(intersectionPoint);
        retPositions[dist] = intersectionPoint;

        if (!multiHits) {
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