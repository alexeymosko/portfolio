var gulp = require("gulp");
var rename = require("gulp-rename");
var angularFilesort = require('gulp-angular-filesort');
var concat = require('gulp-concat');
var devPath = './dev/';
var publicPath = './public/';
gulp.task('dev-vendor', function(){
	return gulp.src(['./bower_components/**/*.min.js', './sources/js/*.js'])
	.pipe(rename({dirname: ''}))
	.pipe(gulp.dest(devPath + 'vendor'))
});

gulp.task('public-vendor', function(){
	return gulp.src(['./sources/js/*.js', 'bower_components/angular/angular.min.js',
	'bower_components/angular-sanitize/angular-sanitize.min.js', 
	'./node_modules/angular-ui-router/release/angular-ui-router.min.js'
	])
	//.pipe(angularFilesort())
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest(publicPath + 'vendor'))
});


