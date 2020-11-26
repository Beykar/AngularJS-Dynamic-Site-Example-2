var issApp = angular.module('issApp', ['ngAnimate', 'ui.router', 'ngSanitize', 'ui.bootstrap', 'ngAnimate']);

var appCacheVersion = '01-10-20-1633';

//this is to allow the $location.search().q to work when entering a search term
issApp.config(['$locationProvider', function($locationProvider){
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false
      });    
  }]);
  
  issApp.filter('trusted', ['$sce', function($sce){
      var div = document.createElement('div');
      return function(text) {
          div.innerHTML = text;
          return $sce.trustAsHtml(div.textContent);
      }
  }]);
  
  issApp.filter('removeHTMLTags', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });
  
  issApp.filter('limitHtml', function() {
    return function(text, limit) {
  
        var changedString = String(text).replace(/<[^>]+>/gm, '');
        var length = changedString.length;
  
        return length > limit ? changedString.substr(0, limit - 1)+ '....' : changedString;
    }
  });

  issApp.run(function($rootScope, $window) {

    $rootScope.$on('$stateChangeSuccess', function () {
  
      var interval = setInterval(function(){
        if (document.readyState == 'complete') {
          $window.scrollTo(0, 0);
          clearInterval(interval);
        }
      }, 200);
  
    });
    
  });
  
  issApp.config(function($locationProvider, $stateProvider, $urlRouterProvider){
    $locationProvider.hashPrefix('');
    $stateProvider

    .state('/',{
        url: "/SitePages/Index.aspx",
        templateUrl: "https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/SiteAssets/web-assets/assets/js/partials/homePartial.html?c=" + appCacheVersion
    })
    .state('home', {
        url: "/SitePages/Index.aspx/home",
        templateUrl: "https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/SiteAssets/web-assets/assets/js/partials/homePartial.html?c=" + appCacheVersion
    })
    .state('overview', {
      url: "/SitePages/Index.aspx/overview/:week",
      templateUrl: "https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/SiteAssets/web-assets/assets/js/partials/overviewPartial.html?c=" + appCacheVersion
    })
    .state('faqs', {
      url: "/SitePages/Index.aspx/faqs",
      templateUrl: "https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/SiteAssets/web-assets/assets/js/partials/faqsPartial.html?c=" + appCacheVersion
    })
    .state('about-event', {
      url: "/SitePages/Index.aspx/about-the-event",
      templateUrl: "https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/SiteAssets/web-assets/assets/js/partials/aboutPartial.html?c=" + appCacheVersion
    })
    .state('resources', {
      url: "/SitePages/Index.aspx/about-the-event",
      templateUrl: "https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/SiteAssets/web-assets/assets/js/partials/resourcesPartial.html?c=" + appCacheVersion
    })
    .state('network-channel', {
      url: "/SitePages/Index.aspx/network-channel",
      templateUrl: "https://sites.ey.com/sites/EMEIAFSOLearningEvents/insuranceshowcase/SiteAssets/web-assets/assets/js/partials/networkPartial.html?c=" + appCacheVersion
    })
 
    $urlRouterProvider.otherwise("/SitePages/Index.aspx/home");
  
  });