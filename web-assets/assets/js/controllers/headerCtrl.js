/* Header Controller
====================================================================================================
==================================================================================================*/

issApp.controller('headerCtrl', function (headerData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.yammerArr = [];
    $scope.linksArr = [];

    headerData.getYammerData().then(function(data){
        //console.log('yammer ', data.d.results);
        angular.forEach(data.d.results, function(value, key){
            var yammerObj = {
                Name : value.Title,
                Link: value.Link? value.Link.Url : null
            }

            $scope.yammerArr.push(yammerObj);
        });
        //console.log(' yammer arr ', $scope.yammerArr);
    });

    headerData.getPromotedLinksData().then(function(data){
        //console.log('promoted links ', data.d.results);
        angular.forEach(data.d.results, function(value, key){
            var linkObj = {
                Name: value.Title,
                Link: value.Link? value.Link.Url : null,
                Order: value.Order0,
                Promoted: value.Promoted,
                Class: value.Promoted == true? 'promoted': ''
            }

            $scope.linksArr.push(linkObj);
        });
        $scope.linksArr = $filter('orderBy')($scope.linksArr, )
        //console.log('$scope.linksArr ', $scope.linksArr);
    });
});

