(function () {
  'use strict';

  angular
    .module('tutFrontend')
    .directive('signUpButton', signUpButton);

  /** @ngInject */
  function signUpButton() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/sign-up/sign.up.button.html',
      controller: 'SignUpCtrl',
      controllerAs: 'signup'
    };

    return directive;
  }

})();
