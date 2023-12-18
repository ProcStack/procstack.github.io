/*  pxlNav modded ThreeJS Barycentric inspired ray detection  -- -- 

A fair bit of our collision detection math can benefit from customizing ThreeJS' ray caster.
- Returning top level hits only, instead of full arrays.
	IE-
	 boolean, "Is there a hit?"
	 object array, "[ Hit list ]"
- Returning more information from their ray caster than they do by default
	IE-
	 bary values, nearest point-to-point vector from lowest bary value couple.

( Modding is based on ThreeJS r118. )
*/

/*
		raycast: function ( raycaster, intersects ) {

			var geometry = this.geometry;
			var material = this.material;
			var matrixWorld = this.matrixWorld;

			if ( material === undefined ) { return; }

			// Checking boundingSphere distance to ray

			if ( geometry.boundingSphere === null ) { geometry.computeBoundingSphere(); }

			_sphere.copy( geometry.boundingSphere );
			_sphere.applyMatrix4( matrixWorld );

			if ( raycaster.ray.intersectsSphere( _sphere ) === false ) { return; }

			//

			_inverseMatrix.getInverse( matrixWorld );
			_ray.copy( raycaster.ray ).applyMatrix4( _inverseMatrix );

			// Check boundingBox before continuing

			if ( geometry.boundingBox !== null ) {

				if ( _ray.intersectsBox( geometry.boundingBox ) === false ) { return; }

			}

			var intersection;

			if ( geometry.isBufferGeometry ) {

				var index = geometry.index;
				var position = geometry.attributes.position;
				var morphPosition = geometry.morphAttributes.position;
				var morphTargetsRelative = geometry.morphTargetsRelative;
				var uv = geometry.attributes.uv;
				var uv2 = geometry.attributes.uv2;
				var groups = geometry.groups;
				var drawRange = geometry.drawRange;

				if ( index !== null ) {

					// indexed buffer geometry

					if ( Array.isArray( material ) ) {

						for ( var i = 0, il = groups.length; i < il; i ++ ) {

							var group = groups[ i ];
							var groupMaterial = material[ group.materialIndex ];

							var start = Math.max( group.start, drawRange.start );
							var end = Math.min( ( group.start + group.count ), ( drawRange.start + drawRange.count ) );

							for ( var j = start, jl = end; j < jl; j += 3 ) {

								var a = index.getX( j );
								var b = index.getX( j + 1 );
								var c = index.getX( j + 2 );

								intersection = checkBufferGeometryIntersection( this, groupMaterial, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c );

								if ( intersection ) {

									intersection.faceIndex = Math.floor( j / 3 ); // triangle number in indexed buffer semantics
									intersection.face.materialIndex = group.materialIndex;
									intersects.push( intersection );

								}

							}

						}

					} else {

						var start$1 = Math.max( 0, drawRange.start );
						var end$1 = Math.min( index.count, ( drawRange.start + drawRange.count ) );

						for ( var i$1 = start$1, il$1 = end$1; i$1 < il$1; i$1 += 3 ) {

							var a$1 = index.getX( i$1 );
							var b$1 = index.getX( i$1 + 1 );
							var c$1 = index.getX( i$1 + 2 );

							intersection = checkBufferGeometryIntersection( this, material, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a$1, b$1, c$1 );

							if ( intersection ) {

								intersection.faceIndex = Math.floor( i$1 / 3 ); // triangle number in indexed buffer semantics
								intersects.push( intersection );

							}

						}

					}

				} else if ( position !== undefined ) {

					// non-indexed buffer geometry

					if ( Array.isArray( material ) ) {

						for ( var i$2 = 0, il$2 = groups.length; i$2 < il$2; i$2 ++ ) {

							var group$1 = groups[ i$2 ];
							var groupMaterial$1 = material[ group$1.materialIndex ];

							var start$2 = Math.max( group$1.start, drawRange.start );
							var end$2 = Math.min( ( group$1.start + group$1.count ), ( drawRange.start + drawRange.count ) );

							for ( var j$1 = start$2, jl$1 = end$2; j$1 < jl$1; j$1 += 3 ) {

								var a$2 = j$1;
								var b$2 = j$1 + 1;
								var c$2 = j$1 + 2;

								intersection = checkBufferGeometryIntersection( this, groupMaterial$1, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a$2, b$2, c$2 );

								if ( intersection ) {

									intersection.faceIndex = Math.floor( j$1 / 3 ); // triangle number in non-indexed buffer semantics
									intersection.face.materialIndex = group$1.materialIndex;
									intersects.push( intersection );

								}

							}

						}

					} else {

						var start$3 = Math.max( 0, drawRange.start );
						var end$3 = Math.min( position.count, ( drawRange.start + drawRange.count ) );

						for ( var i$3 = start$3, il$3 = end$3; i$3 < il$3; i$3 += 3 ) {

							var a$3 = i$3;
							var b$3 = i$3 + 1;
							var c$3 = i$3 + 2;

							intersection = checkBufferGeometryIntersection( this, material, raycaster, _ray, position, morphPosition, morphTargetsRelative, uv, uv2, a$3, b$3, c$3 );

							if ( intersection ) {

								intersection.faceIndex = Math.floor( i$3 / 3 ); // triangle number in non-indexed buffer semantics
								intersects.push( intersection );

							}

						}

					}

				}

			} else if ( geometry.isGeometry ) {

				var isMultiMaterial = Array.isArray( material );

				var vertices = geometry.vertices;
				var faces = geometry.faces;
				var uvs;

				var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
				if ( faceVertexUvs.length > 0 ) { uvs = faceVertexUvs; }

				for ( var f = 0, fl = faces.length; f < fl; f ++ ) {

					var face = faces[ f ];
					var faceMaterial = isMultiMaterial ? material[ face.materialIndex ] : material;

					if ( faceMaterial === undefined ) { continue; }

					var fvA = vertices[ face.a ];
					var fvB = vertices[ face.b ];
					var fvC = vertices[ face.c ];

					intersection = checkIntersection( this, faceMaterial, raycaster, _ray, fvA, fvB, fvC, _intersectionPoint );

					if ( intersection ) {

						if ( uvs && uvs[ f ] ) {

							var uvs_f = uvs[ f ];
							_uvA.copy( uvs_f[ 0 ] );
							_uvB.copy( uvs_f[ 1 ] );
							_uvC.copy( uvs_f[ 2 ] );

							intersection.uv = Triangle.getUV( _intersectionPoint, fvA, fvB, fvC, _uvA, _uvB, _uvC, new Vector2() );

						}

						intersection.face = face;
						intersection.faceIndex = f;
						intersects.push( intersection );

					}

				}

			}

		}

	} );

	checkIntersection( object, material, raycaster, ray, pA, pB, pC, point ) {

		var intersect;

		if ( material.side === BackSide ) {

			intersect = ray.intersectTriangle( pC, pB, pA, true, point );

		} else {

			intersect = ray.intersectTriangle( pA, pB, pC, material.side !== DoubleSide, point );

		}

		if ( intersect === null ) { return null; }

		_intersectionPointWorld.copy( point );
		_intersectionPointWorld.applyMatrix4( object.matrixWorld );

		var distance = raycaster.ray.origin.distanceTo( _intersectionPointWorld );

		if ( distance < raycaster.near || distance > raycaster.far ) { return null; }

		return {
			distance: distance,
			point: _intersectionPointWorld.clone(),
			object: object
		};

	}

	checkBufferGeometryIntersection( object, material, raycaster, ray, position, morphPosition, morphTargetsRelative, uv, uv2, a, b, c ) {

		_vA.fromBufferAttribute( position, a );
		_vB.fromBufferAttribute( position, b );
		_vC.fromBufferAttribute( position, c );

		var morphInfluences = object.morphTargetInfluences;

		if ( material.morphTargets && morphPosition && morphInfluences ) {

			_morphA.set( 0, 0, 0 );
			_morphB.set( 0, 0, 0 );
			_morphC.set( 0, 0, 0 );

			for ( var i = 0, il = morphPosition.length; i < il; i ++ ) {

				var influence = morphInfluences[ i ];
				var morphAttribute = morphPosition[ i ];

				if ( influence === 0 ) { continue; }

				_tempA.fromBufferAttribute( morphAttribute, a );
				_tempB.fromBufferAttribute( morphAttribute, b );
				_tempC.fromBufferAttribute( morphAttribute, c );

				if ( morphTargetsRelative ) {

					_morphA.addScaledVector( _tempA, influence );
					_morphB.addScaledVector( _tempB, influence );
					_morphC.addScaledVector( _tempC, influence );

				} else {

					_morphA.addScaledVector( _tempA.sub( _vA ), influence );
					_morphB.addScaledVector( _tempB.sub( _vB ), influence );
					_morphC.addScaledVector( _tempC.sub( _vC ), influence );

				}

			}

			_vA.add( _morphA );
			_vB.add( _morphB );
			_vC.add( _morphC );

		}

		if ( object.isSkinnedMesh ) {

			object.boneTransform( a, _vA );
			object.boneTransform( b, _vB );
			object.boneTransform( c, _vC );

		}

		var intersection = checkIntersection( object, material, raycaster, ray, _vA, _vB, _vC, _intersectionPoint );

		if ( intersection ) {

			if ( uv ) {

				_uvA.fromBufferAttribute( uv, a );
				_uvB.fromBufferAttribute( uv, b );
				_uvC.fromBufferAttribute( uv, c );

				intersection.uv = Triangle.getUV( _intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2() );

			}

			if ( uv2 ) {

				_uvA.fromBufferAttribute( uv2, a );
				_uvB.fromBufferAttribute( uv2, b );
				_uvC.fromBufferAttribute( uv2, c );

				intersection.uv2 = Triangle.getUV( _intersectionPoint, _vA, _vB, _vC, _uvA, _uvB, _uvC, new Vector2() );

			}

			var face = new Face3( a, b, c );
			Triangle.getNormal( _vA, _vB, _vC, face.normal );

			intersection.face = face;

		}

		return intersection;

	}

// -------------------------------------------------//
// -------------------------------------------------//

	var _vector$2 = new Vector3();
	var _segCenter = new Vector3();
	var _segDir = new Vector3();
	var _diff = new Vector3();

	var _edge1 = new Vector3();
	var _edge2 = new Vector3();
	var _normal = new Vector3();

	///
	// @author bhouston / http://clara.io
	///

	Ray( origin, direction ) {

		this.origin = ( origin !== undefined ) ? origin : new Vector3();
		this.direction = ( direction !== undefined ) ? direction : new Vector3( 0, 0, - 1 );

	}
		at: function ( t, target ) {

			if ( target === undefined ) {

				console.warn( 'THREE.Ray: .at() target is now required' );
				target = new Vector3();

			}

			return target.copy( this.direction ).multiplyScalar( t ).add( this.origin );

		},


//GteIntrRay3Triangle3
		intersectTriangle: function ( a, b, c, backfaceCulling, target ) {

			// Compute the offset origin, edges, and normal.

			// from http://www.geometrictools.com/GTEngine/Include/Mathematics/GteIntrRay3Triangle3.h

			_edge1.subVectors( b, a );
			_edge2.subVectors( c, a );
			_normal.crossVectors( _edge1, _edge2 );

			// Solve Q + t*D = b1*E1 + b2*E2 (Q = kDiff, D = ray direction,
			// E1 = kEdge1, E2 = kEdge2, N = Cross(E1,E2)) by
			//   |Dot(D,N)|*b1 = sign(Dot(D,N))*Dot(D,Cross(Q,E2))
			//   |Dot(D,N)|*b2 = sign(Dot(D,N))*Dot(D,Cross(E1,Q))
			//   |Dot(D,N)|*t = -sign(Dot(D,N))*Dot(Q,N)
			var DdN = this.direction.dot( _normal );
			var sign;

			if ( DdN > 0 ) {

				if ( backfaceCulling ) { return null; }
				sign = 1;

			} else if ( DdN < 0 ) {

				sign = - 1;
				DdN = - DdN;

			} else {

				return null;

			}

			_diff.subVectors( this.origin, a );
			var DdQxE2 = sign * this.direction.dot( _edge2.crossVectors( _diff, _edge2 ) );

			// b1 < 0, no intersection
			if ( DdQxE2 < 0 ) {

				return null;

			}

			var DdE1xQ = sign * this.direction.dot( _edge1.cross( _diff ) );

			// b2 < 0, no intersection
			if ( DdE1xQ < 0 ) {

				return null;

			}

			// b1+b2 > 1, no intersection
			if ( DdQxE2 + DdE1xQ > DdN ) {

				return null;

			}

			// Line intersects triangle, check if ray does.
			var QdN = - sign * _diff.dot( _normal );

			// t < 0, no intersection
			if ( QdN < 0 ) {

				return null;

			}

			// Ray intersects triangle.
			return this.at( QdN / DdN, target );

		},
		
		
		
// Moller Trumbore, Barycentric
// Similar to above, but return U,V,T values
// https://en.wikipedia.org/wiki/M%C3%B6ller%E2%80%93Trumbore_intersection_algorithm
		var _origSub=new THREE.Vector3();
		var _baryValues=new THREE.Vector3();
		var _rayDirCross = new Vector3();
		var _origSubCrossE1 = new Vector3();
		mollerBaryValuesIntersect: function ( a, b, c, backfaceCulling, target ) {

			_edge1.subVectors( b, a );
			_edge2.subVectors( c, a );
			//_normal.crossVectors( _edge1, _edge2 );
			_rayDirCross.crossVectors( this.direction, _edge2 );
			
			let intersect=true;
			let epsilon=.0001; // ## Find propper epsilon value
			
			let det=_edge1.dot( _rayDirCross );
			// ## If backfaceCulling, determinant is always positive
			// ##   Can be used in bU and bV checks
			// ##   Not implemented yet here
			if(backfaceCulling && det<epsilon){
				//return null; // Back Facing Try
				intersect=false;
			}
			
			if(det>-epsilon && det<epsilon){ 
				intersect=false;
				return null;
			}
			let inv_det=1/det;
			
			_origSub.subVectors( this.origin, a );
			let bU=_origSub.dot( _rayDirCross ) * inv_det;
			_baryValues.x=bU;
			
			if( bU<0 || bU>1){
				intersect=false;
				//return null;
			}
			
			_origSubCrossE1.cross( _origSub, _edge1);
			
			let bV= this.direction.dot( _origSubCrossE1 ) * inv_det;
			_baryValues.y=bV;
			
			if( bV<0 || bU+bV>1.0 ){
				intersect=false;
				//return null;
			}
			
			let rT=_edge2.dot( _origSubCrossE1 ) * inv_det;
			_baryValues.z=rT;
			
			return intersect;
			
		},
		mollerBoolIntersect: function ( a, b, c, backfaceCulling, target ) {

			_edge1.subVectors( b, a );
			_edge2.subVectors( c, a );
			//_normal.crossVectors( _edge1, _edge2 );
			_rayDirCross.crossVectors( this.direction, _edge2 );
			
			let det=_edge1.dot( _rayDirCross );
			if(backfaceCulling && det<epsilon){
				return false; // Back Facing Try
			}
			
			
			let intersect=true;
			
			let epsilon=.0001; // ## Find propper epsilon value
			if(det>-epsilon && det<epsilon){ 
				return false;
			}
			let inv_det=1/det;
			
			_origSub.subVectors( this.origin, a );
			let bU=_origSub.dot( _rayDirCross ) * inv_det;
			
			if( bU<0 || bU>1){
				return false;
			}
			
			_origSubCrossE1.cross( _origSub, _edge1);
			
			let bV= this.direction.dot( _origSubCrossE1 ) * inv_det;
			
			if( bV<0 || bU+bV>1.0 ){
				return false;
			}
			
			return true;
			
		},
		*/