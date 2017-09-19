(function(){
	//start mean module
	angular.module('facilitiesModule',[])
	//defining mean directive
	.directive('facilitiesDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/EstamosTrabajando.html',
			controller: 'facilitiesController'
		};
	})
	/*CONTROLLER*/
	.controller('facilitiesController', function ($scope) {
	});
})();