var app = angular.module('calculation', []);
app.controller('CalculationController', function($scope) {
        $scope.getTotalFortbewegung = function(){
            var total;
            total = drive.car + drive.train + drive.taxi + drive.plane + drive.other;
        return total;
        }
});