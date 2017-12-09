'use strict';

app.service("TypesService", function($http, $q, $rootScope, FIREBASE_CONFIG) {

    
    const getTypes = () => {
        let types = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/types.json`).then((results) => {
                let fbTypes = results.data;
                    Object.keys(fbTypes).forEach((key) => {
                        fbTypes[key].id = key;
                        types.push(fbTypes[key]);
                    });
                resolve(types);
            }).catch((err) => {
                console.log('error in fbTypes', err);
            });
        });
    };
    return {getTypes};
});