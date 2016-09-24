export default function($routeParams, ProductService) {
    return {
        restrict: 'E',
        replace: true,
        transclude: false,
        template: '<div><span ng-show="loading">loading products</span> <li ng-repeat="product in products">{{product.name}} {{product.price}}</li></div>',
        link: function (scope, element, attrs) {
            scope.loading = true;
            scope.time = $routeParams.time ? $routeParams.time : 2000;

            ProductService.getProducts(scope.time).then((products) => {
                scope.products = products;
                scope.loading = false;
            });
        }
    };
};