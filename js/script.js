angular.module('tipsCalculator', [])
  .controller('tipsController', function($scope) {

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
      $scope.mealcount += 1;
      console.log("meal count + 1");
    }

    $scope.tipTotal = 0;
    $scope.mealCount = 0;
    $scope.avgTip = 0;

  });