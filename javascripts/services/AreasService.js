'use strict';

app.service("AreasService", function($http, $q, $rootScope, FIREBASE_CONFIG) {

    const getAreas = () => {
        let areas = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/areas.json`).then((results) => {
                let fbAreas = results.data;
                    Object.keys(fbAreas).forEach((key) => {
                        fbAreas[key].id = key;
                        areas.push(fbAreas[key]);
                    });
                resolve(areas);
            }).catch((err) => {
                console.log('error in fbAreas', err);
            });
        });
    };
    return {getAreas};
});