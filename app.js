angular.module('flapperNews', [])
  .controller('MainCtrl', [
    '$scope', function($scope){
      $scope.test = 'Jag är en scopevariabel i Angular.js!';
    }
  ]);
