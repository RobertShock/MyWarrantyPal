'use strict';

app.filter('LeftNavFilter', () => {
    return (products, navFilters) => {
        Object.keys(navFilters).forEach((key) => {
            if (navFilters[key] === "") {
                delete navFilters[key];
            }
        });
        let filteredProducts = products.filter((product) => {
            if (navFilters.roomId && navFilters.areaId && navFilters.typeId) {
                if (navFilters.roomId === product.roomId && navFilters.areaId === product.areaId && navFilters.typeId === product.typeId) {
                    return product;
                }
            } else if (navFilters.roomId && navFilters.areaId) {
                if (navFilters.roomId === product.roomId && navFilters.areaId === product.areaId) {
                    return product;
                }
            } else if (navFilters.roomId && navFilters.typeId) {
                if (navFilters.roomId === product.roomId && navFilters.typeId === product.typeId) {
                    return product;
                }

            } else if (navFilters.areaId && navFilters.typeId) {
                if (navFilters.areaId === product.areaId && navFilters.typeId === product.typeId) {
                    return product;
                }
            } else if (navFilters.areaId) {
                if (navFilters.areaId === product.areaId) {
                    return product;
                }
            } else if (navFilters.typeId) {
                if (navFilters.typeId === product.typeId) {
                    return product;
                }
            } else if (navFilters.roomId) {
                if (navFilters.roomId === product.roomId) {
                    return product;
                }
            } else {
                return product;
            }
        });
        return filteredProducts;
    };
});