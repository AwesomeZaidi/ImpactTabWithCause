chrome.tabs.create({url: 'http://google.com'}, callback)

function callback(data) {
  console.log(data);
  console.log("boo boo baa URL DATA");
  console.log(data.url);

}
chrome.tabs.onUpdated.query({currentWindow: true, active: true}, function(tabs){
    console.log(tabs[0].url);
    var title = tab.title;
    console.log(title);
});
