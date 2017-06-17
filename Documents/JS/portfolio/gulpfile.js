var gulp = require("gulp");
var inject = require('gulp-inject'); //модуль для встраивания одних файлов в другие
var less = require('gulp-less'); // модуль для превращения less-файлов в css
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');


var devPath = './dev/';



gulp.task('dev-less', function () {
  return gulp.src(['sources/less/*.less', 'app/components/**/*.less', 'app/shared/**/*.less'])
  	.pipe(concat('all.less'))
    .pipe(gulp.dest(devPath + 'less'));
});

gulp.task('dev-index', ['dev-less'], function(){
	var devLess = gulp.src(devPath + 'less/*.less', {read: false});
	return gulp.src('index.html')
	.pipe(gulp.dest(devPath))
	.pipe(inject(devLess, {
		relative: true,
		transform: function(filepath){
			if (filepath.slice(-5) === '.less') {
          		return '<link rel="stylesheet/less" type="text/css" href="' +  filepath + '">'
        	}
        	return inject.transform.apply(inject.transform, arguments)
		}
	}))
	.pipe(gulp.dest(devPath));
});

gulp.task('dev-vendor', function(){
	return gulp.src(mainBowerFiles({
  	filter:'**/*.min.js',
    paths: {
        bowerDirectory: './bower_components',
        bowerJson: './bower.json'
    }, 
    base: './bower_components',
    overrides: {
    	'bower-package': {
    		main: './**/*.min.js'
    	}
    }
}))
	.pipe(gulp.dest(devPath + 'vendor'))
});









