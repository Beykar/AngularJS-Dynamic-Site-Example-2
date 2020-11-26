/* Menu Pop-Out Directive
 ===========================================================================================
 ===========================================================================================*/

 issApp.directive('menuPopout', [ function () {
	return {
		restrict: 'A',
		link: function (scope, elem) {
			var windowWidth = $(window).width();
			
			// if(windowWidth <=740 ) {
				
			// 	$(".iss__ham-menu-toggle--mobile").on('click', function(e){
			//       e.preventDefault();
			// 	  alert('mobile');
			//       var menuBtnParent = $(this).parent();
			    
			//       if ($('.iss__popout-menu').hasClass('active')) {
			//         $('.iss__popout-menu').removeClass('active');
			//         $(this).removeClass('open');
			//       } else {
			//         $(this).addClass('open');
			//         $('.iss__popout-menu').addClass('active');
			//       }
			//     });

			//     $(".iss__main-nav-anchor").on('click', function(e){
			//       e.preventDefault();
			//       var itemLink = $(this).attr('href');
			//       $('.iss__popout-menu').removeClass('active');
			//       $('#menuToggle').removeClass('open');
			//       window.location.href = itemLink;
			//     });

			// } else {
				
				$(".iss__ham-menu-toggle--tablet").on('click', function(e){
			      e.preventDefault();
				  var menuBtnParent = $(this).parent();
			    
			      if (menuBtnParent.find('.iss__popout-menu').hasClass('active')) {
			        $('.iss__popout-menu').removeClass('active');
					$(this).removeClass('open');
				} else {
					$(this).addClass('open');
			        menuBtnParent.find('.iss__popout-menu').addClass('active');
			      }
			    });

			    $(".iss__main-nav-anchor").on('click', function(e){
			      e.preventDefault();
			      var itemLink = $(this).attr('href');
			      $('.iss__popout-menu').removeClass('active');
			      $('#menuToggle').removeClass('open');
			      window.location.href = itemLink;
				});
				
			//}
			
			$('.iss__main-cont').on('click', function(){
				closeMenu();
			});

			function closeMenu(){
				$('.iss__ham-menu-toggle--tablet').removeClass('open');
				$('.iss__popout-menu').removeClass('active');			
			}
		}
	};
} ]);