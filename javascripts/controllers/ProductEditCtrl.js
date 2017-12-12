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

    $scope.editSubmit = (product) => {
        product.uid = $rootScope.uid;
        ProductService.updateProduct(product, $routeParams.id).then(() => {
            $location.path("/product/home");
        }).catch((err) => {
            console.log('error in submitForm', err);
        });
    };

    getProduct();
});
