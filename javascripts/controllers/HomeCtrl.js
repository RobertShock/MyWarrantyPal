'use strict';

app.controller("HomeCtrl", function($location, $rootScope, $scope, ProductService) {

	const getProducts = () => {
		ProductService.getProducts($rootScope.uid).then((results) =>{
            $scope.products = results;
            console.log("results", results);
		}).catch((err) =>{
			console.log('error in getProducts', err);
		});
	};

	getProducts();

	$scope.productDetail = (productId) => {
		$location.path(`/products/details/${productId}`);
	};

	$scope.deleteProduct = (productId) => {
		ProductService.deleteProduct(productId).then((result) => {
			getProducts();
		}).catch((err) =>{
			console.log('error in deleteProduct', err);
		});
	};
	
	$scope.editProduct = (productId) => {
		$location.path(`/products/edit/${productId}`);
	};
	
	$scope.goToNewProducts = () => {
		$location.path(`/products/product_new`);
	};

});