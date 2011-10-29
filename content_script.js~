
function removeTab(tabId, tab) {
    if(tab.title==="Facebook"){
    	alert('You\'ve been on facebook too long! Get back to work!');
	chrome.tabs.remove(tabId);
    }
    
}

chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
	removeTab(tabId, tab);
});


