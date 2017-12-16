'use strict';

app.filter('LeftNavFilter', () => {
    return (products, leftNavFilters) => {
        console.log("products", products);
        console.log("leftNavFilters", leftNavFilters);
        return products;
    };
});