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
var requireDir = require('require-dir');
var dir = requireDir('./gulp_tasks');


var devPath = './dev/';
var publicPath = './public/';


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

gulp.task('public-watch', function(){
	browserSync.init({
        server: {
            baseDir: publicPath
        }
    });
});	

gulp.task('default', function(){
	runSequence("dev-clean", "dev-index", "dev-angular-html", "dev-images", "dev-watch", "dev-fonts");
});

gulp.task('build', function(){
	runSequence("public-clean", "public-index", "public-angular-html", "public-images", "public-watch", "public-fonts");
});










