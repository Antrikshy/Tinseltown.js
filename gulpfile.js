const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

function minifyJs(cb) {
    gulp.src('src/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('.'));
        cb();
};

function sassItUp(cb) {
    gulp.src('./src/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('.'));
        cb();
};

function watchFiles() {
    gulp.watch('./src/*.js', minifyJs);
    gulp.watch('./src/*.scss', sassItUp);
}

exports.default = gulp.parallel(minifyJs, sassItUp);
exports.watch = watchFiles;
