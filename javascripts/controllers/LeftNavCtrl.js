'use strict';

app.controller('LeftNavCtrl', function($rootScope, $scope, RoomsService, TypesService, AreasService) {


	const getRooms = () => {
		RoomsService.getRooms($rootScope.uid).then((results) => {
            $scope.rooms = results;
		}).catch((err) => {
			console.log('error in getRooms', err);
		});
    };

    getRooms();

    const getAreas = () => {
        AreasService.getAreas($rootScope.uid).then((results) => {
            $scope.areas = results;
        }).catch((err) => {
            console.log('error in getAreas', err);
        });
    };

    getAreas();

    const getTypes = () => {
        TypesService.getTypes($rootScope.uid).then((results) => {
            $scope.types = results;
        }).catch((err) => {
            console.log('error in getTypes', err);
        });
    };

    getTypes();
    
});

