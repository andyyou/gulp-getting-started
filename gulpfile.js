var gulp = require('gulp')
var connect = require('gulp-connect')
var sass = require('gulp-sass')
var babel = require('gulp-babel')

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload())
})

gulp.task('sass:watch', function () {
  return gulp.watch('scss/**/*.scss', ['sass'])
})

gulp.task('html', function () {
  return gulp.src('./**/*.html')
    .pipe(connect.reload())
})

gulp.task('html:watch', function () {
  return gulp.watch('./**/*.html', ['html'])
})

gulp.task('es', function () {
  return gulp.src('./es/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
})

gulp.task('es:watch', function () {
  return gulp.watch('./es/**/*.js', ['es'])
})

gulp.task('webserver', function () {
  connect.server({
    livereload: true
  })
})

gulp.task('default', ['sass', 'es', 'webserver', 'html:watch', 'sass:watch', 'es:watch'])
