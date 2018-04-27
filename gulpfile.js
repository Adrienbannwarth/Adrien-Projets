// options
var nameTheme = "";
var proxy = "http://127.0.0.1/folio/";
//var proxy = "http://wp.dev/";


// modules
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS     = require('gulp-clean-css');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;


// Static Server + watching scss/html/js/json files
gulp.task('serve', ['sass'], function() {
    browserSync({
        proxy: proxy
    });
    gulp.watch("./**/*.scss", ['sass']);
    gulp.watch('./**/*.php').on('change', browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);
});


// Compile sass into CSS, prefix it & auto-inject into browsers
gulp.task('sass', function() {
    return sass('./assets/scss/')
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(autoprefixer())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});


gulp.task('default', ['serve']);