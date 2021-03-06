var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.customLaunchers= {
    Chrome_travis_ci: {
      base: 'Chrome',
          flags: ['--no-sandbox']
    }
  };

  if (process.env.TRAVIS) {
    conf.browsers = ['Chrome_travis_ci'];
  }

  conf.preprocessors['dist/app.js'] = ['coverage'];
  conf.coverageReporter.subdir =  'default';
  conf.files = conf.files.concat([
    //App-specific Code
    'dist/app.js'
  ]);

  config.set(conf);
};
