(function () {
  'use strict';

  angular
    .module('tutFrontend')
    .directive('signInButton', signInButton);

  /** @ngInject */
  function signInButton() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/sign-in/sign.in.button.html',
      controller: 'SignInCtrl',
      controllerAs: 'signin'
    };

    return directive;

  }

})();
