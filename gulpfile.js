var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
    gulp.src('./lib/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions', '> 1%', 'Firefox ESR']}))
        .pipe(gulp.dest('./lib/'));
});

gulp.watch('./lib/*.scss', function() {
    gulp.start('default');
});