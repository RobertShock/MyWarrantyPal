'use strict';

app.filter('LeftNavFilter', () => {
    return (products, navFilters) => {
        let navFiltersCopy = navFilters;
        Object.keys(navFiltersCopy).forEach((key) => {
            if (navFiltersCopy[key] === "room1000"  || navFiltersCopy[key] === "type1000" || navFiltersCopy[key] === "area1000"  || navFiltersCopy[key] === "" ) {
                delete navFiltersCopy[key];
            }
        });
        let filteredProducts = products.filter((product) => {
            if (navFiltersCopy.roomId && navFiltersCopy.areaId && navFiltersCopy.typeId) {
                if (navFiltersCopy.roomId === product.roomId && navFiltersCopy.areaId === product.areaId && navFiltersCopy.typeId === product.typeId) {
                    return product;
                }
            } else if (navFiltersCopy.roomId && navFiltersCopy.areaId) {
                if (navFiltersCopy.roomId === product.roomId && navFiltersCopy.areaId === product.areaId) {
                    return product;
                }
            } else if (navFiltersCopy.roomId && navFiltersCopy.typeId) {
                if (navFiltersCopy.roomId === product.roomId && navFiltersCopy.typeId === product.typeId) {
                    return product;
                }

            } else if (navFiltersCopy.areaId && navFiltersCopy.typeId) {
                if (navFiltersCopy.areaId === product.areaId && navFiltersCopy.typeId === product.typeId) {
                    return product;
                }
            } else if (navFiltersCopy.areaId) {
                if (navFiltersCopy.areaId === product.areaId) {
                    return product;
                }
            } else if (navFiltersCopy.typeId) {
                if (navFiltersCopy.typeId === product.typeId) {
                    return product;
                }
            } else if (navFiltersCopy.roomId) {
                if (navFiltersCopy.roomId === product.roomId) {
                    return product;
                }
            } else {
                return product;
            }
        });
        return filteredProducts;
    };
});