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
      'bower_components/angular.js-server/dest/angular.js-server.js',
      'bower_components/angular.js-server-ng-cache/dist/angular.js-server-ng-cache.js',
      //App-specific Code
      'dist/app.js'
    ]
  }
};
