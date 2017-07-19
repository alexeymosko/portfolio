var gulp = require("gulp");
var angularFilesort = require('gulp-angular-filesort');
var devPath = './dev/';
var publicPath = './public/';
var inject = require('gulp-inject');


gulp.task('dev-index', ['dev-less', 'dev-vendor', 'dev-templates-cache', 'dev-angular', 'dev-angular-html'], function(){
	var devLess = gulp.src(devPath + 'less/*.less', {read: false});
	var devVendor = gulp.src(devPath + 'vendor/*.js')
	.pipe(angularFilesort());
	var devAngular = gulp.src(devPath + 'app/**/*.js')
	.pipe(angularFilesort());
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
	.pipe(inject(devVendor, {
		relative: true,
		starttag: '<!-- inject:vendor:{{ext}} -->'
	}))
	.pipe(inject(devAngular, {
		relative: true,
		starttag: '<!-- inject:app:{{ext}} -->'
	}))

	.pipe(gulp.dest(devPath));
});

gulp.task('public-index', ['public-less', 'public-vendor', 'public-templates-cache', 'public-angular', 'public-angular-html'], function(){
	var pubCss = gulp.src(publicPath + 'css/*.css', {read: false});
	var pubVendor = gulp.src(publicPath + 'vendor/*.js')
	var pubAngular = gulp.src(publicPath + 'app/**/*.js')
	return gulp.src('index.html')
	.pipe(gulp.dest(publicPath))
	.pipe(inject(pubCss, {
		relative: true
	}))
	.pipe(inject(pubVendor, {
		relative: true,
		starttag: '<!-- inject:vendor:{{ext}} -->'
	}))
	.pipe(inject(pubAngular, {
		relative: true,
		starttag: '<!-- inject:app:{{ext}} -->'
	}))

	.pipe(gulp.dest(publicPath));
});

