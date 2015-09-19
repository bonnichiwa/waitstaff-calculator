angular.module('tipsCalculator', [])
  .controller('tipsController', function($scope) {

    var defaultForm = {
      mealprice : "",
      taxpercent : "",
      tippercent : "",
    }

    $scope.data = angular.copy(defaultForm);

    $scope.cancel = function() {
      $scope.tipsForm.$setPristine();
      $scope.data = angular.copy(defaultForm);
      console.log('empty');
    }

  });