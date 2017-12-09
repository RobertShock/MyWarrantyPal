'use strict';

app.controller('LeftNavCtrl', function($rootScope, $scope, ProductService) {


	const getRooms = () => {
		ProductService.getRooms($rootScope.uid).then((results) =>{
            $scope.rooms = results;
            console.log("$scope.rooms", $scope.rooms);
		}).catch((err) =>{
			console.log('error in getRooms', err);
		});
    };
    getRooms();
});

