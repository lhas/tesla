var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('stylus', function(){
  gulp.src('assets/stylesheets/src/main.styl')
  .pipe(stylus({
    compress: true
   }))
  .pipe(gulp.dest('assets/stylesheets'))
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./assets/stylesheets/src/*.styl', './assets/stylesheets/src/sections/*.styl'], ['stylus']);
});

gulp.task('default', ['connect', 'stylus', 'watch']);
