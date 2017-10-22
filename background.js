//This file should watch for a new tab to open, track timer, etc, storage
// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope) {
//   $scope.websiteList = [];
//
//   function addWebsite(tabId) {
var timers = {};
    chrome.tabs.onUpdated.addListener(function() {
      console.log("testingonUpdate");
    })
    chrome.tabs.onActiveChanged.addListener(function(tabId,selectInfo) {
      console.clear();
      Object.keys(timers).forEach(k => {
        console.log(`${k}: ${timers[k].totalTime}s`);

      });
      chrome.tabs.get(tabId, function (tab) {
          $('#resultslist').html('');
          var url = new URI(tab.url);
          var timeSpent = 0;
          url = url.domain().replace(".","_");

          if (!timers[url])
            timers[url] = {
              taskStart:new Date(),
              totalTime:0
            };
          console.log(`Other domains: ${Object.keys(timers).filter(k => k != url).length}`);
          // $('#resultslist').append("<li><span>"+totalTime+"</span></li>");
          let allTimers = Object.keys(timers).map(k => {let result = timers[k]; result.key = k; return result;});
          let otherTimers = allTimers.filter(t => t.key != url);
          let thisTimer = allTimers.find(t => t.key == url);
          let runningTimers = allTimers.filter(t => t.taskStart)

          allTimers.forEach(t => {
            $('#resultslist').append(`<li>${t.key}: ${t.totalTime}</li>`);
          });

          runningTimers.forEach(t => {
            let s = (new Date() - t.taskStart) / 1000
            t.totalTime += Math.round(s);
          });

          otherTimers.forEach(t => t.taskStart = null);

          thisTimer.taskStart = new Date();


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
