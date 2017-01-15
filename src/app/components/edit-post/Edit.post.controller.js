(function () {
  'use strict';

  angular
    .module('tutFrontend')
    .controller('EditPostCtrl', EditPostCtrl);

  /** @ngInject */
  function EditPostCtrl($scope, $mdMedia, $rootScope, postsDaoService, $mdDialog) {
    var vm = this;


    vm.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    vm.answer = answer;
    vm.hide = hide;
    vm.cancel = cancel;
    vm.loginFail = false;
    vm.isLogin = false;
    vm.edit = editPost;
    vm.showReg = showReg;
    vm.postId = '';


    vm.isLogin = function isLogin() {
      postsDaoService.checkAuthOnRefresh();
      return $rootScope.isAuthenticated;
    }();

    function showReg(event, data) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && vm.customFullscreen;
      vm.postId = data;
      $mdDialog.show({
        controller: function () {
          return vm;
        },
        controllerAs: 'vm',
        templateUrl: './app/components/edit-post/edit.post.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        fullscreen: useFullScreen
      })
        .then(function (answer) {
          vm.status = 'You said the information was "' + answer + '".';
        }, function () {
          vm.status = 'You cancelled the dialog.';
        });
    }

    function editPost() {
      postsDaoService.editPost(vm.post, vm.postId)
        .then(function (res) {
          $scope.$emit('update-post');
          vm.post.title = '';
          vm.post.text = '';
          return vm.hide();
        });


    }

    function hide() {
      $mdDialog.hide();
    }

    function cancel() {
      $mdDialog.cancel();
    }

    function answer(answer) {
      $mdDialog.hide(answer);
    }

  }

})();
