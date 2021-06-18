(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{63:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=(a(63),a(34)),s=a(10),d=a(94),l=a(98),u=a(95),p=a(44),b=a(97),h=a(91),j=a(4),m=a(3),f=Object(h.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#10B981",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#10B981"}}});var x=function(e){var t=f();return Object(m.jsx)(b.a,Object(p.a)({className:t.root,disableRipple:!0,color:"default",checkedIcon:Object(m.jsx)("span",{className:Object(j.a)(t.icon,t.checkedIcon)}),icon:Object(m.jsx)("span",{className:t.icon})},e))},g=function(e){return Object(m.jsx)(d.a,{container:!0,direction:"row",justify:"space-evenly",children:Object(m.jsx)(d.a,{item:!0,children:Object(m.jsxs)(l.a,{row:!0,name:"temperature",value:e.value?e.value:"Fahrenheit",onChange:e.handleChange,children:[Object(m.jsx)(u.a,{value:"Celcius",control:Object(m.jsx)(x,{}),label:"Celcius"}),Object(m.jsx)(u.a,{value:"Fahrenheit",control:Object(m.jsx)(x,{}),label:"Fahrenheit"})]})})})},O=a(96),v=a(99),y=a(74),w=function(e,t){for(var a=0,n=0;n<e.length;n++)"Fahrenheit"===t?a+=e[n].main.tempF:"Celcius"===t&&(a+=e[n].main.tempC);return Math.round(a/e.length)},k=function(e){var t=e[0].dayId.split("-")[0],a=e[0].dayId.split("-")[1];return e[0].dayId.split("-")[2]+". "+a+". "+t},C=Object(h.a)((function(e){var t,a;return{button:{"&:focus":{boxShadow:"0 0 0 0.1rem #10B981"}},card:Object(s.a)({textAlign:"left"},e.breakpoints.down("sm"),{padding:"10px"}),date:(t={fontSize:16,padding:"10px"},Object(s.a)(t,e.breakpoints.down("sm"),{fontSize:10,padding:"5px"}),Object(s.a)(t,e.breakpoints.down("xs"),{fontSize:8,padding:"2px"}),t),temp:(a={fontSize:18,color:"#10B981",fontWeight:"bold",padding:"1rem"},Object(s.a)(a,e.breakpoints.down("sm"),{fontSize:12,padding:"5px"}),Object(s.a)(a,e.breakpoints.down("xs"),{fontSize:10,padding:"2px"}),a)}})),I=function(e){var t,a=C(),n=e.dayData,r=k(n),i=w(n,e.tempType);"Fahrenheit"===e.tempType?t="F":"Celcius"===e.tempType&&(t="\xb0C");return Object(m.jsx)(O.a,{onClick:function(){var t=n[0].dayId;e.handler(t)},disableRipple:!0,className:a.button,children:Object(m.jsxs)(v.a,{className:a.card,children:[Object(m.jsxs)(y.a,{className:a.date,children:["Date: ",r]}),Object(m.jsxs)(y.a,{className:a.temp,children:["Temp: ",i," ",t]})]})})},S=a(93),F=a(50),N=a.n(F),T=a(49),z=a.n(T),B=Object(h.a)((function(e){return{button:{backgroundColor:"#A7F3D0"}}})),L=function(e){var t=B();return Object(m.jsx)(S.a,{className:t.button,onClick:e.handler,disabled:e.visible,children:e.left?Object(m.jsx)(z.a,{}):Object(m.jsx)(N.a,{})})},A=a(51),D=a.n(A),W=Object(h.a)((function(e){return{root:{padding:"4px",paddingTop:"60px"},chart:Object(s.a)({width:"600px"},e.breakpoints.down("sm"),{width:"100%"}),title:{fontSize:18,fontWeight:"bold"},pos:{marginBottom:12}}})),E=function(e){var t=W(),a={chart:{id:"basic-bar"},xaxis:{categories:e.data.measurementTimes,labels:{style:{colors:"#9CA3AF",fontSize:"14px"}}},yaxis:{labels:{style:{colors:"#9CA3AF",fontSize:"14px"}}},dataLabels:{enabled:!1,offsetY:20,style:{fontSize:"16px",colors:["#6EE7B7"]}},colors:["#10B981"],title:{text:e.data.title,align:"center"}},n=[{name:"temperature",data:e.data.measuredTemperatures}];return Object(m.jsx)("div",{className:t.root,children:Object(m.jsx)(D.a,{className:t.chart,type:"bar",height:"300px",options:a,series:n})})},M=a(25),_=a(39),R=a.n(_),J=a(52),P=a(33);function $(e){return parseFloat((9*(e-273.15)/5+32).toFixed(2))}function q(e){return parseFloat((e-273.15).toFixed(2))}var G=Object(P.b)({name:"weather",initialState:{isLoading:!0,data:{},dayData:{}},reducers:{dataLoading:function(e,t){e.isLoading=!0},dataLoaded:function(e,t){e.data=t.payload,e.isLoading=!1},addDayId:function(e,t){var a=t.payload,n=a.id,r=a.dayId;e.data.list[n].dayId=r}}}),V=G.actions,Y=V.dataLoading,H=V.dataLoaded,K=(V.addDayId,G.reducer);function Q(e){var t=e.city.name,a=e.list,n=a[0].dt_txt.split(" ")[0],r=a[0].dt_txt.split(" ")[1];a[0].dayId=n,a[0].time=r,a[0].city=t,a[0].main.tempF=$(a[0].main.temp),a[0].main.tempC=q(a[0].main.temp);for(var i=1;i<a.length;i++){var o=a[i].dt_txt.split(" ")[0],c=a[i].dt_txt.split(" ")[1];a[i].dayId=o,a[i].time=c,a[i].main.tempF=$(a[i].main.temp),a[i].main.tempC=q(a[i].main.temp)}return a}var U=function(e){return e.weather.data},X=function(e){for(var t=[],a=[e[0]],n=1;n<e.length;n++)e[n].dayId===e[n-1].dayId?a.push(e[n]):(t.push(a),a=[e[n]]);return t.push(a),a=[],t},Z=(a(71),Object(h.a)((function(e){return{grid:Object(s.a)({padding:"2px"},e.breakpoints.down("sm"),{justifyContent:"center",alignItems:"center",maxWidth:400}),loading:{fontSize:"32px",fontWeight:"bold",color:"#10B981"},arrows:{paddingTop:"40px"},cards:{paddingTop:"40px"},title:{padding:"40px",fontWeight:"bold",fontSize:"40px",color:"#10B981"}}})));var ee=function(){var e=Z(),t=Object(n.useState)("Fahrenheit"),a=Object(c.a)(t,2),r=a[0],i=a[1],o=Object(n.useState)(0),s=Object(c.a)(o,2),l=s[0],u=s[1],p=Object(n.useState)(""),b=Object(c.a)(p,2),h=b[0],j=b[1],f=Object(M.b)(U),x=!1,O=!0;if(Object(M.b)((function(e){return e.weather.isLoading})))return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)("div",{className:e.loading,children:"Loading"})});var v=X(f),y=v.slice(l,l+3),w=f[0].city,C=function(e){for(var t=[],a=[],n={title:k(e),measurementTimes:t,measuredTemperatures:a},i=0;i<e.length;i++)t.push(e[i].time),"Fahrenheit"===r?a.push(e[i].main.tempF):"Celcius"===r&&a.push(e[i].main.tempC);return n},S=function(e){j(e)};return l<=0?(O=!0,x=!1):l>=v.length-3?(O=!1,x=!0):(O=!1,x=!1),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:e.title,children:w}),Object(m.jsx)(g,{value:r,handleChange:function(e){i(e.target.value)}}),Object(m.jsxs)(d.a,{container:!0,direction:"row",justify:"space-around",className:e.arrows,children:[Object(m.jsx)(L,{left:!0,handler:function(){l>0&&u(l-1),j("")},visible:O}),Object(m.jsx)(L,{left:!1,handler:function(){l<v.length-3&&u(l+1),j("")},visible:x})]}),Object(m.jsx)(d.a,{container:!0,direction:"row",justify:"space-evenly",className:e.cards,children:y.map((function(t){return Object(m.jsx)(d.a,{item:!0,className:e.grid,children:Object(m.jsx)(I,{dayData:t,tempType:r,handler:S})},t[0].dayId)}))}),y.map((function(e){return e[0].dayId===h&&Object(m.jsx)(E,{data:C(e)},e[0].dayId)}))]})},te=Object(P.a)({reducer:{weather:K}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));te.dispatch(function(){var e=Object(J.a)(R.a.mark((function e(t){var a,n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Y()),e.next=3,fetch("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40",{method:"GET"});case 3:return n=e.sent,e.next=6,n.json();case 6:if(a=e.sent,!n.ok){e.next=11;break}t(H(Q(a))),e.next=12;break;case 11:throw new Error(n.statusText);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(M.a,{store:te,children:Object(m.jsx)(ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.8c40880e.chunk.js.map