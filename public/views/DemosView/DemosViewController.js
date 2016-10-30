/*jshint globals: true, undef: true, browser: true, node: true*/
/* globals angular */

angular.module('geckoTracker').controller('DemosViewController', function($scope, $http, $routeParams, geckoService, ModalService) {
	$scope.showAlertModal = function() {
		ModalService.showModal({
			templateUrl: "components/Modal/AlertModalTemplate.htm",
			controller: "AlertModalController",
			inputs: {
				title: "This Is An Alert",
				icon: "error",
				message: "This is the message. The title, icon, and message inputs are used."
			}
		}).then(function(modal) {
		});
	}
	
	$scope.showYesNoModal = function() {
		ModalService.showModal({
			templateUrl: "components/Modal/YesNoModalTemplate.htm",
			controller: "YesNoModalController",
			inputs: {
				title: "This Is A Question",
				icon: "warning",
				message: "This is the message."
			}
		}).then(function(modal) {
		});
	}
});
