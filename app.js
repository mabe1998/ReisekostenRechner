var app = angular.module('calculation', []);
app.controller('CalculationController',['$scope', function($scope) {

    var _driveTotal=0, _driveCar=0, _driveTrain=0, _driveTaxi=0, _drivePlane=0, _driveOther=0;

    $scope.driveCost={};
    $scope.driveCost.driveTotal = function(newValue){
        return arguments.length ? (_driveTotal = newValue) : _driveTotal;
    }
    $scope.driveCost.driveCar = function(newValue){
        return arguments.length ? (_driveCar = newValue) : _driveCar;
    }
    $scope.driveCost.driveTrain = function(newValue){
        return arguments.length ? (_driveTrain = newValue) : _driveTrain;
    }
    $scope.driveCost.driveTaxi = function(newValue){
        return arguments.length ? (_driveTaxi = newValue) : _driveTaxi;
    }
    $scope.driveCost.drivePlane = function(newValue){
        return arguments.length ? (_drivePlane = newValue) : _drivePlane;
    }
    $scope.driveCost.driveOther = function(newValue){
        return arguments.length ? (_driveOther = newValue) : _driveOther;
    }
    $scope.driveTotal = function() {
        return (_driveCar * 0.3) + _driveTrain + _driveTaxi + _drivePlane + _driveOther;
    }

    var _sleepTotal=0, _sleepWithBreakfast=0, _sleepBreakfast=0, _sleepWithoutBreakfast=0;

    $scope.sleepCost={};
    $scope.sleepCost.sleepTotal = function(newValue){
        return arguments.length ? (_sleepTotal = newValue) : _sleepTotal;
    }
    $scope.sleepCost.sleepWithBreakfast = function(newValue){
        return arguments.length ? (_sleepWithBreakfast = newValue) : _sleepWithBreakfast;
    }
    $scope.sleepCost.sleepBreakfast = function(newValue){
        return arguments.length ? (_sleepBreakfast = newValue) : _sleepBreakfast;
    }
    $scope.sleepCost.sleepWithoutBreakfast = function(newValue){
        return arguments.length ? (_sleepWithoutBreakfast = newValue) : _sleepWithoutBreakfast;
    }
    $scope.sleepTotal = function() {
        return _sleepWithBreakfast + _sleepBreakfast + _sleepWithoutBreakfast;
    }
    
    var _pauschaleTotal=0, _pauschaleFullday=0, _pauschaleFirstday=0, _pauschaleLastday=0, _pauschaleDays=0;

    $scope.pauschaleCost={};
    $scope.pauschaleCost.pauschaleTotal = function(newValue){
        return arguments.length ? (_pauschaleTotal = newValue) : _pauschaleTotal;
    }
    $scope.pauschaleCost.pauschaleFullday = function(newValue){
        return arguments.length ? (_pauschaleFullday = newValue) : _pauschaleFullday;
    }
    $scope.pauschaleCost.pauschaleFirstday = function(newValue){
        return arguments.length ? (_pauschaleFirstday = newValue) : _pauschaleFirstday;
    }
    $scope.pauschaleCost.pauschaleLastday = function(newValue){
        return arguments.length ? (_pauschaleLastday = newValue) : _pauschaleLastday;
    }
    $scope.pauschaleCost.pauschaleDays = function(newValue){
        return arguments.length ? (_pauschaleDays = newValue) : _pauschaleDays;
    }
    $scope.pauschaleTotal = function() {
        return (_pauschaleFullday *24) + (_pauschaleFirstday *12) + (_pauschaleLastday *12) + (_pauschaleDays *20);
    }


    $scope.totalTotal = function() {
        return $scope.driveTotal() + $scope.sleepTotal() + $scope.pauschaleTotal();
    }
    


}]);