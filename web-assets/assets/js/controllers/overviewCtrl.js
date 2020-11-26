/* overview Controller
====================================================================================================
==================================================================================================*/

issApp.controller('overviewCtrl', function (sessionsData, $scope, $sce, $http, $stateParams, $window, $filter, $q) {
    'use strict';
  
    $window.scrollTo(0, 0);
    $scope.$sce = $sce;
    $scope.sessionsArr = [];
    $scope.facilitatorsArr = [];
    $scope.sessionsFacilitatorsArr = [];


    $scope.overview = $stateParams;
    //console.log('$scope.overview ', $scope.overview);

    sessionsData.getSessionsData().then(function(data){
        //console.log('Sessions data ', data.d.results);
        angular.forEach(data.d.results, function(value, key){
            if(value.Session_x002d_Week == $scope.overview.week){
                var sessionObj = {
                    Name: value.Title,
                    Date: value.Session_x002d_Date,
                    Start: value.Session_x002d_Start,
                    End: value.Session_x002d_End,
                    Description: value.Session_x002d_Description,
                    CalendarLink: value.Session_x002d_Calendar_x002d_Lin ? value.Session_x002d_Calendar_x002d_Lin.Url : null,
                    VideoLink: value.Session_x002d_Video_x002d_Link ? value.Session_x002d_Video_x002d_Link.Url : null,
                    Facilitators: value.Sessions_x002d_FacilitatorsId.results,
                    KeyTakeaways: value.Session_x002d_Takeaways,
                    Resources: value.Session_x002d_Resources,
                    Week: value.Session_x002d_Week,
                    StrategicTheme: value.Strategic_x002d_Theme,
                    RealDate: value.Pick_x002d_Date_x002d_Time,
                    FacilitatorsDetails: []
                }

                if (sessionObj.StrategicTheme == 'Reframing Insurance'){
                    sessionObj.Color = '#D06A61'
                } else if (sessionObj.StrategicTheme == 'Transformation'){
                    sessionObj.Color = '#9AB0C7'
                } else if(sessionObj.StrategicTheme == 'Enterprise Risk and Controls'){
                    sessionObj.Color = '#CAAC84'
                } else {
                    sessionObj.Color == 'transparent';
                }
                

                $scope.sessionsArr.push(sessionObj);
            }
        });

        //console.log('sessions arr ', $scope.sessionsArr);

        $q.all($scope.sessionsArr).then(function(){

            sessionsData.getFacilitatorsData().then(function(data){
                //console.log('facilitators ', data.d.results);

                angular.forEach(data.d.results, function(value, key){
                    var facilitatorObj = {
                        ID: value.ID,
                        Name : value.Title,
                        Title: value.Facilitator_x002d_Title,
                        Bio: value.Facilitator_x002d_Bio,
                        Image: value.Facilitator_x002d_Profile_x002d_ ? value.Facilitator_x002d_Profile_x002d_.Url : null,
                    }

                    $scope.facilitatorsArr.push(facilitatorObj);
                });
                //console.log('facilitator array ',  $scope.facilitatorsArr);

                angular.forEach($scope.sessionsArr, function(value, key){
                        $scope.outterValue = value;
                        if($scope.outterValue.Facilitators.length != 0){
                            angular.forEach($scope.outterValue.Facilitators, function(value, key){
                                var facilitator = $filter('filter')($scope.facilitatorsArr, {ID: value})[0];
                                $scope.outterValue.FacilitatorsDetails.push(facilitator);
                                //$scope.sessionsFacilitatorsArr.push(facilitator);
                            });      
                        }
                                          
                    });

                // console.log('$scope.sessionsFacilitatorsArr ', $scope.sessionsFacilitatorsArr); 
                //console.log('sessions arr final', $scope.sessionsArr);
            });

           
        });


        $scope.showFacilitators = function(name, arr){
            $scope.sessionName = name;
            $scope.speakerArr = arr;
        }

        $scope.showTakeaways = function(name, description){
            $scope.sessionName = name;
            $scope.keyTakeways = description;
        }

        $scope.showResources = function(name, description){
            $scope.sessionName = name;
            $scope.resources = description;
        }
    });
   
   
});  

