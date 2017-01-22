const gulp = require('gulp');
const ts = require('gulp-typescript');
const uglify = require('gulp-uglify');
const mocha = require('gulp-mocha');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const tsify = require('tsify');

gulp.task('build-browser', function () {
  const opts = { standalone: 'app' };

  return browserify(opts)
    .add('./lib/index.ts')
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(gulp.dest('./dist/browser/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/browser/'));
});

gulp.task('build-node', function () {
  const tsProject = ts.createProject('tsconfig.json');

  return gulp.src('lib/**/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest('./dist/node/'));
});

gulp.task('build', ['build-browser', 'build-node']);

gulp.task('test', ['build-node'], function () {
  return gulp.src('test/**/*.js', { read: false })
    .pipe(mocha({ reporter: 'list' }));
});

gulp.task('default', ['build', 'test']);