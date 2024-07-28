const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// Minify CSS
gulp.task('minify-css', () => {
    return gulp.src('styles.css')  // Replace with your CSS file(s)
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));  // Replace 'dist' with your desired output directory
});

// Minify JS
gulp.task('minify-js', () => {
    return gulp.src('script.js')  // Replace with your JS file(s)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));  // Replace 'dist' with your desired output directory
});

// Default task (run minify-css and minify-js in sequence)
gulp.task('default', gulp.series('minify-css', 'minify-js'));
