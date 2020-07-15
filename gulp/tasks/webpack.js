import gulp from 'gulp';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import config from '../config';

gulp.task('webpack', () => {
  return gulp.src(config.src.js + '/app.js')
    .pipe(webpackStream({
      mode: 'production',
      output: {
        filename: 'app.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
        }),
      ],
      // externals: {
      //   jquery: 'jQuery'
      // }
    }))
    .pipe(gulp.dest(config.build.js))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.build.js));
});

const build = gulp => gulp.parallel('webpack');
const watch = gulp => () => gulp.watch(config.src.js + '/**/*.js', gulp.parallel('webpack'));


module.exports.build = build;
module.exports.watch = watch;
