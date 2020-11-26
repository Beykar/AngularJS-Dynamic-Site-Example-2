/* Home Controller
====================================================================================================
==================================================================================================*/

issApp.controller('homeCtrl', function (homePageData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;

    homePageData.getHomePageData().then(function(data){
        //console.log('homepage data ', data.d.results);

        $scope.welcomeData = {
            Title : data.d.results[0]['Title'],
            IntroMessage : data.d.results[0]['Welcome_x002d_Intro_x002d_Messag'],
            FullMessage : data.d.results[0]['Welcome_x002d_Full_x002d_Message']
        }

        $scope.aboutData ={
            Title : data.d.results[1]['Title'],
            IntroMessage : data.d.results[1]['Welcome_x002d_Intro_x002d_Messag'],
            FullMessage : data.d.results[1]['Welcome_x002d_Full_x002d_Message']
        }

        $scope.resourcesData ={
            Title : data.d.results[2]['Title'],
            IntroMessage : data.d.results[2]['Welcome_x002d_Intro_x002d_Messag'],
            FullMessage : data.d.results[2]['Welcome_x002d_Full_x002d_Message']
        }
    });
   
   
});  

