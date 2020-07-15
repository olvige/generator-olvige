import gulp from 'gulp';
import config from './gulp/config';

gulp.task('clean', require('./gulp/tasks/clean').build(gulp));
gulp.task('copy', require('./gulp/tasks/copy').build(gulp));
gulp.task('server', require('./gulp/tasks/server').build(gulp));
gulp.task('nunjucks', require('./gulp/tasks/nunjucks').build(gulp));
gulp.task('sass', require('./gulp/tasks/sass').build(gulp));
gulp.task('webpack', require('./gulp/tasks/webpack').build(gulp));
gulp.task('sprite', require('./gulp/tasks/svg-sprite').build(gulp));


gulp.task('copy:watch', require('./gulp/tasks/copy').watch(gulp));
gulp.task('nunjucks:watch', require('./gulp/tasks/nunjucks').watch(gulp));
gulp.task('sass:watch', require('./gulp/tasks/sass').watch(gulp));
gulp.task('webpack:watch', require('./gulp/tasks/webpack').watch(gulp));
gulp.task('sprite:watch', require('./gulp/tasks/svg-sprite').watch(gulp));

gulp.task('build', gulp.series(
  'clean',
  'sprite',
  'sass',
  'webpack',
  'nunjucks',
  'copy'
));

gulp.task('watch',
  gulp.parallel(
    'sass:watch',
    'webpack:watch',
    'nunjucks:watch',
    'copy:watch',
    'sprite:watch'
  )
);


gulp.task('default', gulp.series(['build', 'server', 'watch']));
