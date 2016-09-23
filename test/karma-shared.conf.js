module.exports = function () {
    return {
        basePath: './../',
        frameworks: ['mocha', 'chai'],
        reporters: ['progress', 'coverage'],
        browsers: ['Chrome'],
        preprocessors: {
            '**/*.json': ['json']
        },
        coverageReporter: {
            instrumenter: {
                '**/*.js': 'istanbul' // Force the use of the Istanbul instrumenter to cover CoffeeScript files
            },
            type : 'lcov',
            dir : 'coverage'
        },
        files: [
            //3rd Party Code
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular.js-server/dist/angular.js-server.js',
            //'bower_components/angular.js-server-ng-cache/dist/angular.js-server-ng-cache.js',
            'bower_components/angular-mocks/angular-mocks.js',
            //json
            'test/unit/mock/backend.json',
            //mocha stuff
            'test/mocha.conf.js',
            //test files
            'test/unit/**/*.js'
        ]
    }
};
