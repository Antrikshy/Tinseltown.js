var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('minify-js', function() {
    gulp.src('src/*.js')
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('.'));
});

gulp.task('sass-it-up', function() {
    gulp.src('./src/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
    gulp.run('minify-js', 'sass-it-up');
});