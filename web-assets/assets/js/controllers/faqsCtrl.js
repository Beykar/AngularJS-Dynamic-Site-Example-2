/* FAQs Controller
====================================================================================================
==================================================================================================*/

issApp.controller('faqsCtrl', function (faqsData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.faqsArr = [];

    faqsData.getFaqsData().then(function(data){
        //console.log('faqs data ', data.d.results);
        angular.forEach(data.d.results, function(value, key){
            var faqObj = {
                ID: value.ID,
                Question: value.Title,
                Answer: value.Answer
            }
            $scope.faqsArr.push(faqObj);
        });

        //console.log('faqs arr ', $scope.faqsArr);
    });
   
   
});  

