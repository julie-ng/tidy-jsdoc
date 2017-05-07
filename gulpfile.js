'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./static/styles/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./static/styles'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./static/styles/*.scss', ['sass'])
})