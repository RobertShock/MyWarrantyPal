'use strict';

let isAuth = (AuthService) => new Promise ((resolve, reject) => {
	if(AuthService.isAuthenticated()){
	  resolve();
	} else {
	  reject();
	}
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, AuthService){
	firebase.initializeApp(FIREBASE_CONFIG);
	$rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {

	var logged = AuthService.isAuthenticated();
	
	var appTo;
	
    	if (currRoute.originalPath) {
      	appTo = currRoute.originalPath.indexOf('/auth') !== -1;
		}
		
    	if (!appTo && !logged) {
      	event.preventDefault();
      	$location.path('/auth');
    	}
  	});
});

app.config(function($routeProvider){
	$routeProvider
	.when("/auth", {
		templateUrl: 'partials/auth.html',
		controller: 'AuthCtrl'
	})
	.when("/products/details/:id", {
		templateUrl: 'partials/product_details.html',
		controller: 'ProductDetailsCtrl',
		resolve: {isAuth}
	})
	.when("/products/new", {
		templateUrl: 'partials/product_new.html',
		controller: 'ProductNewCtrl',
		resolve: {isAuth}
	})
	.when("/products/edit/:id", {
		templateUrl: 'partials/product_edit.html',
		controller: 'ProductEditCtrl',
		resolve: {isAuth}
	})
	.otherwise('/login');
});