angular.module('app', [])

var maincontrollerFunc = function ($scope) {
	$scope.header = "Wink Wink..."
	$scope.list = "Ouch Ouch"
	$scope.headertest = true
	$scope.listTest = true
	$scope.SweetButton = "This is a Sweet Button"
	$scope.spoons = "I like spoons"
	$scope.Ispoon = "I have a spoon"
	$scope.Ispoo = "Forks taste good"
	$scope.isCoral = false

	$scope.toggleHeader = function(event) {
		$scope.headertest = !$scope.headertest
		$scope.surprise = true; 
		console.log(event);
	}
	$scope.toggleList = function(event) {
		$scope.listTest = !$scope.listTest
		$scope.wings = true;
		console.log(event);
	}
	$scope.toggleClass = function(){
		$scope.isCoral = !$scope.isCoral
		

	}
}

angular.module('app').controller('maincontroller', ['$scope', maincontrollerFunc])