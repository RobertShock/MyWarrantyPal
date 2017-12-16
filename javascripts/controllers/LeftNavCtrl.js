'use strict';

app.controller('LeftNavCtrl', function($rootScope, $scope, RoomsService, TypesService, AreasService) {
    $rootScope.navFilters = {
        roomId: "room1000",
        areaId: "area1000",
        typeId: "type1000"
    };

	const getRooms = () => {
		RoomsService.getRooms($rootScope.uid).then((results) => {
            results.unshift({name: "ALL", id: "room1000"});
            $scope.rooms = results;
		}).catch((err) => {
			console.log('error in getRooms', err);
		});
    };

    getRooms();

    const getAreas = () => {
        AreasService.getAreas($rootScope.uid).then((results) => {
            results.unshift({name: "ALL", id: "area1000"});
            $scope.areas = results;
        }).catch((err) => {
            console.log('error in getAreas', err);
        });
    };

    getAreas();

    const getTypes = () => {
        TypesService.getTypes($rootScope.uid).then((results) => {
            results.unshift({name: "ALL", id: "type1000"});
            $scope.types = results;
        }).catch((err) => {
            console.log('error in getTypes', err);
        });
    };

    getTypes();
    
});

