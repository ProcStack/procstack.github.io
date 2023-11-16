// Defaults; Header, Verts, Frags
import Defaults from  "./defaults.js" 

// Point Verts, Frags
import PointShaders_Trail from  "./PointShaders_Trail.js" 

// Composition Passes
import BloomShaderPass from  "./bloomShaderPass.js" 
import BlurShaderPass from  "./blurShaderPass.js" 
import ScatterShaderPass from  "./scatterMixShaderPass.js" 


const Shaders = { Defaults, PointShaders_Trail, BloomShaderPass, BlurShaderPass, ScatterShaderPass }
export default Shaders