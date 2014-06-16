var gulp = require('gulp');
var coffee = require('gulp-coffee');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var rimraf = require('rimraf');

var paths = {
    entry:  './src/app.coffee',
    coffee: './src/*.coffee',
    dest:   './dest'
};

gulp.task('clean', function(cb){
  rimraf(paths.dest, cb);
});

gulp.task('compile', ['clean'], function() {
  return gulp.src(paths.entry, { read: false })
    .pipe(browserify({
      transform: ['coffeeify'],
      extensions: ['.coffee']
    }))
    .pipe(rename('app.js'))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.coffee, ['compile']);
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('default', ['compile', 'watch', 'connect']);
