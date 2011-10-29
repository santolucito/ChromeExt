var patt = new RegExp("facebook.com");
var pagesVisited = 0;
function checkTab(tabId, tab) {
    
    if(patt.test(tab.url)&&pagesVisited>=3){
    	chrome.tabs.remove(tabId);
	window.open("popup.html", "FB",
	"status = 1, height = 300, width = 400, location = no, menubar = no, titlebar=no"); 
	pagesVisited=0;
    }
        if(patt.test(tab.url)){
	 pagesVisited++;
    }
}

chrome.tabs.onUpdated.addListener(function(tabId, info, tab){
    if (tab.url !== undefined && info.status == "complete"){
	checkTab(tabId, tab);
    }
});


