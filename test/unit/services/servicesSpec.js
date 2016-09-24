describe("Unit: Testing Service", function() {

    beforeEach(function() {
        module('myApp');
    });

    var backendMock = window.__json__['test/unit/mock/backend.json'];

    var productService, $httpBackend, $timeout;

    beforeEach( inject(function( ProductService,_$httpBackend_, _$timeout_) {
        $httpBackend = _$httpBackend_;
        productService = ProductService;
        $timeout = _$timeout_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
        delete window.appTestDelay;
    });

    it('should contain an ProductService service', function() {
        expect(productService).not.to.equal(null);
    });

    [500, 1000, 2500].forEach(function(time) {
        it('I should get the correct data after '+time+' delay ', function() {

            $routeParams = { time: time};
            $httpBackend
                .when('GET', 'http://127.0.0.1:8080/products/' + time)
                .respond(backendMock);

            productService.getProducts(time);

            $timeout(function() {
                $httpBackend.flush();
            }, time);

            expect(productService.products).to.eql(null);

            $timeout.flush(time);

            expect(productService.products).to.eql(backendMock);

        });

    });

});
