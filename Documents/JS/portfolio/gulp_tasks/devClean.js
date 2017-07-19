var gulp = require("gulp");
var clean = require('gulp-clean');
var devPath = './dev/';
var publicPath = './public/';

gulp.task('dev-clean', function() {
    return gulp.src(devPath, {read: false})
        .pipe(clean());
});
gulp.task('public-clean', function() {
    return gulp.src(publicPath, {read: false})
        .pipe(clean());
});