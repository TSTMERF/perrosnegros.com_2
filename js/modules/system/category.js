//wrap the module
(function(){
	//start mean module
	angular.module('categoryModule',[])
	//defining mean directive
	.directive('categoryDirective',function(){
		//return function
		return{
			restrict:'E',
			replace:true,
			templateUrl:'html/system/category.html',
			controller: 'categoryController'
		};
	})
	//configurate the module
	.config(function($mdIconProvider) {
    $mdIconProvider
    //.defaultIconSet('img/icons/sets/core-icons.svg', 24);
	})
  /***********CONTROLLERS**********/
  .controller('categoryController', function ($log, $scope, $timeout,$mdSidenav) {
    //buttons for every category
    $scope.toggleLeft =buildDelayedToggler('left');
    $scope.Ardillas =buildToggler('ardillas');
    $scope.Castores =buildToggler('castores');
    $scope.Zorros  =buildToggler('zorros');
    $scope.Rabbits =buildToggler('rabbits');
    $scope.Hornets =buildToggler('hornets');
    $scope.Irons =buildToggler('irons');
    $scope.Falcons =buildToggler('falcons');
    $scope.Tauros =buildToggler('tauros');
    $scope.Ponys =buildToggler('ponys');
    $scope.Primavera =buildToggler('primavera');
    $scope.Otono =buildToggler('otono');
    $scope.Kids =buildToggler('kids');
    $scope.Rockies =buildToggler('rockies');
    $scope.Junior =buildToggler('junior');
    // checking out if right is open.
    $scope.isOpenRight =function(){
      return 
        $mdSidenav('ardillas').isOpen();
        //$mdSidenav('castores').isOpen();
    };
    /* keeps open the  left sidenav */
    function rebote (func, wait, context){
        var time;
        return function rebotado(){
          var context=$scope,
            args=Array.prototype.slice.call(arguments);
          $timeout.cancel(time);
          time=$timeout(function(){
            time=undefined;
            func.apply(context, args);
          }, wait || 10 );
        };
    }
    // built the left sidenav as toggle
    function buildDelayedToggler (navID){
      return rebote(function(){
        $mdSidenav(navID)
        .toggle()
        .then(function(){
          $log.debug("toggle"+navID+"is done");
        });
      },200);
    }
    //built the right sidenav as toggle
    function buildToggler(navID){
       return function() {
        $mdSidenav(navID)
        .toggle()
        .then(function(){
          $log.debug("toggle"+navID+"is done");
        });
       };
    }
  })
  //defining the left controller sidenav
  .controller('LeftCtrl', function($scope,$timeout,$mdSidenav,$log){
    $scope.close=function(){
      $mdSidenav('left').close()
      .then(function(){
        $log.debug('close LEFT is done');
      });
    };
  })
  //defining the right controller sidenav
  .controller('RightCtrl', function($scope,$timeout,$mdSidenav,$log){
    $scope.close=function(){
      $mdSidenav('ardillas').close()
      $mdSidenav('castores').close()
      $mdSidenav('zorros').close()
      $mdSidenav('rabbits').close()
      $mdSidenav('hornets').close()
      $mdSidenav('irons').close()
      $mdSidenav('falcons').close()
      $mdSidenav('tauros').close()
      $mdSidenav('ponys').close()
      $mdSidenav('primavera').close()
      $mdSidenav('otono').close()
      $mdSidenav('kids').close()
      $mdSidenav('rockies').close()
      $mdSidenav('junior').close()
      .then(function(){
        $log.debug('close ardillas is done');
      });
    };
  });
})();

