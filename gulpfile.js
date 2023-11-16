var gulp = require('gulp');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');

// TODO : Implement config.json

gulp.task('build', function () {

  // use `vinyl-transform` to wrap the regular ReadableStream returned by `b.bundle();` with vinyl file object
  // so that we can use it down a vinyl pipeline
  // while taking care of both streaming and buffered vinyl file objects
  var browserified = transform(function(filename) {
    // filename = './source/scripts/app.js' in this case
    return browserify(filename)
      .bundle();
  });

  return gulp.src(['./source/js/Proc.js']) // you can also use glob patterns here to browserify->uglify multiple files
    .pipe(browserified)
        .pipe(source('gulpMinimizePipe.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build'));
});

gulp.task('default', gulp.series('build'), function(done){
    gulp.watch(['./source/style/*.css'], ['css']);
    gulp.watch(['./source/js/**/*.js'], ['js']);
});

/*const browserify = require('browserify');
const gulp = require('gulp');
//const { src, dest, series, parallel }  = require("gulp");
const minify = require("gulp-minify");
const rename = require("gulp-rename");
const useref = require("gulp-useref");
const log = require('gulplog');
const plumber = require('gulp-plumber');
const source = require('vinyl-source-stream');
var transform = require('vinyl-transform');

function gulpMinimizePipe(done) {
    return browserify({
            entries: [
                './src/main.js'  // THIS LINE HAS CHANGED FROM THE QUESTION
            ],
            standalone: 'TestModule'
        })
        .transform('babelify')
        .bundle()
            .on('error', log.error)
        .pipe(source('gulpMinimizePipe.js'))
        .pipe(plumber())
        .pipe(gulp.dest('./dist'))
        .pipe(plumber.stop())
        .pipe(done())
}
exports.default = gulpMinimizePipe;
*/
/*
//Sorta Working
function minifyjs() {
    return src('source/js/**//*.js')
		.pipe(useref())
        .pipe(minify({noSource: true}))
		.pipe(rename({
		  suffix: '.min'
		}))
        .pipe(dest('build/js/'))
}
exports.default = minifyjs;
*/

/*
gulp.task( "browserify", function() {
    return browserify('source/js/Neurous.js')
        .transform('babelify')
        .bundle()
            .on('error', log.error)
        //.pipe(source('gulpMinimizePipe.js'))
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));
})*/
/*
gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  return gulp.src(['./source/Neurous.js'])
    .pipe(browserified)
    .pipe(gulp.dest('./dist'));
});*/

/*const { src, dest, series, parallel }  = require("gulp");

const rename = require("gulp-rename");
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function minifycss() {
  return src('source/style/Neurous.css')
    .pipe(postcss([
      postcssImport(),
      precss(),
      autoprefixer(),
      cssnano(),
    ]))
		.pipe(rename({
		  suffix: '.min'
		}))
    .pipe(dest('build/style/'));
}


//const build = gulp.series(clean, minifyjs);// gulp.parallel(styles, scripts));
//exports.default = minifyjs;
//exports.default = series( clean, parallel( minifyjs, minifycss ));
exports.css = minifycss;//parallel( minifyjs, minifycss );
*/