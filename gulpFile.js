const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', () => {
   return gulp.src('app/less/style.less')
       .pipe(less())
       .pipe(gulp.dest('app/css'))
});

gulp.task('watch', () => {
   gulp.watch('app/less/style.less', ['less']);
});