describe("Unit: Testing Service", function() {

    beforeEach(function() {
        module('myApp');
    });

    var backendMock = [
        {
            name: 'test',
            price: 1
        },
        {
            name: 'test2',
            price: 2
        }];
    var productService, $httpBackend;


    beforeEach( inject(function( ProductService,_$httpBackend_) {
        $httpBackend = _$httpBackend_;
        productService = ProductService;
    }));



    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should contain an ProductService service', function() {
        expect(productService).not.to.equal(null);
    });




    it('Should get the correct Data', function() {

        $httpBackend
            .when('GET', 'http://127.0.0.1:8080/products')
            .respond(backendMock);

        productService.getProducts().then(function(result) {
            console.log('result = ', result);
            expect(result).to.eql(backendMock);
        });

        $httpBackend.flush();
    });

});
