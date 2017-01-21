export default class Products {
    constructor($q, $http) {
        'ngInject';
        this._$http = $http;
        this._$q = $q;
        this.products = null
    }

    getProducts = (time) => {

        var defer = this._$q.defer();

        if (this.products !== null) {
            defer.resolve(this.products);
            return defer.promise;
        } else {
            this._$http.get('http://127.0.0.1:8080/products/' + time).then( (data) => {
                this.products = data.data;
                defer.resolve(this.products);
            });
        }
        return defer.promise;
    }
}