/* Network Channel Controller
====================================================================================================
==================================================================================================*/

issApp.controller('networkCtrl', function (networkData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.attendeesArr = [];
    $scope.countriesArr = [];
    $scope.serviceLineArr = [];
    $scope.rankArr = [];
    $scope.filterArr = [];
    $scope.countryFilterArr = [];
    $scope.serviceFilterArr = [];
    $scope.rankFilterArr = [];
    $scope.searchResultsArr = [];

    // Remove duplicates from results array of objects
    $scope.removeDuplicates = function(myArray){ 
        var newArray = [];
        for(var i=0; i< myArray.length; i++){
            if(newArray.indexOf(myArray[i]) == -1){
            newArray.push(myArray[i])
            }
        }
        return newArray;
    };
    
    //filter data array according to values in filter array. The filter array can only ever contain one value at a time
    $scope.filterArray  = function (dataArray, filterArray){
        var resultsArray = [];        
        if(filterArray.length != 0){
            angular.forEach(dataArray, function(value, key){
                if(value.Country == filterArray[0] || value.ServiceLine == filterArray[0] || value.Rank == filterArray[0]){
                    resultsArray.push(value);
                }
            });
            return resultsArray;
        } else {
            resultsArray = dataArray;
            return resultsArray;
        }
    }

    networkData.getNetworkData().then(function(data){
        //console.log('network data ', data.d.results);

        angular.forEach(data.d.results, function(value, key){
            var attendeeObj ={
                Name : value.Title,
                Country: value.Column2,
                ServiceLine: value.Column3,
                Rank: value.Column4,
                Email: value.email
            }
            $scope.attendeesArr.push(attendeeObj);
            $scope.countriesArr.push(attendeeObj.Country);
            $scope.serviceLineArr.push(attendeeObj.ServiceLine);
            $scope.rankArr.push(attendeeObj.Rank);
        });

        $q.all($scope.attendeesArr).then(function(){
            //console.log('attendees array ', $scope.attendeesArr);

            $scope.countriesArr = $scope.removeDuplicates($scope.countriesArr);
            //console.log(' $scope.countriesArr ',  $scope.countriesArr);

            $scope.rankArr = $scope.removeDuplicates($scope.rankArr);
            //console.log(' $scope.rankArr ',  $scope.rankArr);

            $scope.serviceLineArr = $scope.removeDuplicates($scope.serviceLineArr);
            //console.log(' $scope.serviceLineArr ',  $scope.serviceLineArr);

            $scope.addFilterCountry = function(country){

                if($scope.countryFilterArr.indexOf(country) < 0){
                    $scope.countryFilterArr.push(country);
                } else {
                    $scope.countryFilterArr.splice($scope.countryFilterArr.indexOf(country), 1);
                }
                

                //console.log('country filter array', $scope.countryFilterArr);
            }

            $scope.addFilterService = function(service){

                if($scope.serviceFilterArr.indexOf(service) < 0){
                    $scope.serviceFilterArr.push(service);
                } else {
                    $scope.serviceFilterArr.splice($scope.serviceFilterArr.indexOf(service), 1);
                }
                

                //console.log('service array', $scope.serviceFilterArr);
            }

            $scope.addFilterRank = function(rank){

                if($scope.rankFilterArr.indexOf(rank) < 0){
                    $scope.rankFilterArr.push(rank);
                } else {
                    $scope.rankFilterArr.splice($scope.rankFilterArr.indexOf(rank), 1);
                }
                

                //console.log('rank array', $scope.rankFilterArr);
            }

            $scope.search = function(){                
                if($scope.countryFilterArr.length == 0 && $scope.serviceFilterArr.length == 0 && $scope.rankFilterArr.length == 0){
                    alert('Please pick a filter to being the search!');
                    $scope.searchResultsArr = [];
                } else{
                    $scope.searchResultsArr = [];
                    $scope.filtersArray = [];

                    if($scope.countryFilterArr.length > 1){
                        $scope.searchResultsArr = [];
                        return;
                    } else {
                        $scope.searchResultsArr = $scope.filterArray($scope.attendeesArr, $scope.countryFilterArr);
                        //console.log('result1 ', $scope.searchResultsArr);
                        
                        if($scope.serviceFilterArr.length > 1){
                            $scope.searchResultsArr = [];
                            return;
                        } else {
                            $scope.searchResultsArr = $scope.filterArray($scope.searchResultsArr, $scope.serviceFilterArr);
                            //console.log('result2 ', $scope.searchResultsArr);

                            if($scope.rankFilterArr.length > 1){
                                $scope.searchResultsArr = [];
                                return;
                            } else {
                                $scope.searchResultsArr = $scope.filterArray($scope.searchResultsArr, $scope.rankFilterArr);
                                //console.log('result3 ', $scope.searchResultsArr);     
                            }
                        }
                    };
                    
                    
                    
                                 

                }
            }

        });

        
    });
   
});  

