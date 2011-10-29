var pagesVisited = 0;

function checkTab(tabId, tab) {
    if(tab.title==="Facebook") pagesVisited++;
    if(tab.title==="Facebook"&&pagesVisited==5){
    	alert('You\'ve been on facebook too long! Get back to work!');
	chrome.tabs.remove(tabId);
	pagesVisited=0;
    }
    
}

chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
	checkTab(tabId, tab);
});


