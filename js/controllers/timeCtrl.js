angular.module('toDoList')
.controller('timeCtrl', function ($scope,$interval) {

    $scope.curTime = new Date();

    $interval(function(){
        $scope.curTime = new Date();
    },500);

    $scope.getTime = function () {
        return $scope.curTime.getHours() + ':' + $scope.curTime.getMinutes() + ':' +$scope.curTime.getSeconds();
    }
})