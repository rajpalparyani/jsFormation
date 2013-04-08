'use strict';

angular.module('cfApp')
  .controller('ResourcesCtrl', function ($scope, $rootScope, $location) {

    $scope.addEC2Resource = function () {
        $location.path('/ec2');
    };

    $scope.addS3Resource = function () {
        $location.path('/s3');
    };

    $scope.goToOutput = function () {
        $location.path('/output');
    };

    $scope.hasMinimumRequirements = function () {
        return $rootScope.s3 > 0 || $rootScope.ec2 > 0;
    };

  });
