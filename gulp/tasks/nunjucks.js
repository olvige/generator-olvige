import gulp from 'gulp';
import render from 'gulp-nunjucks-render';
import prettify from 'gulp-prettify';
import config from '../config.js';


gulp.task('nunjucks', () => {
  render.nunjucks.configure({
    watch: false,
    trimBlocks: true,
    lstripBlocks: false
  });

  return gulp.src(config.src.templates + '/**/[^_]*.html')
  .pipe(render({
    path: [config.src.templates]
   }))
  .pipe(prettify({
    indent_size: 2
  }))
  .pipe(gulp.dest(config.build.html))
});

const build = gulp => gulp.parallel('nunjucks');
const watch = gulp => () => gulp.watch(config.src.templates + '/**/*.html', gulp.parallel('nunjucks'));

module.exports.build = build;
module.exports.watch = watch;
