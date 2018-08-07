var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')

gulp.task('sass', function() {
   return gulp.src('themes/studio/studio.scss')
   .pipe(rename(function(path){
     path.basename = 'jcui'
   }))
   .pipe(sass())
   .pipe(gulp.dest('dist'))
});

gulp.task('copy', function() {
   return gulp.src('themes/studio/fonts/*')
   .pipe(gulp.dest('dist/fonts'))
});

gulp.task('default',['sass','copy'])