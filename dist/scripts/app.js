!function(e){"use strict";var o=e.querySelector("#app");o.baseUrl="/",""===window.location.port,o.displayInstalledToast=function(){Polymer.dom(e).querySelector("platinum-sw-cache").disabled||Polymer.dom(e).querySelector("#caching-complete").show()},o.addEventListener("dom-change",function(){console.log("Our app is ready to rock!")}),window.addEventListener("WebComponentsReady",function(){$(".parallax").parallax(),e.getElementById("mainContainer").addEventListener("scroll",function(e){o.debounce("scroll",function(){o.fire("iron-signal",{name:"scroll",data:e.target})},400)})}),window.addEventListener("paper-header-transform",function(o){var a=Polymer.dom(e).querySelector("#mainToolbar .app-name"),n=Polymer.dom(e).querySelector("#mainToolbar .middle-container"),t=Polymer.dom(e).querySelector("#mainToolbar .bottom-container"),r=o.detail,l=r.height-r.condensedHeight,c=Math.min(1,r.y/l),i=.5,d=l-r.y,s=l/(1-i),m=Math.max(i,d/s+i),p=1-c;Polymer.Base.transform("translate3d(0,"+100*c+"%,0)",n),Polymer.Base.transform("scale("+p+") translateZ(0)",t),Polymer.Base.transform("scale("+m+") translateZ(0)",a)}),o.scrollPageToTop=function(){o.$.headerPanelMain.scrollToTop(!0)},o.closeDrawer=function(){o.$.paperDrawerPanel.closeDrawer()},o.onSelect=function(e){var o=e.currentTarget.getAttribute("data-menu");console.log("   link",o),page("/"+o)}}(document);var app=document.querySelector("#app")||{},devhosts=["localhost","dev.music.freedom.tm"],config={production:{},development:{data:"data.json"}};app.config=config[!!~devhosts.indexOf(window.location.hostname)&&"development"||"production"];