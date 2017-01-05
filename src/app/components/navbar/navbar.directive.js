(function() {
  'use strict';

  angular
    .module('tutFrontend')
    .directive('blogNavbar', blogNavbar);

  /** @ngInject */
  function blogNavbar() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/navbar/navbar.html',
      // scope: {
      //     creationDate: '='
      // },
      controller: 'BlogNavbarCtrl',
      controllerAs: 'vm'
      // bindToController: true
    };

    return directive;

    /** @ngInject */
    // function NavbarController(moment) {
    //   var vm = this;
    //
    //   // "vm.creationDate" is available by directive option "bindToController: true"
    //   vm.relativeDate = moment(vm.creationDate).fromNow();
    // }
  }

})();
