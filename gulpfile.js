var gulp = require('gulp')
var watch = require('gulp-watch')
var browserSync = require('browser-sync')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

//编译Sass
gulp.task('sass', function () {
  gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
})

// gulp.task('default', ['sass'], function () {
gulp.task('default', function () {
  browserSync.init({
    server: {
      baseDir: './'
    },
    port: 8050
  })
  gulp.watch('view/**/**').on('create', browserSync.reload)
  gulp.watch('view/**/**').on('change', browserSync.reload)
  // gulp.watch('scss/*.scss', ['sass']).on('change', browserSync.reload)
  // gulp.watch("scss/*.scss").on("create", ['sass']);
  // gulp.watch("scss/*.scss").on("change", browserSync.reload);
  // gulp.watch("index.html").on("change", browserSync.reload);
})