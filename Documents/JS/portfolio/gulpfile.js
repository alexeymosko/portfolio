var gulp = require("gulp");
var inject = require('gulp-inject'); //модуль для встраивания одних файлов в другие
var less = require('gulp-less'); // модуль для превращения less-файлов в css
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var angularFilesort = require('gulp-angular-filesort');
var imagemin = require('gulp-imagemin');
var templateCache = require('gulp-angular-templatecache');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');
var merge = require('merge-stream');

var iife = require('gulp-iife');

var devPath = './dev/';



gulp.task('dev-less', ['dev-sprite'], function () {
  return gulp.src(['sources/less/*.less', 'app/components/**/*.less', 'app/shared/**/*.less'])
  //	.pipe(concat('all.less'))
  	.pipe(rename({dirname: ''}))
    .pipe(gulp.dest(devPath + 'less'));
});

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

gulp.task('dev-vendor', function(){
	return gulp.src(['./bower_components/**/*.min.js', './sources/js/*.js'])
	.pipe(rename({dirname: ''}))
	.pipe(gulp.dest(devPath + 'vendor'))
});

gulp.task('dev-images', function(){
	return gulp.src('sources/images/*.{jpg,png,svg}')
  //  .pipe(imagemin())
    .pipe(gulp.dest(devPath + '/images'))
});

gulp.task('dev-templates-cache', function () {
  return gulp.src('./app/**/*Template.html')
    .pipe(templateCache('templates.js', {
    	module: 'portfolio'
    }))
    .pipe(gulp.dest(devPath + '/app'));
});
    
gulp.task('dev-angular', function(){
	return gulp.src('./app/**/*.js')
  .pipe(iife())
	.pipe(gulp.dest(devPath + '/app'));
});

gulp.task('dev-angular-html', function(){
	return gulp.src('./app/**/*.html')
	.pipe(gulp.dest(devPath + '/app'));
});

gulp.task('dev-watch', function(){
	browserSync.init({
        server: {
            baseDir: devPath
        }
    });
	gulp.watch(['./app/**/*.html'], ['dev-templates-cache', 'dev-angular-html']);
	gulp.watch(['sources/less/*.less', 'app/components/**/*.less', 'app/shared/**/*.less'], ['dev-less']);
	gulp.watch(['./app/**/*.js'], ['dev-angular']);
});	

gulp.task('dev-clean', function() {
    return gulp.src(devPath, {read: false})
        .pipe(clean());
});
gulp.task('dev-sprite', function () {
  // Generate our spritesheet 
  var spriteData = gulp.src('sources/sprite/*.jpg').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.less',
    imgPath: '../images/sprite.png'
  }));
 
  // Pipe image stream through image optimizer and onto disk 
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin` 
    .pipe(buffer())
   // .pipe(imagemin())
    .pipe(gulp.dest(devPath + '/images'));
 
  // Pipe CSS stream through CSS optimizer and onto disk 
  var cssStream = spriteData.css
    .pipe(gulp.dest('sources/less'));
 
  // Return a merged stream to handle both `end` events 
  return merge(imgStream, cssStream);
});
gulp.task('default', function(){
	runSequence("dev-clean", "dev-index", "dev-angular-html", "dev-images", "dev-watch");
});









