  
const gulp        = require('gulp');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

gulp.task('styles', function() {
    return gulp.src("scss/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie10'}))
        .pipe(gulp.dest("css"))
});

gulp.task('watch', function() {
    gulp.watch("scss/**/*.+(scss|sass|css)", gulp.parallel('styles'));
});

gulp.task('scripts', function () {
    return gulp.src("js/**/*.js")
        .pipe(gulp.dest("js"));
});


gulp.task('default', gulp.parallel('watch', 'styles', 'scripts'));