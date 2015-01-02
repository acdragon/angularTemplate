myApp.controller('RegistrationController', function($scope,$location,userSession) {
  
   $scope.$on('$viewContentLoaded',function(){
     console.log($scope.myform);
    })

  $scope.login = function() {
  	if(!$scope.myform.$invalid){
  		//alert($scope.user.email);	
  		//$location.path('meetings');
      //alert(JSON.stringify($scope.user));
      userSession.loginUser($scope.user).success(function(data){
         console.log('Result');
         console.log(data);
      })
    
  }} //login

 
}); //RegistrationController
