import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config.js';

const server = browserSync.create();

gulp.task('server', done => {
  server.init({
    server: {
       baseDir: config.build.root
    },
    files: [
        config.build.html + '/*.html',
        config.build.css + '/*.css',
        config.build.js + '/*.js',
    ],
    notify: false,
  });

  done();
});

const build = gulp => gulp.parallel('server');

module.exports.build = build;
