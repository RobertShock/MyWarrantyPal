'use strict';

app.controller("ProductNewCtrl", function($location, $rootScope, $scope, ProductService) { 

	$scope.newProduct = {};

	$scope.submitForm = () => {
		$scope.newProduct.extended_warranty=false;
		$scope.newProduct.uid=$rootScope.uid;
		let newProduct = ProductService.createProductObj ($scope.newProduct);
		ProductService.postNewProduct(newProduct).then((results) => {
			$location.path(`/products/home`);
		}).catch((error) => {
			console.log("error in postNewProduct", error);
		});
	};

});