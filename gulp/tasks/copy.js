import gulp from 'gulp';
import config from '../config.js';

gulp.task('copy:img', () => gulp
  .src([
    config.src.img + '/**/*.{jpg,png,jpeg,svg,gif}'
  ])
  .pipe(gulp.dest(config.build.img))
);

gulp.task('copy:fonts', () => gulp
  .src(config.src.fonts + '/*.{ttf,eot,woff,woff2}')
  .pipe(gulp.dest(config.build.fonts))
);

const build = gulp => gulp.series('copy:img', 'copy:fonts');
const watch = gulp => () => gulp.watch([config.src.img + '/*', config.src.fonts + '/*'], gulp.parallel('copy:img', 'copy:fonts'));

module.exports.build = build;
module.exports.watch = watch;
