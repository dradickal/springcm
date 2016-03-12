var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');
    
gulp.task('serve', ['css'], function(){
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    
    gulp.watch('./sass/**/*.scss', ['css']);
    gulp.watch(['./public/**/*.html', './public/**/*.js']).on('change', browserSync.reload);
});

gulp.task('js', function() {
   return gulp.src('./src/js/**/*.js')
      .pipe(concat('site.js'))
      .pipe(gulp.dest('./public/js'));
});

gulp.task('css', function() {
    gulp.src('./sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css/'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'js'], function() {
  gulp.watch('./src/js/**/*.js', ['js'])
});