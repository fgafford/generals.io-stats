var gulp = require('gulp');
var tslint = require('gulp-tslint');
var exec = require('child_process').exec;
var mocha = require('gulp-mocha');
var gulp = require('gulp-help')(gulp);
var path = require('path');
var del = require('del');
var tslintCustom = require('tslint'); // for tslint-next https://github.com/panuhorsmalahti/gulp-tslint#specifying-the-tslint-module
require('dotbin');

gulp.on('err', function(e) {
    console.log(e.err.stack);
});

// All source files
const src = ['src/*','src/**/*'];

const tsFilesGlob = (function (c) {
  return c.filesGlob || c.files || 
          'src/**/*.ts' || 'src/**/*.tsx';
})(require('./tsconfig.json'));

gulp.task('clean', 'Cleans the generated js files from lib and dist directory', function () {
  return del([
    'lib/**/*',
    'dist/**/*'
  ]);
});

gulp.task('lint', 'Lints all TypeScript source files', function () {
  return gulp.src(tsFilesGlob)
    .pipe(tslint({
      tslint: tslintCustom,
      formatter: 'verbose'
    }))
    .pipe(tslint.report());
});

//  ===================== Copy Tasks =================== // 
gulp.task('html', 'Copy HTML files', ['clean'], () => {
  return gulp.src(['src/*.html', 'src/**/*.html'])
    .pipe(gulp.dest('./dist'))
})

gulp.task('css', 'Copy CSS files', ['clean'], () => {
  return gulp.src('src/css/*')
    .pipe(gulp.dest('./dist/css'))
})

gulp.task('font', 'Copy the font files over', ['clean'], () => {
  return gulp.src('src/fonts/*')
    .pipe(gulp.dest('./dist/fonts'))
})

gulp.task('copy', ['html', 'css', 'font'])
//  ==================================================== // 


gulp.task('build', 'Compiles all TypeScript source files',['clean'], function (cb) {
  exec('tsc --version', function (err, stdout, stderr) {
    console.log('Using TypeScript ', stdout);
    if (stderr) {
      console.log(stderr);
    }
  });

  return exec('tsc', function (err, stdout, stderr) {
    console.log(stdout);
    if (stderr) {
      console.log(stderr);
    }
    cb(err);
  });
});

gulp.task('test', 'Runs the Jasmine test specs', ['build'], function () {
  return gulp.src('test/*.ts')
    .pipe(mocha({
      require: ['ts-node/register']
    }));
});

gulp.task('watch', 'Watches ts source files and runs build on change', function () {
  return gulp.watch([src, tsFilesGlob], ['clean', 'build', 'copy']);
});

gulp.task('serve', 'Starts the local server and updates on file change', ['build', 'copy', 'watch'], () => {
  return exec(`node server.js`, (err, stdout, stderr) => {
    console.log('Starting local http server ');
    console.log(stdout);
    // console.error(stderr);
    if (stderr) { console.log(stderr); }
  })
});

// Alias for serve
gulp.task('dev', ['serve'])