angular.module('optionsApp', ['localStorageModule']);

var formCtrl = function($scope,$storage) {
  var tbOptions = $storage('liklab_options');
  $scope.options = {
    'token': (tbOptions.getItem('token') !== null) ? tbOptions.getItem('token') : defaultOptionsValues.token,
    'highlight_color': (tbOptions.getItem('highlight_color') !== null) ? tbOptions.getItem('highlight_color') : defaultOptionsValues.highlight_color,
  };
  //Save action
  $scope.save = function(options) {
    tbOptions.setItem('token',options.token);
    tbOptions.setItem('highlight_color',options.highlight_color);
    $scope.messages = "Options saved!!!";
  };
  //Reset action
  $scope.reset = function() {
    window.localStorage.clear();
    $scope.options = {};
  };
};


var defaultOptionsValues = {
  'token' : '',
  'highlight_color': '#FFFF00'
};