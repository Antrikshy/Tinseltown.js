const gulp = require('gulp');
const rollup = require('gulp-rollup-each');
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');;
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

function buildJs(cb) {
    // ESM output
    gulp.src('src/tinseltown.js')
        .pipe(rollup({ output: { format: 'es' } }))
        .pipe(uglify())
        .pipe(rename('tinseltown.esm.min.js'))
        .pipe(gulp.dest('./dist/'));

    // UMD output
    gulp.src('src/tinseltown.js')
        .pipe(rollup({ output: { format: 'umd', name: 'Tinseltown' } }))
        .pipe(uglify())
        .pipe(rename('tinseltown.umd.min.js'))
        .pipe(gulp.dest('./dist/'));

    cb();
}

function sassItUp(cb) {
    gulp.src('./src/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
    cb();
}

function watchFiles() {
    gulp.watch('./src/tinseltown.js', buildJs);
    gulp.watch('./src/*.scss', sassItUp);
}

exports.default = gulp.parallel(buildJs, sassItUp);
exports.watch = watchFiles;