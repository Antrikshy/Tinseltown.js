var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('minify-js', function() {
    gulp.src('src/*.js')
        .pipe(uglify())
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
    gulp.start('minify-js', 'sass-it-up');
});

gulp.watch('./src/*.js', function(event) {
    gulp.start('minify-js');
});

gulp.watch('./src/*.scss', function(event) {
    gulp.start('sass-it-up');
});