//
// test/unit/directives/directivesSpec.js
//
describe("Unit: Testing Directives", function () {

    var $compile, $rootScope;

    beforeEach(angular.mock.module('myApp'));

    var backendMock = [
        {
            name: 'test',
            price: 1
        },
        {
            name: 'test2',
            price: 2
        }];
    var productService, $httpBackend, $compile, $rootScope;


    beforeEach(inject(function (ProductService, _$httpBackend_, _$compile_, _$rootScope_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));


    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should get the correct Data', function() {

        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products')
            .respond(backendMock);

        element = angular.element('<product-list></product-list>');
        element = $compile(element)($rootScope);

        expect($rootScope.loading).to.be.ok;
        expect($rootScope.products).to.be.undefined;

        $httpBackend.flush();
        $rootScope.$digest();

        expect($rootScope.loading).to.be.not.ok;

        expect(angular.copy($rootScope.products)).to.eql(backendMock);

    });


});
