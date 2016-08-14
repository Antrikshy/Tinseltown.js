var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass-it-up', function() {
    gulp.src('./styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions', '> 1%', 'Firefox ESR']}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
    gulp.start('sass-it-up');
});

gulp.watch('./src/*.scss', function() {
    gulp.start('sass-it-up');
});