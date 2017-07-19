var gulp = require("gulp");
var templateCache = require('gulp-angular-templatecache');
var devPath = './dev/';
var publicPath = './public/';

gulp.task('dev-templates-cache', function () {
  return gulp.src('./app/**/*Template.html')
    .pipe(templateCache('templates.js', {
    	module: 'portfolio'
    }))
    .pipe(gulp.dest(devPath + '/app'));
});

gulp.task('public-templates-cache', function () {
  return gulp.src('./app/**/*Template.html')
    .pipe(templateCache('templates.js', {
    	module: 'portfolio'
    }))
    .pipe(gulp.dest('./tmp/app'));
});