(this.webpackJsonpfuncamp=this.webpackJsonpfuncamp||[]).push([[0],[,,,,,,,function(e,n,t){e.exports={transitionDuration:"2000"}},function(e,n,t){e.exports=t(16)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),c=t.n(o),u=t(1),l=Object(u.c)("/funcamp"),m=Object(u.b)({countdown:l.extend("/"),home:l.extend("/home")}),s=m.RouteProvider,i=m.useRoute,d=m.routes,p=t(2),E=t.n(p),h=t(3),v=t(7),f=t.n(v),w=t(4),b=Object(u.a)([d.home,d.countdown]),x=[{eventName:"Orl\xe9ans",endtimeYear:2020,endtimeMonth:11,endtimeDate:24,endtimeHours:9},{eventName:"Nantes",endtimeYear:2020,endtimeMonth:12,endtimeDate:15,endtimeHours:9}],N=function(e){var n=e.route,t=Object(w.a)(function(){var e=Object(h.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,f.a.transitionDuration)}));case 2:if(!n.aborted){e.next=4;break}return e.abrupt("return");case 4:d.home().push();case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[],{executeOnMount:!1,executeOnUpdate:!1}),a=t.execute,o=t.loading;return r.a.createElement("div",{className:"\n        CountDownAndHomeCastle \n        ".concat("home"===n.name||o?"homepageState":"","\n      ")},r.a.createElement("div",{className:"castle"},"countdown"===n.name&&r.a.createElement(k,null),"home"===n.name&&r.a.createElement("p",null,"Home placeholder !")),"countdown"===n.name&&r.a.createElement("div",{className:"countdownSidePanel"},r.a.createElement("div",null,r.a.createElement("h1",null,"Le Funcamp R, de la nostalgie, du fun et du R!"),r.a.createElement("h2",null,"...saurez-vous percer les myst\xe8res du royaume de Statis?"),r.a.createElement("div",null,r.a.createElement("button",{onClick:a},"D\xe9couvrir")))))},k=function(){var e=Object(w.a)(function(){var e=Object(h.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($&&$(document).countdown100){e.next=8;break}return console.log("tick"),e.next=4,new Promise((function(e){return setTimeout(e,100)}));case 4:if(!n.aborted){e.next=6;break}return e.abrupt("return");case 6:e.next=0;break;case 8:x.forEach((function(e){var n=e.eventName,t=e.endtimeYear,a=e.endtimeDate,r=e.endtimeMonth,o=e.endtimeHours;return window.$(".".concat(n)).countdown100({endtimeYear:t,endtimeMonth:r,endtimeDate:a,endtimeHours:o,endtimeMinutes:0,endtimeSeconds:0,timeZone:"Europe/Paris"})}));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[],{executeOnMount:!0,executeOnUpdate:!0}).loading;return console.log("display",e),r.a.createElement("div",{className:"countdown"},r.a.createElement("div",null," ",r.a.createElement("h1",null,"Prochain Bootcamps"),r.a.createElement("div",null,x.map((function(e){var n=e.eventName;return r.a.createElement("div",{className:"".concat(n," js-tilt"),key:n},r.a.createElement("h3",null,n),r.a.createElement("div",null,r.a.createElement("span",{className:"days"}),r.a.createElement("span",null," Jours")),r.a.createElement("div",null,r.a.createElement("span",{className:"hours"}),r.a.createElement("span",null," Heurs")),r.a.createElement("div",null,r.a.createElement("span",{className:"minutes"}),r.a.createElement("span",null," Minutes")),r.a.createElement("div",null,r.a.createElement("span",{className:"seconds"}),r.a.createElement("span",null," Secondes")))})))))},g=(t(14),function(){return r.a.createElement("h1",{className:"Home"},"Home content")});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(15);var O=function(){var e=i();return r.a.createElement(r.a.Fragment,null,b.has(e)&&r.a.createElement(N,{route:e}),"home"===e.name&&r.a.createElement(g,{route:e}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null,r.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.fc0cee0f.chunk.js.map