var gulp = require("gulp");
var devPath = './dev/';
var publicPath = './public/';
var spritesmith = require('gulp.spritesmith');
var buffer = require('vinyl-buffer');
var merge = require('merge-stream');

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
gulp.task('public-sprite', function () {
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
    .pipe(gulp.dest(publicPath + '/images'));
 
  // Pipe CSS stream through CSS optimizer and onto disk 
  var cssStream = spriteData.css
    .pipe(gulp.dest('sources/less'));
 
  // Return a merged stream to handle both `end` events 
  return merge(imgStream, cssStream);
});