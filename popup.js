(function() {
  chrome.browserAction.onClicked.addListener(function(tab) {
    var title = tab.title;
    console.log(title);
  });
})
