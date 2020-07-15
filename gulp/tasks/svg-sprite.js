import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import config from '../config.js';

gulp.task('sprite', () => {
  return gulp.src(config.src.icons + '/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
        },
      }
    ))
    .pipe(gulp.dest(config.build.img));
});

const build = gulp => gulp.parallel('sprite');
const watch = gulp => () => gulp.watch(config.src.icons + '/**/*.svg', gulp.parallel('sprite'));

module.exports.build = build;
module.exports.watch = watch;
