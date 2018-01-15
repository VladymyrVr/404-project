var gulp = require('gulp'),
  htmlmin = require('gulp-htmlmin'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  compass = require('gulp-compass'),
  cssnano = require('gulp-cssnano'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  autoprefixer = require('gulp-autoprefixer'),
  concat = require('gulp-concat');

var config = {
    'src': './src',
    'dest': './dist',
    'html': {
        'src': './src/*.html',
        'dest': './dist/html'
    },
    'sass': {
        'dest': './dist/styles/stylesheets/',
        'src': './src/styles/scss/main.scss'
    },
    'js': {
      'src': [
        './node_modules/jquery/dist/jquery.js',
        './node_modules/slick-carousel/slick/slick.js',
        './src/js/*.js'
      ],
      'dest': './dist/js'
    },
    'img': {
        'dest': './dist/img/',
        'src': './src/img/*'
    }
};

gulp.task('copy:html', function () {
    return gulp.src(config.html.src)
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest(config.html.dest));
});

gulp.task('minify:img', function () {
    return gulp.src(config.img.src)
      .pipe(imagemin())
      .pipe(gulp.dest(config.img.dest));
  }
);

gulp.task('sass', function () {
    return gulp.src(config.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: '>5%'
        }))
        .pipe(cssnano())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(config.sass.dest));
});

gulp.task('build',['copy:html', 'minify:img'], function () {});

gulp.task('watch', function () {
    gulp.watch([
        config.sass.path + '/**/*.scss',
        config.js.path + '/**/*.js',
        config.html.src
    ], ['build']);
});