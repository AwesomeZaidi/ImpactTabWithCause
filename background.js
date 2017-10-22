//This file should watch for a new tab to open, track timer, etc, storage
// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//   $scope.websiteList = [];
//
//   function addWebsite(tabId) {
var timers = {};
    chrome.tabs.onActiveChanged.addListener(function(tabId,selectInfo) {
      console.clear();
      Object.keys(timers).forEach(k => {
        console.log(`${k}: ${timers[k].totalTime}s`);

      });
      chrome.tabs.get(tabId, function (tab) {
          var url = new URI(tab.url);
          var timeSpent = 0;
          url = url.domain().replace(".","_");

          if (!timers[url]) timers[url] = {
            taskStart:new Date(),
            totalTime:0
          };
          console.log(`Other domains: ${Object.keys(timers).filter(k => k != url).length}`);
          Object.keys(timers)
            //.filter(k => k != url)
            .forEach(k=>{
              //enumerate "other" domains and cumulate time
              if (timers[k].taskStart) {
                let s = (new Date() - timers[k].taskStart) / 1000;
                timers[k].totalTime += s;
              }
              //start or kill timer
              timers[k].taskStart = (k == url ? new Date() : null);
            });


          $('#resultslist').append("<div><span>"+timers[url]+"</span></div>");
          // $scope.websiteList.push(url);
          // console.log(url);

          //Program Trace
          //Create timer
          //If url already exists in dict
          //This function will run for each timer
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
