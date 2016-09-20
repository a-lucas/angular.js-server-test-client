/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Error = __webpack_require__(1);
	
	var _Error2 = _interopRequireDefault(_Error);
	
	var _Main = __webpack_require__(3);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Todo = __webpack_require__(4);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	var _routes = __webpack_require__(5);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _Products = __webpack_require__(6);
	
	var _Products2 = _interopRequireDefault(_Products);
	
	var _ProductList = __webpack_require__(7);
	
	var _ProductList2 = _interopRequireDefault(_ProductList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	angular.module('myApp', ['ngResource', 'ngRoute', 'server', 'server-cache']).config(_routes2.default).controller('MainCtrl', _Main2.default).controller('TodoCtrl', _Todo2.default).controller('ErrorCtrl', _Error2.default).service('ProductService', _Products2.default).directive('productList', _ProductList2.default).run(function ($log) {
	        /*$log.log('This should be written in log');
	        $log.warn('This should be written in warn');
	        $log.error('This should be written in error');
	        $log.debug('This should be written in debug');
	        $log.info('This should be written in info');*/
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by antoine on 17/02/16.
	 */
	var ErrorCtrl = function ErrorCtrl($log) {
	    (0, _classCallCheck3.default)(this, ErrorCtrl);
	
	    this.throwError = function (text) {
	        throw new Error(text);
	    };
	
	    this.throwException = function (text) {
	        throw text;
	    };
	
	    this.error1 = 'Catchable Error()';
	    this.error2 = 'Catchable Exception()';
	    this.error3 = 'Uncatchable Error() - should crash the app.';
	
	    $log.log('Will....' + this.error1);
	
	    try {
	        this.throwError(this.error1);
	    } catch (e1) {
	        $log.log('I catched an Error/Exception: ' + e1);
	        try {
	            $log.log('Will....' + this.error2);
	            this.throwException(this.error2);
	        } catch (e2) {
	            $log.log('I catched an Error/Exception: ' + e2);
	            $log.log('Will....' + this.error3);
	            this.throwException(this.error3);
	        }
	    }
	};
	
	exports.default = ErrorCtrl;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by antoine on 9/02/16.
	 */
	
	var MainCtrl = function MainCtrl($log) {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, MainCtrl);
	    this.title = 'Angular Es6 revisited';
	
	    this.setTitle = function (title) {
	        _this.title = title;
	    };
	
	    $log.log('I am a log', 'with two parameters');
	    $log.warn('I am a warn');
	    $log.info('I am an info');
	    /*$log.error('I am error with an object', {
	        name: 'value'
	    });*/
	};
	
	exports.default = MainCtrl;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by antoine on 9/02/16.
	 */
	
	var TodoCtrl = function TodoCtrl() {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, TodoCtrl);
	
	    this.addTodo = function () {
	        _this.todos.push({ text: _this.todoText, done: false });
	        _this.todoText = '';
	    };
	
	    this.title = "Todos title";
	    this.todos = [{ text: 'learn angular', done: true }, { text: 'build an angular app', done: false }];
	    this.todoText = '';
	};
	
	exports.default = TodoCtrl;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function ($routeProvider, $locationProvider, $sceProvider) {
	
	    $sceProvider.enabled(false);
	
	    $routeProvider.when('/Main', {
	        templateUrl: '/views/products.html',
	        controller: _Main2.default,
	        controllerAs: 'vm'
	    });
	
	    $routeProvider.when('/Todo', {
	        templateUrl: '/views/todos.html',
	        controller: _Todo2.default,
	        controllerAs: 'vm'
	    });
	
	    $routeProvider.when('/Error', {
	        templateUrl: '/views/error.html',
	        controller: _Error2.default,
	        controllerAs: 'vm'
	    });
	
	    $routeProvider.otherwise('/Main');
	
	    $locationProvider.html5Mode(true);
	};
	
	var _Main = __webpack_require__(3);
	
	var _Main2 = _interopRequireDefault(_Main);
	
	var _Todo = __webpack_require__(4);
	
	var _Todo2 = _interopRequireDefault(_Todo);
	
	var _Error = __webpack_require__(1);
	
	var _Error2 = _interopRequireDefault(_Error);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Created by antoine on 9/02/16.
	 */
	;
	
	//import {InjectServer} from '../angular/server';

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(2);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Products = function Products($q, $http) {
	    'ngInject';
	
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, Products);
	
	    this.getProducts = function () {
	        var defer = _this._$q.defer();
	
	        if (_this.products !== null) {
	            defer.resolve(_this.products);
	            return defer.promise;
	        } else {
	            _this._$http.get('http://127.0.0.1:8080/products').success(function (data) {
	                _this.products = data;
	                defer.resolve(_this.products);
	            });
	        }
	        return defer.promise;
	    };
	
	    this._$http = $http;
	    this._$q = $q;
	    this.products = null;
	};
	
	exports.default = Products;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports.default = function (ProductService) {
	    return {
	        restrict: 'E',
	        replace: true,
	        transclude: false,
	        template: '<div><span ng-show="loading">loading products</span> <li ng-repeat="product in products">{{product.name}} {{product.price}}</li></div>',
	        link: function link(scope, element, attrs) {
	            scope.loading = true;
	
	            ProductService.getProducts().then(function (products) {
	                scope.products = products;
	                scope.loading = false;
	            });
	        }
	    };
	};
	
	;

/***/ }
/******/ ]);
//# sourceMappingURL=app-ng-cache.js.map