//
// test/unit/directives/directivesSpec.js
//
describe("Unit: Testing Directives", function () {

    beforeEach(angular.mock.module('myApp'));

    var backendMock = window.__json__['test/unit/mock/backend.json'];

    var $httpBackend, $compile, $rootScope, $timeout;

    beforeEach(inject(function (ProductService, _$timeout_, _$httpBackend_, _$compile_, _$rootScope_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
        $timeout = _$timeout_;

    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        delete window.appTestDelay;
    });

    it('Should get the correct Data after 500ms', function() {

        window.appTestDelay = 500;

        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products/'+ window.appTestDelay)
            .respond(backendMock);

        element = angular.element('<product-list></product-list>');
        element = $compile(element)($rootScope);

        expect($rootScope.loading).to.be.ok;
        expect($rootScope.products).to.be.undefined;

        $timeout(function() {
            $httpBackend.flush();
        }, window.appTestDelay);

        $timeout.flush(window.appTestDelay);

        expect($rootScope.loading).to.be.not.ok;

        expect(angular.copy($rootScope.products)).to.eql(backendMock);

    });


});
