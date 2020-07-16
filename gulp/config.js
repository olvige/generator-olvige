import util from 'gulp-util';

const srcPath = 'src';
const buildPath = 'build';

const production = util.env.production || util.env.production || false;

const config = {
  env   : 'development',
  production : production,
  src   : {
    root          : srcPath,
    templates     : srcPath + '/templates',
    templatesData : srcPath + '/templates/data',
    sass          : srcPath + '/sass',
    sassGenerated : srcPath + '/sass/generated',
    js            : srcPath + '/js',
    img           : srcPath + '/img',
    icons         : srcPath + '/icons',
    fonts         : srcPath + '/fonts',
    entry         : '/index.html'
  },
  build : {
    root  : buildPath,
    html  : buildPath,
    css   : buildPath + '/css',
    js    : buildPath + '/js',
    img   : buildPath + '/img',
    fonts : buildPath + '/fonts',
    lib   : buildPath + '/lib',
    data  : buildPath + '/data'
  },
  setEnv: function(env) {
    if (typeof env !== 'string') return;
    this.env = env;
    this.production = env === 'production';
    process.env.NODE_ENV = env;
  },
  logEnv: function() {
    util.log(
      'Environment:',
      util.colors.white.bgRed(' ' + process.env.NODE_ENV + ' ')
    );
  }
};

config.setEnv(production ? 'production' : 'development');

module.exports = config;
