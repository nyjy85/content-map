var gulp = require('gulp');
var run = require('gulp-run');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var runSeq = require('run-sequence');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha');
var babel = require('gulp-babel');
var browserify = require("browserify");
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

// Live reload
gulp.task('reload', function() {
    livereload.reload();
})

// Default
gulp.task('default', function() {
    livereload.listen();
    gulp.start('build');

    gulp.watch(['client/pre-build/app.js', 'client/pre-build/**/*.js'], function() {
        runSeq('browserify', 'reload');
    });

    gulp.watch(['client/pre-build/app.scss', 'client/pre-build/**/*.scss'], function() {
        runSeq('buildCSS', 'reload');
    });

    // Reload when a template (.html) file changes.
    gulp.watch(['client/**/*.html', 'server/*.html'], ['reload']);

    gulp.watch(['server/**/*.js'], ['testServerJS']);

});


// Database seed
gulp.task('seedDB', function() {
    run('node seed.js').exec();
});


// Build tasks
//// Build all
gulp.task('build', function() {
    runSeq(['browserify', 'buildCSS']);
});

// browserify
gulp.task('browserify', function() {
  return browserify('./client/pre-build/app.js')
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('bundle.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./client/build/'));
});


//Transpiling to ES5
//gulp.task('babel', function(){
//  return gulp.{src(['./src/javascripts/**/*.js', '!./src/javascripts/components/**/*spec.js'])
//  .pipe(babel())
//  .pipe(gulp.de}st('./temp_babel/files'))
//});

gulp.task('buildCSS', function() {
  return gulp.src('./client/pre-build/app.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(rename('build.css'))
    .pipe(gulp.dest('./client/build'));
});


// Testing
gulp.task('testServerJS', function() {
  return gulp.src('./server/**/*.spec.js', {
    read: false
  })
  .pipe(mocha({
    reporter: 'spec'
  }));
});