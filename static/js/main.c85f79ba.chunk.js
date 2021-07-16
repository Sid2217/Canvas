(this["webpackJsonpreact-assign"]=this["webpackJsonpreact-assign"]||[]).push([[0],{35:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(24),s=n.n(r),i=(n(35),n(15)),d=n.n(i),o=n(25),u=n(13),j=n(26),l=n.n(j),x=n(11),b=n(3),h=n(9),m=n(8),O=n(0);var f=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],a=t[1],r=function(){var e=Object(o.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=51.5074&lon=0.1278&exclude=hourly,daily&appid=099f5c92834a01e7a6d2b2a5b817fcc7");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(O.jsx)(x.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsxs)(b.a.Body,{children:[Object(O.jsx)(b.a.Title,{className:"text-center",children:"Weather Details"}),Object(O.jsx)("br",{}),Object(O.jsxs)(h.a,{children:[Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(b.a.Text,{children:["Latitude :",n.lat?n.lat:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Longitude :",n.lon?n.lon:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Timezone :",n.timezone?n.timezone:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Pressure :",n.current?n.current.pressure:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Temperature :",n.current?n.current.temp:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Sun Rise :",n.current?n.current.sunrise:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Sun Set :",n.current?n.current.sunset:"Not yet Updated"]})]}),Object(O.jsxs)(m.a,{children:[Object(O.jsxs)(b.a.Text,{children:["Visibility :",n.current?n.current.visibility:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Clouds :",n.current?n.current.clouds:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Minimum Temperature :",n.daily?n.daily.temp.min:"Not yet Updated"]})," ",Object(O.jsxs)(b.a.Text,{children:["Maximum Temperature :",n.daily?n.daily.temp.max:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Humidity :",n.current?n.current.humidity:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Wind Speed :",n.current?n.current.wind_speed:"Not yet Updated"]}),Object(O.jsxs)(b.a.Text,{children:["Weather :",n.hour?n.hour.weather.main:"Not yet Updated"]})]})]})]})})})},p=n(27),y=n(10);var v=function(){var e=Object(c.useState)("black"),t=Object(u.a)(e,2),n=t[0],r=t[1],s=!1,i=0,d=0,o=0,j=0;a.a.useEffect((function(){var e=document.getElementById("myCanvas");e.addEventListener("mousemove",(function(e){l("move",e)}),!1),e.addEventListener("mousedown",(function(e){l("down",e)}),!1),e.addEventListener("mouseup",(function(e){l("up",e)}),!1),e.addEventListener("mouseout",(function(e){l("out",e)}),!1)}),[n]);var l=function(e,t){var c=document.getElementById("myCanvas"),a=c.getContext("2d");"down"===e&&(i=d,o=j,d=t.clientX-c.offsetLeft,j=t.clientY-c.offsetTop,s=!0,!0&&(a.beginPath(),a.fillStyle=n,a.fillRect(d,j,2,2),a.closePath(),!1)),"up"!==e&&"out"!==e||(s=!1),"move"===e&&s&&(i=d,o=j,d=t.clientX-c.offsetLeft,j=t.clientY-c.offsetTop,b(n))},b=function(e){var t=document.getElementById("myCanvas").getContext("2d");t.beginPath(),t.moveTo(i,o),t.lineTo(d,j),t.strokeStyle=e,t.lineWidth=1,t.stroke(),t.closePath()};return Object(O.jsxs)(x.a,{className:"border",children:[Object(O.jsx)("h5",{className:"text-center",children:"Canvas"}),Object(O.jsxs)(h.a,{children:[Object(O.jsx)(m.a,{children:Object(O.jsx)("canvas",{id:"myCanvas",width:"300px",height:"300px",className:"border  border-2"})}),Object(O.jsxs)(m.a,{children:[Object(O.jsx)("h5",{children:"Choose Color"}),Object(O.jsx)(y.a,{variant:"success",onClick:function(){return r("DarkGreen")}})," ",Object(O.jsx)(y.a,{variant:"danger",onClick:function(){return r("Crimson")}})," ",Object(O.jsx)(y.a,{variant:"primary",onClick:function(){return r("DodgerBlue")}})," ",Object(O.jsx)(y.a,{variant:"warning",onClick:function(){return r("DarkOrange")}})," ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(y.a,{variant:"success",onClick:function(){return function(){var e=document.getElementById("myCanvas").toDataURL("image/png",1),t=new p.a;t.addImage(e,"png",0,0),t.save("download.pdf")}()},children:"download"})," ",Object(O.jsx)(y.a,{variant:"warning",onClick:function(){return function(){var e=document.getElementById("myCanvas");e.getContext("2d").clearRect(0,0,e.width,e.height)}()},children:"Clear"})]})]})," "]})};var g=function(){return Object(O.jsxs)(x.a,{children:[Object(O.jsx)(h.a,{className:"justify-content-md-center",children:Object(O.jsx)(m.a,{children:Object(O.jsx)(f,{})})})," ",Object(O.jsx)("br",{}),Object(O.jsx)(h.a,{className:"justify-content-md-center",children:Object(O.jsx)(m.a,{children:Object(O.jsx)(v,{})})})," "]})},T=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,430)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(54);s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),T()}},[[55,1,3]]]);
//# sourceMappingURL=main.c85f79ba.chunk.js.map