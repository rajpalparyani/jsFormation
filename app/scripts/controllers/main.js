'use strict';

angular.module('cfApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location) {
    
    $rootScope.cfObj = {};
    $rootScope.cfObj.AWSTemplateFormatVersion = '2010-09-09';
    $rootScope.cfObj.Description = '';
    $rootScope.ec2 = 0;
    $rootScope.s3 = 0;

    $scope.goToResources = function () {
        $location.path('/resources');
    };
  });
