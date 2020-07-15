import del from 'del';
import config from '../config';

const build = () => {
  return () => {
    return del([
      config.build.root
    ])
  };
};

module.exports.build = build;
