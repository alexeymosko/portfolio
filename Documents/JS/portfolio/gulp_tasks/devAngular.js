var gulp = require("gulp");
var iife = require('gulp-iife');
var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var devPath = './dev/';
var publicPath = './public/';

gulp.task('dev-angular', function(){
	return gulp.src('./app/**/*.js')
  	.pipe(iife())
	.pipe(gulp.dest(devPath + '/app'));
});

gulp.task('public-angular',['public-templates-cache'], function(){
	return gulp.src(['./app/**/*.js', './tmp/app/templates.js'])
  	.pipe(iife())
  	.pipe(angularFilesort())
  	.pipe(concat('build.js'))
	.pipe(gulp.dest(publicPath + '/app'));
});