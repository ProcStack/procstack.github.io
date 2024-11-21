import '../Source/style/pxlNav.css';
const js = require.context('../Source/js/', false, /\.js$/);

js.keys().forEach(key => js(key));