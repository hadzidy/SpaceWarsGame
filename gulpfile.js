var jshint = require('gulp-jshint');
var gulp = require('gulp');
var bower = require('gulp-bower');
var sass = require('gulp-sass')
var jade = require('gulp-jade');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var rimraf = require('gulp-rimraf');
var mainBowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');

gulp.task('bower', function() {
    return bower('./bower_components')
        .pipe(gulp.dest('./dist/js'))
});

gulp.task('sass', function () {
    gulp.src('./app/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('jade', function() {
    gulp.src('./app/views/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('lint', function() {
    return gulp.src('./app/scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('scripts', function () {
    return gulp.src('./app/scripts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: 'main.js',
            target:"ES5"
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('scriptsBuild', function () {
    return gulp.src('./app/scripts/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({
            noImplicitAny: true,
            out: 'main.js',
            target:"ES5"
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});


gulp.task('bower', function() {
    var jsFilter = gulpFilter('*.js');
    return gulp.src(mainBowerFiles())
        .pipe(jsFilter)
        .pipe (concat ("vendor.js"))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('copy', function() {
    gulp.src('./app/assets/**/*/')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean', function() {
    gulp.src('./dist/**/*/', { read: false })
        .pipe(rimraf());
});

gulp.task('watch', function() {
    gulp.watch('./app/views/src/**/*.jade', ['jade']);
    gulp.watch('./app/scripts/**/*.ts', ['lint', 'scripts']);
    gulp.watch('./app/views/*.jade', ['jade']);
    gulp.watch('./app/styles/*.scss', ['sass']);
    gulp.watch('./app/styles/src/*.scss', ['sass']);
});

gulp.task('browserSync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "dist",
            index: "index.html"
        }
    });
});

gulp.task('default', ['copy', 'sass', 'jade', 'lint', 'scripts', 'browserSync', 'watch', 'bower']);
gulp.task('build', ['copy', 'sass', 'jade', 'lint', 'scriptsBuild', 'bower']);
