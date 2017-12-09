'use strict';

app.service("RoomsService", function($http, $q, $rootScope, FIREBASE_CONFIG) {

    const getRooms = () => {
        let rooms = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/rooms.json`).then((results) => {
                let fbRooms = results.data;
                    Object.keys(fbRooms).forEach((key) => {
                        fbRooms[key].id = key;
                        rooms.push(fbRooms[key]);
                    });
                resolve(rooms);
            }).catch((err) => {
                console.log('error in fbRooms', err);
            });
        });
    };
    return {getRooms};
});