// ==UserScript==
// @name          Hide Chat
// @namespace     http://userstyles.org
// @description	  Hides Gmail's Chat box in the sidebar.
// @author        Diego Barros
// @homepage      http://userstyles.org/styles/7897
// @include       http://mail.google.com/*
// @include       https://mail.google.com/*

// @tab Sidebar
// ==/UserScript==
(function() {
var css = "@namespace url(http://www.w3.org/1999/xhtml); .nH.s { display: none !important }";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();
