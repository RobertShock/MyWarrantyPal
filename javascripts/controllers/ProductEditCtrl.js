'use strict';

app.controller("ProductEditCtrl", function($location, $rootScope, $routeParams, $scope, ProductService, RoomsService, TypesService, AreasService) {
    $scope.product = {};

    $scope.editSubmit = (product) => {
        product.uid = $rootScope.uid;
        product.roomId = product.room ? product.room : product.roomId;
        product.areaId = product.area ? product.area : product.areaId;
        product.typeId = product.type ? product.type : product.typeId;

        delete product.room;
        delete product.area;
        delete product.type;

        ProductService.updateProduct(product, $routeParams.id).then(() => {
            $location.path("/products/home");
        }).catch((err) => {
            console.log('error in submitForm', err);
        });
    };

    const getRooms = () => {
        RoomsService.getRooms($rootScope.uid).then((results) => {
            $scope.rooms = results;
        }).catch((err) => {
            console.log('error in getRooms', err);
        });
    };

    const getAreas = () => {
        AreasService.getAreas($rootScope.uid).then((results) => {
            $scope.areas = results;
        }).catch((err) => {
            console.log('error in getAreas', err);
        });
    };

    const getTypes = () => {
        TypesService.getTypes($rootScope.uid).then((results) => {
            $scope.types = results;
        }).catch((err) => {
            console.log('error in getTypes', err);
        });
    };

    const findIndex = (arrayName, id) => {
        let apple = 0;
        arrayName.forEach((thing, index) => {
            if(thing.id === id){
                apple = index;
            }
        });
        return apple;
    };

    const getProduct = () => {
        ProductService.getSingleProduct($routeParams.id).then((results) => {
            $scope.product = results.data;
            // let roomIndex = findIndex($scope.rooms, $scope.product.roomId);
            // $scope.rooms = $scope.rooms[roomIndex];
            
            // let typeIndex = findIndex($scope.types, $scope.product.typeId);
            // let areaIndex = findIndex($scope.areas, $scope.product.areaId);
        }).catch((err) => {
            console.log('error in getProduct', err);
        });
    };

    getTypes();
    getAreas();
    getRooms();

    getProduct();
    
});


