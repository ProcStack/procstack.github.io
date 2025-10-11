var whiteList=['pxl-1.5.6'];
this.addEventListener('install', function(e){
	e.waitUntil(
		caches.open(whiteList[0]).then(function(cache){
			return cache.addAll([
				'index.php',
				'trans.png',
				'pxlLogo.png',
				'pxlQR.png',
				'pixelmancer.css',
				'jquery-1.11.0.min.js',
				'loaders/duelSpin.7.png',
				'js/brushTools.js',
				'js/canvasEffects.js',
				'js/colorSphere.js',
				'js/dialogues.js',
				'js/drawTouch.js',
				'js/imby.js',
				'js/interface.js',
				'js/loader.js',
				'js/math.js',
				'js/menu.js',
				'js/prePostTouch.js',
				'js/variables.js',
				'js/howTo.js',
				'js/selectTool.js',
				'js/boot.js',
				'js/mapGLSL/map_three.min.js',
				'js/mapGLSL/EffectComposer.js',
				'js/mapGLSL/RenderPass.js',
				'js/mapGLSL/CopyShader.js',
				'js/mapGLSL/ShaderPass.js',
				'js/mapGLSL/dat.gui.min.js',
				'js/mapGLSL/stats.min.js',
				'js/mapGLSL/map_boot.js',
				'js/mapGLSL/map_variables.js',
				'js/mapGLSL/map_interface.js',
				'js/mapGLSL/map_coreScripts.js',
				'js/mapGLSL/map_cameraControl.js',
				'textures/pxlmancerIntroCard_diffuse.png',
				'textures/pxlmancerIntroCard_glowMask.jpg',
				'textures/rgbNoise_HighFreq_01_Tile.jpg',
				'textures/rgbNoise_LowFreq_01.jpg'
			]);
		})
	);
});
this.addEventListener('fetch', function(e){
	/*if(e.request.headers.get('Accept').indexOf('text/html') !== -1){
		e.respondWith(
			fetch(e.request).then(function(responce){
				return caches.open(whiteList[0]).then(function(cache){
					cache.put(e.request, responce.clone());
					return responce;
				});
			}).catch(function() {
				caches.match(e.request).then(function(resp){
					return resp;
				})
			})
		);
		return;
	}*/
	/*e.respondWith(
		caches.match(e.request).then(function(resp){
			return resp || fetch(e.request).then(function(responce){
				return caches.open(whiteList[0]).then(function(cache){
					cache.put(e.request, responce.clone());
					return responce;
				});
			});
		})
	);*/
	e.respondWith(
		caches.match(e.request).then(function(responce){
			return responce || fetch(e.request);
		})
	);
});
this.addEventListener('activate', function(e){
	e.waitUntil(
		caches.keys().then(function(keyList){
			return Promise.all(keyList.map(function(key){
				if(whiteList.indexOf(key) === -1){
					return caches.delete(key);
				}
			}));
		})
	);
});
