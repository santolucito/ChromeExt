var patt = new RegExp("facebook.com");
var pagesVisited = 0;
function checkTab(tabId, tab) {
    
    if(patt.test(tab.url)){
	 pagesVisited++;
    }
    if(patt.test(tab.url)&&pagesVisited>=7){
    	chrome.tabs.remove(tabId);
	alert("You visited "+pagesVisited+" pages on FB! \n Get back to work!"); 
	pagesVisited=0;
    }
    
}

chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
    if (info.status == "complete"){
	checkTab(tabId, tab);
    }
});


