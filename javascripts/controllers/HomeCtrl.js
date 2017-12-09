'use strict';

app.controller("HomeCtrl", function($location, $rootScope, $scope, ProductService) {

	const getProducts = () => {
		ProductService.getProducts($rootScope.uid).then((results) =>{
			$scope.products = results;
		}).catch((err) =>{
			console.log('error in getProducts', err);
		});
	};

	getProducts();

	$scope.deleteProduct = (productId) => {
		ProductService.deleteProduct(productId).then((result) => {
			getProducts();
		}).catch((err) =>{
			console.log('error in deleteProduct', err);
		});
	};
	
	$scope.editProduct = (productId) => {
		$location.path(`/products/product_edit/${productId}`);
	};
	
	$scope.goToNewProducts = () => {
		$location.path("/products/product_new");
	};

});