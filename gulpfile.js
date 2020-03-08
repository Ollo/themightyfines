const gulp = require('gulp')
const sass = require('gulp-sass')

gulp.task('css', function () {
  return gulp.src('./src/styles/main.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .on('error', sass.logError)
  .pipe(gulp.dest('./src/_includes'))
})

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss', gulp.parallel('css'))
})

gulp.task('build', function () {
  gulp.parallel(
    'css'
  )
})