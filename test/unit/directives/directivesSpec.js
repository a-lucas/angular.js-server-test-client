//
// test/unit/directives/directivesSpec.js
//
describe("Unit: Testing Directives", function () {

    beforeEach(angular.mock.module('myApp'));

    var backendMock = window.__json__['test/unit/mock/backend.json'];

    var $httpBackend, $compile, $rootScope, $timeout, $routeParams;

    beforeEach(inject(function (ProductService, _$timeout_, _$routeParams_, _$httpBackend_, _$compile_, _$rootScope_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $timeout = _$timeout_;
        $routeParams = _$routeParams_;

    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        delete window.appTestDelay;
    });


    it('Should get the correct Data after 2000ms when no route info is provided', function() {


        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products/2000')
            .respond(backendMock);

        $routeParams = {};

        element = angular.element('<product-list></product-list>');
        element = $compile(element)($rootScope);

        expect($rootScope.loading).to.be.ok;
        expect($rootScope.products).to.be.undefined;

        $timeout(function() {
            $httpBackend.flush();
        }, 2000);

        $timeout.flush(2000);

        expect($rootScope.loading).to.be.not.ok;

        expect(angular.copy($rootScope.products)).to.eql(backendMock);

    });



    it('Should get the correct Data after 500ms is passed trough $routeParams', function() {

        var time = 500;
        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products/'+ time)
            .respond(backendMock);

        $rootParams = angular.extend($routeParams, { time: time });

        element = angular.element('<product-list></product-list>');
        element = $compile(element)($rootScope);

        expect($rootScope.loading).to.be.ok;
        expect($rootScope.products).to.be.undefined;

        $timeout(function() {
            $httpBackend.flush();
        }, time);

        $timeout.flush(time);

        expect($rootScope.loading).to.be.not.ok;

        expect(angular.copy($rootScope.products)).to.eql(backendMock);

    });


});
