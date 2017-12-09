'use strict';

app.service("ProductService", function($http, $q, $rootScope, FIREBASE_CONFIG) {
    
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

    const getProducts = (userUid) => {
        let products = [];
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/products.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
                let fbProducts = results.data;                 
                    Object.keys(fbProducts).forEach((key) => {
                        fbProducts[key].id = key;
                        products.push(fbProducts[key]);
                    });
                resolve(products);
            }).catch((err) => {
                console.log('error in fbProducts', err);
            });
        });
    };


    const getSingleProduct = (productId) => {
        return $http.get(`${FIREBASE_CONFIG.databaseURL}/products/${productId}.json`);
    };

    const postNewProduct = (newProduct) => {
        return $http.post(`${FIREBASE_CONFIG.databaseURL}/products.json`, JSON.stringify(newProduct));
    };

    const deleteProduct = (productId) => {
        return $http.delete(`${FIREBASE_CONFIG.databaseURL}/products/${productId}.json`);
    };

    const updateProduct = (productId) => {
          return $http.put(`${FIREBASE_CONFIG.databaseURL}/products/${productId}.json`, JSON.stringify(updateProduct));
    };

    const createProductObj = (product) => {
        return {

            "roomId": product.roomId,
            "areaId": product.areaId,
            "typeId": product.typeId,
            "name": product.name,
            "description": product.description,
            "modle_number": product.modle_number,
            "brand": product.brand,
            "purchase_date": product.purchase_date,
            "purchase_location": product.purchase_location,
            "purchase_location_address": product.purchase_location_address,
            "purchase_location_phone": product.purchase_location_phone,
            "manufacutrers_warranty": product.manufacturers_warranty,
            "manufacturers_warranty_company": product.manufacturers_warranty_company,
            "manufacturers_warranty_terms": product.manufacturers_warranty_term,
            "manufacturers_warranty_expiration": product.manufacturers_warranty_expiration,
            "extended_warranty": product.extended_warranty,
            "extended_warranty_company": product.extended_warranty_company,
            "extended_warranty_term": product.edtended_warranty_term,
            "purchase_price": product.purchase_price,
            "picture": product.picture,
            "uid": product.uid
        };
    };
    return {postNewProduct, getProducts, getRooms, getAreas, getTypes, deleteProduct, updateProduct, createProductObj, getSingleProduct};
});