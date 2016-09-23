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

    it('should throw an exception when the delay is not set', function() {
        console.log('window.appTestDelay', window.appTestDelay);
        expect( function() {productService.getProducts()}).to.throw('Please set the global window.apptestDelay');

    });


    it('should not throw an exception when the delay is set through $window[appTestDelay]', function() {

        window.appTestDelay = 500;
        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products/' + window.appTestDelay)
            .respond(backendMock);


        productService.getProducts();

        $timeout(function() {
            $httpBackend.flush();
        }, window.appTestDelay);

        expect(productService.products).to.eql(null);

        $timeout.flush(window.appTestDelay);

        expect(productService.products).to.eql(backendMock);

    });



    it('Should get the correct Data after 500ms', function() {

        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products/500')
            .respond(backendMock);

        productService.getProducts(500);

        $timeout(function() {
            $httpBackend.flush();
        }, 500);

        expect(productService.products).to.eql(null);

        $timeout.flush(500);

        expect(productService.products).to.eql(backendMock);

    });


    it('Should get the correct Data after 2000ms', function() {

        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products/2000')
            .respond(backendMock);

        productService.getProducts(2000);

        $timeout(function() {
            $httpBackend.flush();
        }, 2000);

        $timeout.flush(1000);

        expect(productService.products).to.eql(null);

        $timeout.flush(1000);

        expect(productService.products).to.eql(backendMock);



    });

});
