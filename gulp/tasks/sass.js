import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import config from '../config';


const processors = [
  autoprefixer({
    overrideBrowserslist: ['last 4 versions'],
    cascade: false
  }),
  csso
];

gulp.task('sass', () => gulp
  .src(config.src.sass + '/*.{sass,scss}')
  .pipe(sourcemaps.init())
  .pipe(sass({
      outputStyle: 'compressed'
  }))
  .pipe(postcss(processors))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(config.build.css))
);

const build = gulp => gulp.parallel('sass');
const watch = gulp => () => gulp.watch(config.src.sass + '/**/*.{sass,scss}', gulp.parallel('sass'));

module.exports.build = build;
module.exports.watch = watch;
