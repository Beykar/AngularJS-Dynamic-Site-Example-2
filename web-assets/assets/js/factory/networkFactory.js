/*  Network Factory
======================================================================================
======================================================================================
*/

issApp.factory('networkData', function($http){
	return {
		getNetworkData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('Lst_Showcase-Description')/items?$top=5000&$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
        }
	}
	
});