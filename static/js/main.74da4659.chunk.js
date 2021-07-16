(this["webpackJsonpreact-assign"]=this["webpackJsonpreact-assign"]||[]).push([[0],{35:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(24),s=n.n(r),i=(n(35),n(15)),o=n.n(i),d=n(25),j=n(13),u=n(26),l=n.n(u),x=n(11),b=n(5),h=n(9),O=n(8),f=n(0);var m=function(){var e=Object(c.useState)({}),t=Object(j.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("http://api.weatherstack.com/current?access_key=708a363c0f949c21910cf909044d781c&query=London,United Kingdom");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(f.jsx)(x.a,{children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(b.a.Body,{children:[Object(f.jsx)(b.a.Title,{className:"text-center",children:"Weather Details"}),Object(f.jsx)("br",{}),Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(O.a,{children:[Object(f.jsxs)(b.a.Text,{children:["City : ",n.location?n.location.name:""]}),Object(f.jsxs)(b.a.Text,{children:["Country :",n.location?n.location.country:""]}),Object(f.jsxs)(b.a.Text,{children:["Region :",n.location?n.location.region:""]}),Object(f.jsxs)(b.a.Text,{children:["Latitude :",n.location?n.location.lat:""]}),Object(f.jsxs)(b.a.Text,{children:["Longitude :",n.location?n.location.lon:""]}),Object(f.jsxs)(b.a.Text,{children:["Timezone :",n.location?n.location.timezone_id:""]})]}),Object(f.jsxs)(O.a,{children:[Object(f.jsxs)(b.a.Text,{children:["Pressure :",n.current?n.current.pressure:""]}),Object(f.jsxs)(b.a.Text,{children:["Temperature :",n.current?n.current.temperature:""]}),Object(f.jsxs)(b.a.Text,{children:["Humidity :",n.current?n.current.humidity:""]}),Object(f.jsxs)(b.a.Text,{children:["Wind Speed :",n.current?n.current.wind_speed:""]}),Object(f.jsxs)(b.a.Text,{children:["Weather :",n.current?n.current.weather_descriptions:""]})]})]})]})})})},v=n(27),g=n(10);var p=function(){var e=Object(c.useState)("black"),t=Object(j.a)(e,2),n=t[0],r=t[1],s=!1,i=0,o=0,d=0,u=0;a.a.useEffect((function(){var e=document.getElementById("myCanvas");e.addEventListener("mousemove",(function(e){l("move",e)}),!1),e.addEventListener("mousedown",(function(e){l("down",e)}),!1),e.addEventListener("mouseup",(function(e){l("up",e)}),!1),e.addEventListener("mouseout",(function(e){l("out",e)}),!1)}),[n]);var l=function(e,t){var c=document.getElementById("myCanvas"),a=c.getContext("2d");"down"===e&&(i=o,d=u,o=t.clientX-c.offsetLeft,u=t.clientY-c.offsetTop,s=!0,!0&&(a.beginPath(),a.fillStyle=n,a.fillRect(o,u,2,2),a.closePath(),!1)),"up"!==e&&"out"!==e||(s=!1),"move"===e&&s&&(i=o,d=u,o=t.clientX-c.offsetLeft,u=t.clientY-c.offsetTop,b(n))},b=function(e){var t=document.getElementById("myCanvas").getContext("2d");t.beginPath(),t.moveTo(i,d),t.lineTo(o,u),t.strokeStyle=e,t.lineWidth=1,t.stroke(),t.closePath()};return Object(f.jsxs)(x.a,{className:"border",children:[Object(f.jsx)("h5",{className:"text-center",children:"Canvas"}),Object(f.jsxs)(h.a,{children:[Object(f.jsx)(O.a,{children:Object(f.jsx)("canvas",{id:"myCanvas",width:"300px",height:"300px",className:"border  border-2"})}),Object(f.jsxs)(O.a,{children:[Object(f.jsx)("h5",{children:"Choose Color"}),Object(f.jsx)(g.a,{variant:"success",onClick:function(){return r("DarkGreen")}})," ",Object(f.jsx)(g.a,{variant:"danger",onClick:function(){return r("Crimson")}})," ",Object(f.jsx)(g.a,{variant:"primary",onClick:function(){return r("DodgerBlue")}})," ",Object(f.jsx)(g.a,{variant:"warning",onClick:function(){return r("DarkOrange")}})," ",Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)(g.a,{variant:"success",onClick:function(){return function(){var e=document.getElementById("myCanvas").toDataURL("image/png",1),t=new v.a;t.addImage(e,"png",0,0),t.save("download.pdf")}()},children:"download"})," ",Object(f.jsx)(g.a,{variant:"warning",onClick:function(){return function(){var e=document.getElementById("myCanvas");e.getContext("2d").clearRect(0,0,e.width,e.height)}()},children:"Clear"})]})]})," "]})};var y=function(){return Object(f.jsxs)(x.a,{children:[Object(f.jsx)(h.a,{className:"justify-content-md-center",children:Object(f.jsx)(O.a,{children:Object(f.jsx)(m,{})})})," ",Object(f.jsx)("br",{}),Object(f.jsx)(h.a,{className:"justify-content-md-center",children:Object(f.jsx)(O.a,{children:Object(f.jsx)(p,{})})})," "]})},C=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,430)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(54);s.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),C()}},[[55,1,3]]]);
//# sourceMappingURL=main.74da4659.chunk.js.map