/**
 * Create a timer for the active tab.
 *
 */
function startTimer() {
  // Create a new timer for the url the user is on
  var myTimer = new chrome.Interval();
  document.getElementById('status').textContent = "Awesome";
}

chrome.browserAction.onClicked.addListener(function(tab) {

})

chrome.runtime.onInstalled.addListener(function(details){

})

chrome.runtime.onStartup.addListener(function(details){

})

window.onload = function() {
  var bgPage = chrome.extension.getBackgroundPage();
  /*function myTimer() {
    var d = new Date();
    document.getElementById('status').innerHTML = d.toLocaleTimeString();
  }
  myTimer();*/
  //bgPage.timedText();
  //bgPage.startWatch();
  console.log("bgPage.startTime()");
  if (bgPage.count == 0) {
    bgPage.startWatch();
    bgPage.count++;
  }
  var resetMe;
  function loopy() {
    document.getElementById('status').innerHTML = chrome.extension.getBackgroundPage().totalTime;
    resetMe = setTimeout(loopy, 1000);
  }

  loopy();


}