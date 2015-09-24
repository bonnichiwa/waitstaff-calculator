angular.module('tipsCalculator', ['ngRoute'])

  .config(['$routeProvider' ,function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'HomeCtrl'
    })
    .when('/meal', {
      templateUrl : 'meal.html',
      controller : 'MealCtrl'
    })
    .when('/earnings' {
      templateUrl : 'earnings.html',
      controller : 'EarningCtrl'
    })
  }])

  .controller('tipsController', function($scope) {

    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    $scope.avgTip = 0;

    var mealForm = {
      mealprice : "",
      taxpercent : "",
      tippercent : "",
    }

    $scope.data = angular.copy(mealForm);

    $scope.cancel = function() {
      $scope.tipsForm.$setPristine();
      $scope.data = angular.copy(mealForm);
      console.log('empty');
    }

    $scope.submit = function() {
      $scope.mealCount += 1;
      console.log("meal count + 1");

      var addTip = ($scope.data.tippercent/100) * ($scope.data.mealprice + ($scope.data.mealprice * $scope.data.taxpercent/100));
      $scope.tipTotal += addTip
      console.log("tip has been added");

      $scope.avgTip = $scope.tipTotal / $scope.mealCount;

      $scope.tipsForm.$setPristine();
      $scope.data = angular.copy(mealForm);
      console.log('new entry');
    }

    $scope.reset = function() {
      $scope.tipTotal = 0;
      $scope.mealCount = 0;
      $scope.avgTip = 0;
      $scope.tipsForm.$setPristine();
      $scope.data = angular.copy(mealForm);
      console.log('resetted');
    }
  });