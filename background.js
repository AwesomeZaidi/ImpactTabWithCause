//This file should watch for a new tab to open
chrome.tabs.onActiveChanged.addListener(function(tabId,selectInfo) {
  chrome.tabs.get(tabId, function (tab) {
      var url = tab.url;
      console.log(url);
  });

  //If timer is already running, end count.

  //Start new timer
    //If URL already exists in Storage

      //Add timer value to existing value

    //Else

      //Create new val in Storage
});

// function callback(data) {
//   console.log(data);
//   console.log(data.url);
// }
