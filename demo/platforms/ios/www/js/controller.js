angular.module('starter.controller', [])

.controller('MainCtrl', function($scope) {
	$scope.start = function() {
	    var onSuccess = function (heading, speed, latitude, longitude, motionType) {
		 	$scope.message = $scope.message + '\n\nheading:' + heading + '\nspeed:' + speed + '\nlatitude:' + latitude + '\nlogitude:' + longitude + 'motionType:' + motionType;
			$scope.$apply();
		};
		
		var onFail = function (error) {
		    $scope.message = $scope.message + '\n\n' + 'code: '    + error.code    + '\n' +
                'message: ' + error.message;
                
			$scope.$apply();
		};
	
		ngmotion.startWatch(onSuccess, onFail, $scope.walk, $scope.run, $scope.drive, $scope.frequence);
	}
	
	$scope.stop = function() {
		ngmotion.stopWatch();
	}
});
