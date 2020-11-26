/* clicked and hover Directive
 ===========================================================================================
 ===========================================================================================*/

 issApp.directive('activeNav', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {

            $('.iss__nav-link').eq(0).addClass('active-nav');
           
            $('.iss__nav-link').click(function(){
                $('.iss__nav-link').removeClass('active-nav');
                $(this).addClass('active-nav');
            });
        }	
	};
} ]); 
issApp.directive('popup', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
            
            $('.iss__home-readmore').click(function(){
                $('.iss__popup-cont').css({'right':'0'});
                $('.iss__popup-close-link').css({'right':'5rem'});
            });

            $('.iss__facilitator-link').click(function(e){
                e.preventDefault();
                // console.log('facilitator clicked');
                $('.iss__popup-facilitators').css({'right':'0'});
                $('.iss__popup-close-link').css({'right':'5rem'});
            });

            $('.iss__takeway-link').click(function(e){
                e.preventDefault();
                //console.log('takeaway clicked');
                $('.iss__popup-takeway').css({'right':'0'});
                $('.iss__popup-close-link').css({'right':'5rem'});        
            });

            $('.iss__resources-link').click(function(e){
                //console.log('resources clicked');
                e.preventDefault();
                $('.iss__popup-resources').css({'right':'0'});
                $('.iss__popup-close-link').css({'right':'5rem'});
            });

            $('.iss__popup-close-link').click(function(){
                $('.iss__popup-cont').css({'right':'-100%'});
                $('.iss__popup-close-icon').css({'right':'-100%'});
            });
        }	
	};
} ]);


issApp.directive('activeTab', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {

            $('.iss__facilitator-heading-list--item').eq(0).addClass('yellow');
            $('.iss__facilitator-heading-list--item').eq(1).addClass('yellow');

            $('.iss__facilitators-tab-link').click(function(){
                $('.iss__facilitator-heading-list--item').removeClass('yellow');
                var $thisList = $(this).find('li');
                $thisList.each(function(index, value){
                    $(this).addClass('yellow');
                });
            });

        }
	};
} ]);

issApp.directive('rotate', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {

            // $('.iss__accordion-angle-right').eq(0).addClass('rotate-icon');
            
            $('.iss__accordion-link').click(function(){
                var $thisIcon = $(this).children('.iss__accordion-angle-right').eq(0),
                    $allIcons = $('.iss__accordion-angle-right');

                    //console.log('$thisIcon ', $thisIcon);
                if($thisIcon.hasClass('rotate-icon') == true){
                    $thisIcon.removeClass('rotate-icon');
                } else {
                    //$thisIcon.addClass('rotate-icon');
                    $allIcons.each(function(index, value){
                        if (index !=  $allIcons.index($thisIcon)){
                            $(this).eq(0).removeClass('rotate-icon');
                        } else {
                            $(this).eq(0).addClass('rotate-icon');
                        }
                    });
                }
            });

        }
	};
} ]);

issApp.directive('showPane', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {

            $('.iss__facilitators-tab-pane').removeClass('active');
            $('.iss__facilitators-tab-pane').eq(0).addClass('active');
        
            //$targetPane = $('.iss__facilitators-tab-pane').eq(0);
           
            $('.iss__facilitators-tab-link').click(function(){

                $paneID = $(this).attr('href');
                //console.log('$paneID', $paneID);
                $targetPane = $($paneID);
                $('.iss__facilitators-tab-pane').removeClass('active');              
                $targetPane.addClass('active');
            
                
            });
        }	
	};
} ]);

issApp.directive('tickerTape', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {

            var newsItem = [
                {
                "date" : "05/16/18",
                "story": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                },
                {
                "date" : "05/13/18",
                "story": "Sed quis mauris suscipit, vehicula lacus sit amet, volutpat libero. Curabitur nec scelerisque orci."
                },
                {
                "date" : "04/28/18",
                "story": "Praesent lacinia elit ut neque ornare vestibulum ac et dolor. Cras vel urna sed elit porta fringilla eget id nulla."
                },
                {
                "date" : "04/19/18",
                "story": "Praesent bibendum odio id euismod scelerisque. In tempor, ligula nec porta egestas, magna ipsum sodales libero, sit amet ultrices lorem ex vitae justo."
                },
                {
                "date" : "04/12/18",
                "story": "This is a news story 5."
                }
            ];
            
            for (i = 0; i < newsItem.length; i++) {
                $(".newsTicker p").append(
                "<span class='date'>" + newsItem[i].date + ":</span>" +
                "<span class='story'>" + newsItem[i].story + "</span>"
                );
            }

        }	
	};
} ]);

