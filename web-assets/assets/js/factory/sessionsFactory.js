/* Sessions Factory
======================================================================================
======================================================================================
*/

issApp.factory('sessionsData', function($http){
	return {
		getSessionsData: function(){
	    	return $http.get("https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/_api/web/lists/getByTitle('Lst_Sessions')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
        },
        
        getFacilitatorsData: function(){
            return $http.get("https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/_api/web/lists/getByTitle('Lst_Facilitators')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
        }
	}
	
});