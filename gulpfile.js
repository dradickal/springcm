var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass');
    
gulp.task('serve', ['css'], function(){
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
    
    gulp.watch('./sass/**/*.scss', ['css']);
    gulp.watch(['./public/**/*.html']).on('change', browserSync.reload);
});

gulp.task('css', function() {
    gulp.src('./sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./public/css/'))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve'], function() {

});