angular.module('tipsCalculator', [])
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
      var addTip = (tipsForm.tippercent/100) * (tipsForm.mealprice + (tipsForm.mealprice * tipsForm.taxpercent/100));
      $scope.tipTotal += addTip
      console.log("tip total is: addTip");

      $scope.tipsForm.$setPristine();
      $scope.data = angular.copy(mealForm);
      console.log('new entry');
    }



  });