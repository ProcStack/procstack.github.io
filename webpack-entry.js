import './Source/style/pxlNavStyle.css';
const js = require.context('./Source/js/', false, /\.js$/);

js.keys().forEach(key => js(key));