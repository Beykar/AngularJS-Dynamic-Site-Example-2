/* Menu Pop-up Directive
 ===========================================================================================
 ===========================================================================================*/

 issApp.directive('popup', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
            $('.iss-doc__repo-list--link').click(function(e){
                e.preventDefault();
                $('.iss-doc__area-popup').css('display', 'block');
            });

            $('.iss__facilitator-link').click(function(e){
                e.preventDefault();
                console.log('facilitator clicked');
                $('.iss__popup-facilitators').css('display', 'block');
            });

            $('.iss__takeway-link').click(function(e){
                e.preventDefault();
                console.log('takeaway clicked');
                $('.iss__popup-takeway').css('display', 'block');
            });

            $('.iss__resources-link').click(function(e){
                console.log('resources clicked');
                e.preventDefault();
                $('.iss__popup-resources').css('display', 'block');
            });

            $('.iss-doc__area-popup-link').click(function(e){
                e.preventDefault();
                $('.iss-doc__area-popup').css('display', 'none');
            });
            
		}
	};
} ]);