(this["webpackJsonpaurora-test"]=this["webpackJsonpaurora-test"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),i=a(4),n=a.n(i),r=(a(15),a(5)),o=a(3),l=a(2),d="LOGIN",j="TOGGLE_SEARCH",u="TOGGLE_NAV_MENU",h="TOGGLE_HEADER",b="TOGGLE_FOOTER",m="SET_FOOTER_ID",v={logged:!1,username:"admin",showSearch:!1,showNavMenu:!1,activateHeader:!1,activateFooter:!1,footerId:null},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case d:return Object(l.a)(Object(l.a)({},e),{},{logged:!0});case j:return Object(l.a)(Object(l.a)({},e),{},{showSearch:!e.showSearch});case u:return Object(l.a)(Object(l.a)({},e),{},{showNavMenu:!e.showNavMenu});case h:return Object(l.a)(Object(l.a)({},e),{},{activateHeader:!e.activateHeader});case b:return Object(l.a)(Object(l.a)({},e),{},{activateFooter:!e.activateFooter});case m:return Object(l.a)(Object(l.a)({},e),{},{footerId:c});default:return Object(l.a)({},e)}},g=a.p+"static/media/pin-point.87acbc3e.svg",x=a.p+"static/media/01.f1df0fee.png",N=a.p+"static/media/02.66268359.png",f=a.p+"static/media/insta.5f8092d0.svg",p=a.p+"static/media/twitter.3831b985.svg",w=a.p+"static/media/snapchat.668e21af.svg",k=a.p+"static/media/facebook.aa0695f0.svg",y=a.p+"static/media/youtube.906f5dc1.svg",C=(a(22),a(0)),S=function(){return Object(C.jsxs)("div",{className:"top-bar",children:[Object(C.jsx)("h4",{className:"top-bar-title",children:"We deliver Worldwide"}),Object(C.jsxs)("div",{className:"location",children:[Object(C.jsx)("img",{className:"pin-point",src:g,alt:"pin"}),Object(C.jsx)("p",{className:"location-text",children:"Our stores"})]})]})},F=(a(24),function(e){var t=e.active;e.width;return Object(C.jsx)("div",{className:"search ".concat(t?"active":""),children:Object(C.jsx)("input",{className:"search-input",type:"text",placeholder:"What are you looking for?"})})}),E=(a(25),["what's new","women","accessories","kids","beauty","outlet","stories"]),H=function(e){var t=e.width,a=e.active,c=e.onClick,s=Object(C.jsx)("nav",{className:"main-nav",children:E.map((function(e,t){return Object(C.jsx)("a",{className:"nav-link",href:"/aurora-test",children:e},t)}))}),i=Object(C.jsxs)("div",{className:"nav-container ".concat(a?"active":""),children:[Object(C.jsxs)("nav",{className:"main-nav ".concat(a?"active":""),children:[Object(C.jsx)("h3",{className:"menu-logo",children:"Aurora"}),E.map((function(e,t){return Object(C.jsxs)("div",{className:"nav-section",children:[Object(C.jsx)("a",{className:"nav-link",href:"/aurora-test",children:e},t),"stories"!==e?Object(C.jsx)("div",{className:"chevron"}):null]},t)})),Object(C.jsx)("div",{className:"sign-in",children:"Sign in | Register"})]}),Object(C.jsx)("div",{className:"underlay ".concat(a?"active":""),onClick:function(){return c()}})]});return t>360?s:i},A=(a(26),Object(o.b)((function(e){return{logged:e.logged,username:e.username,showSearch:e.showSearch,showNavMenu:e.showNavMenu,activateHeader:e.activateHeader}}),(function(e){return{login:function(){e({type:d})},toggleSearch:function(){e({type:j})},toggleNavMenu:function(){e({type:u})},toggleHeader:function(){e({type:h})}}}))((function(e){var t=e.login,a=e.logged,c=e.username,s=e.showSearch,i=e.showNavMenu,n=e.activateHeader,r=e.toggleSearch,o=e.toggleNavMenu,l=e.toggleHeader,d=e.width,j=Object(C.jsxs)("div",{className:"header",children:[Object(C.jsx)(S,{}),Object(C.jsx)("div",{className:"header-menu",children:Object(C.jsxs)("div",{className:"header-menu-active",children:[Object(C.jsx)("h2",{className:"logo",children:"Aurora"}),Object(C.jsxs)("div",{className:"search-nav-container",children:[Object(C.jsx)(F,{width:d}),Object(C.jsx)(H,{width:d})]}),Object(C.jsxs)("div",{className:"auth-cart-container",children:[Object(C.jsx)("button",{className:"auth-btn",href:"/aurora-test",onClick:function(){return t()},children:a?"Hi, ".concat(c,"!"):"Sign In | Register"}),Object(C.jsx)("div",{className:"cart"}),a?Object(C.jsx)("div",{className:"goods",children:99}):null]})]})})]}),u=Object(C.jsxs)("div",{className:"header",children:[Object(C.jsx)("div",{className:"header-menu ".concat(n?"active":""),children:Object(C.jsxs)("div",{className:"header-menu-active",children:[Object(C.jsx)("div",{className:"search-nav-container",children:Object(C.jsxs)("div",{className:"icons",children:[Object(C.jsxs)("div",{className:"menu-icon",onClick:function(){return o()},children:[Object(C.jsx)("div",{className:"line"}),Object(C.jsx)("div",{className:"line"}),Object(C.jsx)("div",{className:"line"})]}),Object(C.jsx)("div",{className:"search-icon",onClick:function(){r(),l()}})]})}),Object(C.jsx)("h2",{className:"logo",children:"Aurora"}),Object(C.jsxs)("div",{className:"auth-cart-container",onClick:function(){return t()},children:[Object(C.jsx)("div",{className:"cart"}),a?Object(C.jsx)("div",{className:"goods",children:99}):null]})]})}),Object(C.jsx)(H,{width:d,active:i,onClick:o}),Object(C.jsx)(F,{width:d,active:s})]});return d>360?j:u}))),G=(a(27),[{id:"about",title:"About Us",links:["Who we are","Our stores","Customer Reviews"]},{id:"categories",title:"Categories",links:["Women fashion","Accessories","Kids"]},{id:"help",title:"Help",links:["Customer service","Size guide","Contact us"]},{id:"payments",title:"Payments & Delivery",links:["Purchase terms","Guarantee"]},{id:"social",title:"Social",links:["insta","twitter","snapchat","facebook","youtube"],imgs:[f,p,w,k,y]}]),I=Object(o.b)((function(e){return{activateFooter:e.activateFooter,footerId:e.footerId}}),(function(e){return{toggleFooter:function(t){e({type:b}),e({type:m,payload:t})}}}))((function(e){var t=e.toggleFooter,a=e.activateFooter,c=e.footerId;e.width;return Object(C.jsxs)("div",{className:"footer",children:[Object(C.jsx)("div",{className:"register-container",children:Object(C.jsxs)("div",{className:"register-content",children:[Object(C.jsx)("p",{className:"register-text",children:"New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know."}),Object(C.jsxs)("div",{className:"register",children:[Object(C.jsx)("input",{className:"register-email",type:"email",placeholder:"Your email address"}),Object(C.jsx)("button",{className:"register-btn",children:"register"})]})]})}),Object(C.jsx)("div",{className:"menu-container",children:G.map((function(e,s){return Object(C.jsxs)("div",{className:"menu-section ".concat(a&&c===e.id?"active":""),id:e.id,onClick:function(){t(e.id)},children:[Object(C.jsxs)("div",{className:"section-inner",children:[Object(C.jsx)("p",{className:"section-title",children:e.title},s),Object(C.jsx)("div",{className:"chevron"})]}),Object(C.jsx)("nav",{className:"links",id:e.id,children:"social"===e.id?e.imgs.map((function(t,a){return Object(C.jsx)("a",{className:"link",href:"/aurora-test",id:e.links[a],style:{marginBottom:"0"},children:Object(C.jsx)("img",{src:t,alt:e.links[a]},a)},a)})):e.links.map((function(e,t){return Object(C.jsx)("a",{className:"link",href:"/aurora-test",children:e},t)}))},e.id)]},s)}))}),Object(C.jsx)("p",{className:"copyright",children:"\xa9 Copyright, Aurora 2020. All Rights reserved."})]})})),M=(a(28),Object(r.b)(O));var T=function(){var e=window.innerWidth;return Object(C.jsx)(o.a,{store:M,children:Object(C.jsxs)("div",{className:"App",children:[Object(C.jsxs)("div",{className:"with-image",children:[Object(C.jsx)("img",{className:"banner",src:x,alt:"banner1"}),Object(C.jsx)("img",{className:"banner",src:N,alt:"banner2"}),Object(C.jsx)("img",{className:"banner",src:x,alt:"banner1"})]}),Object(C.jsx)(A,{width:e}),e>360?Object(C.jsx)("h1",{className:"main-title",children:"Hello! Welcome to Aurora"}):null,Object(C.jsx)(I,{width:e})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,30)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),i(e),n(e)}))};n.a.render(Object(C.jsx)(s.a.StrictMode,{children:Object(C.jsx)(T,{})}),document.getElementById("root")),R()}],[[29,1,2]]]);
//# sourceMappingURL=main.c1d4ad8a.chunk.js.map