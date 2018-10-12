(function (ionic) {
	angular.module('ionic.closePopup', ['ionic'])
		.service('IonicClosePopupService', [
			function () {
				var popups = [];
				var htmlEl = angular.element(document.querySelector('html'));
				htmlEl.on('click', function (event) {
					if (event.target.nodeName === 'HTML') {console.log('HTML')
						var currentPopup = popups[(popups.length-1)]
						if (currentPopup) {
							currentPopup.close();
							popups.pop();
						}
					}
				});
				this.register = function (popup) {
					popups.push(popup);
				}
			}
		]);
})(window.ionic);