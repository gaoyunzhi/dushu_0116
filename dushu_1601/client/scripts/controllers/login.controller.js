angular
  .module('Root')
  .controller('LoginCtrl', LoginCtrl);
 
function LoginCtrl($scope, $reactive, $state, $ionicLoading, $ionicPopup, $log) {
  $reactive(this).attach($scope);
 
  this.login = login;
 
  function login() {
    Meteor.loginWithPassword(this.email, this.password, (err) => {
      if (err) {
        return handleError(err);
      }
      $state.go('tab.chat');
    });
  }

  function gotoRegister() {
    console.log("here");
    $state.go('register', {email: this.email, password: this.password});
  }
 
  function handleError(err) {
    $log.error('Login error ', err);
 
    $ionicPopup.alert({
      title: err.reason || 'Login failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}