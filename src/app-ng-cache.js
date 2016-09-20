import ErrorCtrl from './controllers/Error';
import MainCtrl  from './controllers/Main';
import TodoCtrl  from './controllers/Todo';
import Routes from './routes';
import Products from './services/Products';
import ProductList from './directives/ProductList';

angular.module('myApp', ['ngResource', 'ngRoute' ,  'server', 'server-cache'])
    .config(Routes)
    .controller('MainCtrl', MainCtrl)
    .controller('TodoCtrl', TodoCtrl)
    .controller('ErrorCtrl', ErrorCtrl)
    .service('ProductService', Products)
    .directive('productList', ProductList)
    .run(function($log) {
            /*$log.log('This should be written in log');
            $log.warn('This should be written in warn');
            $log.error('This should be written in error');
            $log.debug('This should be written in debug');
            $log.info('This should be written in info');*/
    });
