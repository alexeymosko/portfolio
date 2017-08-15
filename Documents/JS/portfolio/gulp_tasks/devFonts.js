var gulp = require("gulp");
var devPath = './dev/';
var publicPath = './public/';

gulp.task('dev-fonts', function(){
	return gulp.src('./sources/fonts/*.woff')
	.pipe(gulp.dest(devPath + '/fonts'));
});

gulp.task('public-fonts', function(){
	return gulp.src('./sources/fonts/*.woff')
	.pipe(gulp.dest(publicPath + '/fonts'));
});

