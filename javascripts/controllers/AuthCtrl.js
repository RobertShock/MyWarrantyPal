'use strict';

app.controller("AuthCtrl", function($location, $rootScope, $scope, AutService){
	$scope.auth = () => {
		AuthService.authenticateGoogle().then((result) =>{ 
			$rootScope.uid = result.user.uid;
			$scope.$apply(() =>{
				$location.url("products/home");
			});
		}).catch((err) =>{
			console.log("error in authenticateGoogle", err);
		});
	};
});