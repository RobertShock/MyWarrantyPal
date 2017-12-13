'use strict';

app.controller("ProductEditCtrl", function($location, $rootScope, $routeParams, $scope, ProductService) {
    $scope.product = {};
    
    const getProduct = () => {
        ProductService.getSingleProduct($routeParams.id).then((results) => {
            $scope.product = results.data;
        }).catch((err) => {
            console.log('error in getProduct', err);
        });
    };

    getProduct();

    $scope.editSubmit = (product) => {
        product.uid = $rootScope.uid;
        ProductService.updateProduct(product, $routeParams.id).then(() => {
            $location.path("/products/home");
        }).catch((err) => {
            console.log('error in submitForm', err);
        });
    };

    
});

