
export function multiTextureVert(){
	let ret=`
	#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
	#else
	precision mediump float;
	#endif
	#define PI 3.14159265358979
	
	uniform vec2 time;
	uniform float depthInfluence;
	uniform float guiInput1;
	uniform float guiInput2;
	uniform float beatMultiplier;

	varying vec2 vUvAlpha;
	varying float height;
	varying float falloff;

	vec2 modRes = vec2(64.0, 64.0);

	///position for distance measurement, the center of the circle
	vec2 center = vec2(0.5, 0.5);

	float map(float value, float min1, float max1, float min2, float max2) {
		return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
	}

	float random (in vec2 _st) {
		return fract(sin(dot(_st.xy,
		vec2(12.9898,78.233)))*
		43758.5453123);
	}

	mat2 rotate2d(float _angle){
		return mat2(cos(_angle),-sin(_angle),
		sin(_angle),cos(_angle));
	}

	///noise stuff
	vec4 permute(vec4 x, float _permuteVal){
		return mod(((x*34.0)+1.0)*x, _permuteVal);
	}

	///noise stuff
	vec4 taylorInvSqrt(vec4 r){
		return 1.79284291400159 - 0.85373472095314 * r;
	}

	///more noise stuff
	float snoise(vec3 v, float _permuteVal){ 
		const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
		const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

		// First corner
		vec3 i  = floor(v + dot(v, C.yyy) );
		vec3 x0 =   v - i + dot(i, C.xxx) ;

		// Other corners
		vec3 g = step(x0.yzx, x0.xyz);
		vec3 l = 1.0 - g;
		vec3 i1 = min( g.xyz, l.zxy );
		vec3 i2 = max( g.xyz, l.zxy );

		//  x0 = x0 - 0. + 0.0 * C 
		vec3 x1 = x0 - i1 + 1.0 * C.xxx;
		vec3 x2 = x0 - i2 + 2.0 * C.xxx;
		vec3 x3 = x0 - 1. + 3.0 * C.xxx;

		// Permutations
		i = mod(i, 289.0 ); 
		vec4 p = permute( permute( permute( 
		i.z + vec4(0.0, i1.z, i2.z, 1.0 ) , _permuteVal)
		+ i.y + vec4(0.0, i1.y, i2.y, 1.0 ), _permuteVal) 
		+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ), _permuteVal);

		// Gradients
		// ( N*N points uniformly over a square, mapped onto an octahedron.)
		float n_ = 1.0/7.0; // N=7
		vec3  ns = n_ * D.wyz - D.xzx;

		vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  //  mod(p,N*N)

		vec4 x_ = floor(j * ns.z);
		vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

		vec4 x = x_ *ns.x + ns.yyyy;
		vec4 y = y_ *ns.x + ns.yyyy;
		vec4 h = 1.0 - abs(x) - abs(y);

		vec4 b0 = vec4( x.xy, y.xy );
		vec4 b1 = vec4( x.zw, y.zw );

		vec4 s0 = floor(b0)*2.0 + 1.0;
		vec4 s1 = floor(b1)*2.0 + 1.0;
		vec4 sh = -step(h, vec4(0.0));

		vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
		vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

		vec3 p0 = vec3(a0.xy,h.x);
		vec3 p1 = vec3(a0.zw,h.y);
		vec3 p2 = vec3(a1.xy,h.z);
		vec3 p3 = vec3(a1.zw,h.w);

		//Normalise gradients
		vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
		p0 *= norm.x;
		p1 *= norm.y;
		p2 *= norm.z;
		p3 *= norm.w;

		// Mix final noise value
		vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
		m = m * m;
		return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
		dot(p2,x2), dot(p3,x3) ) );
	}

	float fbm( vec3 p, float _permuteVal) {
		float f = 0.0;
		f += 0.5000*snoise( p , _permuteVal); p = p*2.02;
		f += 0.2500*snoise( p , _permuteVal); p = p*2.03;
		f += 0.1250*snoise( p , _permuteVal); p = p*2.01;
		f += 0.0625*snoise( p , _permuteVal);
		return f/0.9375;
	}



	float shader01(vec2 _unitCoord, vec2 _multCoord, vec2 _multFractCoord, float _guiInput1){
		float _sum;

		float ramp = distance(_unitCoord, vec2(0.5, 0.5));

		vec2 center = vec2(0.0, 0.0);

		float distanceMultiplier = 1.0/distance(vec2(0.5, 0.5), vec2(0.0,0.0));

		vec2 pixellate = vec2( floor(_unitCoord.x * modRes.x) / modRes.x,
		floor(_unitCoord.y * modRes.y) / modRes.y) ;

		//a way to interpret time.x from a fraction to discrete options
		//float t = time.x * 0.001;

		_multFractCoord -= vec2(0.5);

		_multFractCoord = rotate2d( 0.25*PI ) * _multFractCoord;

		float dist = distance(_multFractCoord, center);
		float distPixellate = fract(distance(pixellate, vec2(0.5, 0.5))*distanceMultiplier-(time.x*beatMultiplier));

		distPixellate *= 1.2;

		if(distPixellate > 1.0){

			distPixellate = map(distPixellate, 1.0, 1.1, 1.0, 0.0);

		}

		float rand = distPixellate*random(pixellate)*0.25-0.2;

		if(dist < _guiInput1){
			_sum += 1.0-smoothstep(rand, rand+ 0.25, abs(_multFractCoord.x));
			_sum += 1.0-smoothstep(rand, rand+ 0.25, abs(_multFractCoord.y));
			_sum -= smoothstep(0.4, 0.5, dist);
		}

		ramp = smoothstep(0.5, 0.3, ramp);

		_sum *= ramp;

		return _sum;

	}

	float shader02(vec2 _unitCoord, vec2 _multCoord, vec2 _multFractCoord, float _guiInput1){

		float _sum;
		float timeMult = beatMultiplier*time.x;
		vec2 movRate = vec2(fract(timeMult), fract(timeMult*5.0));

		float timeStep;

		if(fract(timeMult) > 0.2){

			timeStep = floor(timeMult)/2000.0;

		} else{

			timeStep = floor(timeMult*1000.0)/200.0;

		}

		vec2 center = vec2(0.5, 0.5);

		vec2 pixellate = vec2( floor(_unitCoord.x * modRes.x) / modRes.x, 0.0) ;
		float dist = distance(pixellate, center)*2.0;

		float t = 1.4-(fract(random(pixellate+timeStep)*0.9 ));

		float yy = fract(_multCoord.y+movRate.y)*2.0;
		float xx = fract(_multCoord.x+movRate.x)*2.0;

		float rand = random(pixellate)*_guiInput1 + 0.75;

		if(yy > 1.0){
			yy = map(yy, 1.0, 2.0, 1.0, 0.0);
		}

		if(xx > 1.0){
			xx = map(xx, 1.0, 2.0, 1.0, 0.0);
		}

		_sum = smoothstep(t-0.1, t+0.1, yy );

		return _sum;


	}

	float shaderMulti(vec2 _unitCoord, vec2 _multCoord, vec2 _multFractCoord, float _guiInput1, float _permuteVal, float _t1M, float _t2M, float _n1S, float _n2S, int _ramp){


		//this will later become presets, right now its just a way for me to remember how to initialize it
		int rampCase = _ramp;

		float timeMult = beatMultiplier*time.x;

		int selectedPreset = int(mod(timeMult, 5.0));

		float permuteVal   = _permuteVal;
		float time1Mult    = _t1M;
		float time2Mult    = _t2M;
		float noise1Scale  = _n1S;
		float noise2Scale  = _n2S;

		float stepVal 	   = _guiInput1;

		float _sum;

		float ramp;

		float noise = 0.55 + fbm(vec3( _unitCoord * noise1Scale, timeMult *time1Mult), permuteVal);
		noise *= 0.25 + snoise(vec3(_unitCoord * noise2Scale + 1.5, timeMult*time2Mult), permuteVal);

		vec2 position = vec2(fract(_unitCoord.x*modRes.x),
		fract(_unitCoord.y*modRes.y));

		float l = length(position-center);

		if (rampCase == 0) {

			ramp = clamp(fract(_unitCoord.y-timeMult)-0.5, -0.1, 1.0);
			_sum = ramp*noise;
		}
		else if(rampCase == 1){
			ramp = clamp(fract(_unitCoord.x-timeMult)-0.5, -0.1, 1.0);
			_sum = ramp*noise;
		}
		else if(rampCase == 2){
			_sum = noise;
		}
		else if(rampCase == 3){
			ramp = clamp(fract(_unitCoord.x - timeMult) - 0.5, -0.1, 1.0);
			ramp = 1.0 - smoothstep(ramp, ramp + 0.2, l);
			_sum = ramp*noise;

		}

		_sum = smoothstep(stepVal, 1.0, _sum);


		return _sum;


	}


	void main(){

		vec2 vUvCd = uv;

		vec2 unitCoord		= vUvCd;
		vec2 multCoord 		= unitCoord * modRes;
		vec2 multFractCoord = fract(multCoord);

		float sum;
		int option = int(guiInput2);

		if(option == 0) {
			sum = shader01(unitCoord, multCoord, multFractCoord, guiInput1);
		} else if( option == 1){
			sum = shader02(unitCoord, multCoord, multFractCoord, guiInput1);
		} else if( option == 2){
			sum = shaderMulti(unitCoord, multCoord, multFractCoord, guiInput1, 9.0, 0.1, 0.2, 22.0, 3.0, 2);
		} else if( option == 3){
			sum = shaderMulti(unitCoord, multCoord, multFractCoord, guiInput1, 100.0, 0.0, 0.0, 1000.0, 100.0, 3);
		} else if( option == 4){
			sum = shaderMulti(unitCoord, multCoord, multFractCoord, guiInput1, 200.0, 3.0, 500.0, 500.0, 300.0, 0);
		} else if( option == 5){
			sum = shaderMulti(unitCoord, multCoord, multFractCoord, guiInput1, 4500.0, 10.0, 5.0, 150.0, 0.1, 2);
		}


		height = sum;

		float sub=1.0-max(0.0, length(uv-.5)-.4)*10.0;
		falloff=sub;
		
		vec3 pos = position + vec3(0.0,sum*depthInfluence*sub,0.0);

		vec4 modelViewPosition = modelViewMatrix * vec4(pos, 1.0);
		gl_Position = projectionMatrix * modelViewPosition;

	}





	`;
	return ret;
}

export function packedTextureFrag(){ // ## set gl common variables to defines
	let ret=`
	

	#ifdef GL_FRAGMENT_PRECISION_HIGH
	precision highp float;
	#else
	precision mediump float;
	#endif

	#define PI 3.14159265358979

	uniform vec2 time;
	uniform float depthInfluence;
	uniform float guiInput1;
	uniform float guiInput2;
	uniform float beatMultiplier;

	varying float height;
	varying float falloff;

	void main()
	{

		vec4 color01  = vec4(0.005, 0.015, 0.015, 1.0);
		vec4 color02  = vec4(0.5, 0.5, 0.8, 1.0);
		vec4 color03  = vec4(1.0, 1.0, 1.0, 1.0);

		vec4 colorFinal;

		if(height < 0.5){
			colorFinal = mix(color01, color02, height*2.0);
		} else{

			colorFinal = mix(color02, color03, height*2.0-1.0);
		}

		gl_FragColor = colorFinal*falloff;

	}


	`;
	return ret;
}