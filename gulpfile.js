const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
// const browserSync = require('browser-sync');

//a task to compile our sass
gulp.task('styles', () => {
    return gulp.src('./dev/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/styles'))
});

//a task to compile our js
gulp.task('scripts', () => {
    return gulp.src('./dev/scripts/main.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./public/scripts'))
});

//a task to watch all of my other tasks
gulp.task('watch', () => {
    gulp.watch('./dev/styles/**/*.scss', ['styles']);
    gulp.watch('./dev/scripts/main.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);