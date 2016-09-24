export default class Products {
    constructor($q, $http, $window) {
        'ngInject';
        this._$http = $http;
        this._$q = $q;
        this._$window = $window;
        this.products = null
    }

    getProducts = (time) => {

        if(!time && typeof this._$window['appTestDelay'] === 'undefined') {
            throw new Error('Please set the global window.apptestDelay');
        }

        time = time ? time : this._$window['appTestDelay'];

        var defer = this._$q.defer();

        if (this.products !== null) {
            defer.resolve(this.products);
            return defer.promise;
        } else {
            this._$http.get('http://127.0.0.1:8080/products/' + time).success( (data) => {
                this.products = data;
                defer.resolve(this.products);
            });
        }
        return defer.promise;
    }
}