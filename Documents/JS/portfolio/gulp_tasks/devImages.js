var gulp = require("gulp");
var devPath = './dev/';
var publicPath = './public/';

gulp.task('dev-images', function(){
	return gulp.src('sources/images/*.{jpg,png,svg}')
  //  .pipe(imagemin())
    .pipe(gulp.dest(devPath + '/images'))
});

gulp.task('public-images', function(){
	return gulp.src('sources/images/*.{jpg,png,svg}')
  //  .pipe(imagemin())
    .pipe(gulp.dest(publicPath + '/images'))
});