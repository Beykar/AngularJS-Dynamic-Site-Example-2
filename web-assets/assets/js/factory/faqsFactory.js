/* FAQs Factory
======================================================================================
======================================================================================
*/

issApp.factory('faqsData', function($http){
	return {
		getFaqsData: function(){
	    	return $http.get("siteUrl/_api/web/lists/getByTitle('Lst_FAQs')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}		
	}
	
});