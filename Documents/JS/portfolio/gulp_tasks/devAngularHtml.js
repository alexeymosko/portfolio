var gulp = require("gulp");
var devPath = './dev/';
var publicPath = './public/';

gulp.task('dev-angular-html', function(){
	return gulp.src('./app/**/*.html')
	.pipe(gulp.dest(devPath + '/app'));
});

gulp.task('public-angular-html', function(){
	return gulp.src('./app/**/*.html')
	.pipe(gulp.dest(publicPath + '/app'));
});