import ErrorCtrl from './controllers/Error';
import MainCtrl  from './controllers/Main';
import TodoCtrl  from './controllers/Todo';
import Routes from './routes';
import Products from './services/Products';
import ProductList from './directives/ProductList';
import FormCtrl from './controllers/Form';

let boot = () => {
    angular.module('myApp', ['ngResource', 'ngRoute' ,  'server'])
        .config(Routes)
        .controller('MainCtrl', MainCtrl)
        .controller('TodoCtrl', TodoCtrl)
        .controller('ErrorCtrl', ErrorCtrl)
        .controller('FormCtrl', FormCtrl)
        .service('ProductService', Products)
        .directive('productList', ProductList)
        .run(function($log) {
            /*$log.log('This should be written in log');
             $log.warn('This should be written in warn');
             $log.error('This should be written in error');
             $log.debug('This should be written in debug');
             $log.info('This should be written in info');*/
        });
};



if(typeof window['preboot'] !== 'undefined') {
    setTimeout( () => {
        boot();
    }, 1000);
} else {
    boot();
}


