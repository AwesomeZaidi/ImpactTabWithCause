//This file should watch for a new tab to open, track timer, etc, storage
// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//   $scope.websiteList = [];
//
//   function addWebsite(tabId) {
    chrome.tabs.onActiveChanged.addListener(function(tabId,selectInfo) {
      chrome.tabs.get(tabId, function (tab) {
          var url = tab.url;
          var timeSpent = 0;
          var ongoingTimer = 0;
          var dict = {"url":url, "timer": timeSpent}
          $('#resultslist').append("<li><span>"+dict.url+"</span></li>");
          // $scope.websiteList.push(url);
          // console.log(url);
          console.log(tab.title);

          console.log(dict);

          //Create timer
          //If url already exists in dict

            //Then, timeSpent val += ongoingTimer

          //Else,
            // start ongoingTimer and save to timeSpent

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
