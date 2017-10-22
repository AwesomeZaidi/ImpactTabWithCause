//This file should watch for a new tab to open, track timer, etc, storage
// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//   $scope.websiteList = [];
//
//   function addWebsite(tabId) {
    chrome.tabs.onActiveChanged.addListener(function(tabId,selectInfo) {
      chrome.tabs.get(tabId, function (tab) {
          var url = tab.url;
          $('#resultslist').append("<li><span>"+url+"</span></li>");
          // $scope.websiteList.push(url);
          console.log(url);
          console.log(tab.title);
      });
    });
  // }
// });


  //If timer is already running, end count.

  //Start new timer
    //If URL already exists in Storage

      //Add timer value to existing value

    //Else

      //Create new val in Storage

// function callback(data) {
//   console.log(data);
//   console.log(data.url);
// }
