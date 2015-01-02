myApp.factory('userSession',function($http){
		var mainURL = "http://localhost:8080/";
		return {
			get : function() {
				return $http.get('api/children.json');
			},
			loginUser : function(login){
				return $http({
						method: 'POST',
						url: mainURL + 'loginUser.php',
						headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
						data: $.param(login)
					});
			},
			getReports : function(){
				return $http.get(mainURL + 'reports.php');
			}

		}//End Return values 
})