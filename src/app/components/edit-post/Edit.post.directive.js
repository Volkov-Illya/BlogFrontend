(function() {
  'use strict';

  angular
    .module('tutFrontend')
    .directive('editPost', editPost);

  /** @ngInject */
  function editPost() {
    var directive = {
      restrict: 'EA',
      templateUrl: 'app/components/edit-post/edit.post.button.html',
      controller: 'EditPostCtrl',
      controllerAs: 'edit'
    };
    return directive;
  }

})();
