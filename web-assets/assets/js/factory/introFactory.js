/* Homepage Factory
======================================================================================
======================================================================================
*/

issApp.factory('homePageData', function($http){
	return {
		getHomePageData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('Lst_Site-Intro')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}		
	}
	
});