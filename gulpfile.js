var gulp = require('gulp');
var livereload = require('gulp-livereload');
var webpack = require('webpack');

gulp.task('css', function() {
  var postcss = require('gulp-postcss');
  var rename = require('gulp-rename');
  return gulp.src(['public/styles/**/*.pcss', '!public/styles/**/_*.pcss'])
    .pipe( postcss([ require('postcss-import'), require('postcss-nested'), require('postcss-custom-properties'), require('postcss-custom-media'), require('autoprefixer') ]) )
    .pipe( rename(function(path) {
      path.extname = '.css';
    }))
    .pipe( gulp.dest('public/styles/build/') )
    .pipe(livereload());
});

gulp.task('webpack', function(callback) {
  // run webpack
  webpack(require('./webpack.config.js'), function(err) {
    if (err) {
      throw err;
    }
    callback();
  });
});

gulp.task('devServer', function(callback) {

  var compiler = webpack(require('./webpack.config.js'));
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(compiler, { hot: true, historyApiFallback: true }).listen(8080, 'localhost', function(err) {
    if (err) throw err;

    // callback();
  });
});

gulp.task('views', function() {
  return gulp.src('**/*.html')
    .pipe(livereload());
});

gulp.task('default', ['css', 'webpack'], function() {
  livereload.listen();
  gulp.watch(['src/**/*.jsx', 'src/**/*.js'], ['webpack']);
  gulp.watch(['public/styles/**/*.pcss'], ['css']);
  gulp.watch(['**/*.html'], ['views']);
});
