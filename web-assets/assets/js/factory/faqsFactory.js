/* FAQs Factory
======================================================================================
======================================================================================
*/

issApp.factory('faqsData', function($http){
	return {
		getFaqsData: function(){
	    	return $http.get("https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/_api/web/lists/getByTitle('Lst_FAQs')/items?$select=*", { 
				headers: { "Accept": "application/json;odata=verbose" }
			})
			.then(function(response) {
				return response.data;
			});
		}		
	}
	
});