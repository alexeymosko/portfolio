var gulp = require("gulp");
var less = require('gulp-less'); // модуль для превращения less-файлов в css
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var autoprefixer = require('gulp-autoprefixer');
var devPath = './dev/';
var publicPath = './public/';

gulp.task('dev-less', ['dev-sprite'], function () {
  return gulp.src(['sources/less/*.less', 'app/components/**/*.less', 'app/shared/**/*.less'])
  //	.pipe(concat('all.less'))
  	.pipe(rename({dirname: ''}))
    .pipe(gulp.dest(devPath + 'less'));
});

gulp.task('public-less', ['public-sprite'], function () {
  return gulp.src(['sources/less/*.less', 'app/components/**/*.less', 'app/shared/**/*.less'])
  	.pipe(concat('build.less'))
    .pipe(less())
  	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
  	.pipe(rename({dirname: '', extname: '.css'}))
    .pipe(gulp.dest(publicPath + 'css'));
});