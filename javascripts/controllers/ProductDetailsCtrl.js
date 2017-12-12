'use strict';

app.controller('ProductDetailsCtrl', function($location, $routeParams, $scope, ProductService){

	// $scope.product = {};

    const getProduct = () => {
        ProductService.getSingleProduct($routeParams.id).then((results) => {
            $scope.product = results.data;
        }).catch((err) => {
            console.log('error in getProduct', err);
        });
    };
    
    getProduct();

	$scope.editProduct = (productId) => {
		$location.path(`/products/product_edit/${productId}`);
    };
    
    $scope.productDetail = (product, productId) => {
		$location.path(`/products/detail/${productId}`);
	};

});
