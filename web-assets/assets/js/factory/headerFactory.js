/* Header Factory
======================================================================================
======================================================================================
*/

issApp.factory('headerData', function($http){
	return {
		getYammerData: function(){
	    	return $http.get("https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/_api/web/lists/getByTitle('Lst_Yammer')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
        },	
        getPromotedLinksData: function(){
	    	return $http.get("https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/_api/web/lists/getByTitle('Lst_Promoted-Links')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}		
	}
	
});