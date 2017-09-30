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
/********************filtra las combinaciones rápidas del teclado*************************/
  	/*.filter('keyboardShortcut', function($window) {
  	  return function(str) {
      if (!str) return;

      var keys = str.split('-');
      var isOSX = /Mac OS X/.test($window.navigator.userAgent);
      var seperator = (!isOSX || keys.length > 2) ? '+' : '';
      var abbreviations = {
        M: isOSX ? '⌘' : 'Ctrl',
        A: isOSX ? 'Option' : 'Alt',
        S: 'Shift'
      };

      return keys.map(function(key, index) {
        var last = index == keys.length - 1;
        return last ? key : abbreviations[key];
      }).join(seperator);
      };
    })*/
      /********************Submenu Inside Categories****************************/

    /*BABY*
    $scope.gotoArdillas=function(){
      $location.path('/Ardillas/');
    }
    $scope.gotoCastores=function(){
      $location.path('/Castores/'); 
    }
    $scope.gotoZorros=function(){
      $location.path('/Zorros/');
    }
    /*CHILDISH*
    $scope.gotoRabbits=function(){
      $location.path('/Rabbits/');
    }
    $scope.gotoHornets=function(){
      $location.path('/Hornets/');
    }
    $scope.gotoIrons=function(){
      $location.path('/Irons/');
    }
    $scope.gotoFalcons=function(){
      $location.path('/Falcons/');
    }
    $scope.gotoTauros=function(){
      $location.path('/Tauros/');
    }
    $scope.gotoPonys=function(){
      $location.path('/Ponys/');
    }
    /*YOUTH*
    $scope.gotoSpringY=function(){
     $location.path('/Varonil_Primavera/');
    }
    $scope.gotoAutumnY=function(){
      $location.path('/Varonil_Otoño/');
    }
    /*FEMALE*
    $scope.gotoSpringF=function(){
      $location.path('/Femenil_Kid/');
    }
    $scope.gotoAutumnF=function(){
      $location.path('/Femenil_Rockies/');
    }
    $scope.gotoSpringF2=function(){
      $location.path('/Femenil_Juvenil/');
    }
    this.settings = {
      printLayout: true,
      showRuler: true,
      showSpellingSuggestions: true,
      presentationMode: 'edit'
    };

    this.sampleAction = function(name, ev) {
      $mdDialog.show($mdDialog.alert()
        .title(name)
        .textContent('You triggered the "' + name + '" action')
        .ok('Great')
        .targetEvent(ev)
      );
    };
  });*/
