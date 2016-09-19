module.exports = function() {
  return {
    basePath: './../',
    frameworks: ['mocha', 'chai'],
    reporters: ['progress'],
    browsers: ['Chrome'],
    
    files : [
      //3rd Party Code
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',

      //App-specific Code
      'dist/app.js'
    ]
  }
};
