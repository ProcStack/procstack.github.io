const { src, dest, series, parallel }  = require("gulp");
const minify = require("gulp-minify");
const rename = require("gulp-rename");
const useref = require("gulp-useref");
const del = require("del");

const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const postcssImport = require('postcss-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const clean = () => del([ 'build' ]);
function minifyjs() {
    return src('Source/js/**/**/*.js', { allowEmpty: true })
		.pipe(useref())
        .pipe(minify({noSource: true}))
		.pipe(rename({
		  suffix: '.min'
		}))
        .pipe(dest('Build/js/'))
}


function minifycss() {
  return src('Source/style/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      postcssImport(),
      precss(),
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('Build/style/'));
}


//const build = gulp.series(clean, minifyjs);// gulp.parallel(styles, scripts));
//exports.default = minifyjs;
exports.default = series( clean, parallel( minifyjs, minifycss ));
exports.js = minifyjs;
exports.css = minifycss;
