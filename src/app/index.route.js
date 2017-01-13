(function () {
  'use strict';

  angular
    .module('tutFrontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/components/home-page/home.page.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });

    $urlRouterProvider.otherwise('/');
  }

})
();
