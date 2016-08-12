var gulp = require('gulp');
var jsmin = require('gulp-jsmin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
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
        .pipe(autoprefixer({browsers: ['last 2 versions', '> 1%', 'Firefox ESR']}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
    gulp.run('minify-js', 'sass-it-up');
});

gulp.watch('./src/*.js', function(event) {
    gulp.run('minify-js');
});

gulp.watch('./src/*.scss', function(event) {
    gulp.run('sass-it-up');
});