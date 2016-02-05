var gulp       = require('gulp');
var browserify = require('gulp-browserify');
var babelify   = require("babelify");
var server     = require('gulp-express');

gulp.task('server', function () {
    server.run(['server.js']);
    gulp.watch(['development/**/*.*'], server.notify);
});


gulp.task('browserify', function () {
  gulp.src('./development/src/mustard.js', {entry: true})
    .pipe(browserify({
      transform: ['babelify']
    }))
    .pipe(gulp.dest('./development/dist'));
});

gulp.task('watch', function () {
  gulp.watch('development/**/*.js', ['build']);
});



gulp.task('build', ['browserify']);
gulp.task('default', ['browserify','watch', 'server']);