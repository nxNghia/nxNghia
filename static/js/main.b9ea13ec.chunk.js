(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{63:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r,a,i,o,l,c,s,g,d,u,h,m,b,p,j,f=n(0),x=n(12),O=n.n(x),y=(n(63),n(14)),w=n(97),v=n(90),F=n(13),E=n(91),C=n(93),S=n(94),k=n(95),_=n(96),N=n(98),B=n(50),T=n.n(B),I={index:[{name:"Home"},{name:"Skills"},{name:"Projects"},{name:"Education"}],pageTitle:".Nah"},P=Object(v.a)((function(){return{root:{background:"inherit",boxShadow:"none",height:100,paddingTop:20},pageTitle:{color:"#000",flexGrow:1,fontSize:"50px",cursor:"pointer",fontWeight:"bold"},pageIndex:{color:"#000",padding:15,width:100},pageIndex_active:{color:"#000",padding:15,width:100,background:"rgba(200, 200, 200, 0.5)"},pageIndex_smaller:{color:"#000",padding:15,width:"100%"},pageIndex_active_smaller:{color:"#000",padding:15,width:"100%",background:"rgba(200, 200, 200, 0.5)"},indexContainer:{flexGrow:1,display:"flex",justifyContent:"space-around"}}})),L=n(2),R=function(e){var t=e.pageIndex,n=e.setPageIndex,r=P(),a=Object(F.useMediaQuery)({maxWidth:1098}),i=Object(f.useState)(!1),o=Object(y.a)(i,2),l=o[0],c=o[1],s=function(e){n(e),c(!1)};return Object(L.jsxs)(E.a,{className:r.root,position:"static",children:[Object(L.jsxs)(C.a,{children:[Object(L.jsx)(S.a,{variant:"h5",className:r.pageTitle,children:I.pageTitle}),a?Object(L.jsx)(_.a,{onClick:function(){return c(!0)},children:Object(L.jsx)(T.a,{})}):Object(L.jsx)(w.a,{className:r.indexContainer,children:I.index.map((function(e,n){return Object(L.jsx)(k.a,{className:n===t?r.pageIndex_active:r.pageIndex,onClick:function(){return s(n)},children:e.name},n)}))})]}),a&&Object(L.jsx)(N.a,{anchor:"top",open:l,onClose:function(){return c(!1)},children:I.index.map((function(e,n){return Object(L.jsx)(k.a,{className:n===t?r.pageIndex_active_smaller:r.pageIndex_smaller,onClick:function(){return s(n)},children:e.name},n)}))})]})},A=(n(28),n.p+"static/media/logokimlien.769d78ce.jpg"),M=[{title:"Hanoi University of Science and Technology",major:"Application Specialist, School of Information and Technology",time:"2018 - Present",detail:["Studied Data structure, Algorithms, Database, Networking, ect.","Participated in volunteer team of SoICT."],titleColor:"#FF5959",color:["#FFFFFF","#000000"],imageURL:n.p+"static/media/Logo_Hust.1696c507.png",url:"https://en.wikipedia.org/wiki/Hanoi_University_of_Science_and_Technology"},{title:"Kim Lien High school",time:"2014 - 2017",detail:["Focus on Mathematic, Physic, Chemistry and English.","Enjoy my student life <3"],titleColor:"#FFF8A8",color:["#3B5998","#3B5998"],imageURL:A,url:"http://thptkimlien-hanoi.edu.vn/"}],D=Object(v.a)((function(){return{root:{display:"flex",marginBottom:70,cursor:"pointer"},img:{width:250,marginRight:50},info:{background:"#FFFFFF",width:"100%",boxSizing:"border-box",boxShadow:"1px 5px 5px",borderRadius:15},upper_info:{position:"relative",borderRadius:"15px 15px 0px 0px",boxSizing:"border-box",padding:20,"& > h5":{fontWeight:"bold"}},lower_info:{fontSize:"large",paddingTop:15,boxSizing:"border-box","& li":{marginBottom:15}},time:{position:"absolute",top:20,right:40}}})),z=function(e){var t=e.item,n=e.turn,r=void 0===n?0:n,a=D(),i=Object(F.useMediaQuery)({maxWidth:1098}),o=Object(f.useState)(!1),l=Object(y.a)(o,2),c=l[0],s=l[1];Object(f.useEffect)((function(){setTimeout((function(){return s(!0)}),1e3*r)}),[]);return Object(L.jsx)(L.Fragment,{children:c?Object(L.jsxs)(w.a,{"data-aos":"fade-right",className:a.root,onClick:function(){return window.open(t.url,"_blank")},children:[!i&&Object(L.jsx)(w.a,{className:a.img,children:Object(L.jsx)("img",{height:200,src:t.imageURL,alt:"school"})}),Object(L.jsxs)(w.a,{className:a.info,children:[Object(L.jsxs)(w.a,{className:a.upper_info,style:{background:t.titleColor,color:t.color[0]},children:[Object(L.jsx)(S.a,{variant:"h5",children:t.title}),t.major&&Object(L.jsx)(S.a,{variant:"h6",children:t.major}),!i&&Object(L.jsx)(S.a,{className:a.time,children:t.time})]}),Object(L.jsx)(w.a,{className:a.lower_info,style:{color:t.color[1]},children:Object(L.jsx)("ul",{children:t.detail.map((function(e,t){return Object(L.jsx)("li",{children:e},t)}))})})]})]}):Object(L.jsx)("div",{style:{height:"215px"}})})},H=Object(v.a)((function(){return{root:{marginTop:150,marginBottom:150,paddingLeft:100,paddingRight:100},root_smaller:{marginTop:150,marginBottom:150}}})),J=function(){var e=H(),t=Object(F.useMediaQuery)({maxWidth:1098});return Object(L.jsx)(w.a,{className:t?e.root_smaller:e.root,children:M.map((function(e,t){return Object(L.jsx)(z,{item:e,turn:t},t)}))})},W=n.p+"static/media/avatar.aac576fe.jpg",G=["title","titleId"];function V(){return V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function U(e,t){var n=e.title,x=e.titleId,O=Q(e,G);return f.createElement("svg",V({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 112.196 112.196",style:{enableBackground:"new 0 0 112.196 112.196"},xmlSpace:"preserve",ref:t,"aria-labelledby":x},O),n?f.createElement("title",{id:x},n):null,f.createElement("g",null,f.createElement("circle",{style:{fill:"#3B5998"},cx:56.098,cy:56.098,r:56.098}),f.createElement("path",{style:{fill:"#FFFFFF"},d:"M70.201,58.294h-10.01v36.672H45.025V58.294h-7.213V45.406h7.213v-8.34 c0-5.964,2.833-15.303,15.301-15.303L71.56,21.81v12.51h-8.151c-1.337,0-3.217,0.668-3.217,3.513v7.585h11.334L70.201,58.294z"})),r||(r=f.createElement("g",null)),a||(a=f.createElement("g",null)),i||(i=f.createElement("g",null)),o||(o=f.createElement("g",null)),l||(l=f.createElement("g",null)),c||(c=f.createElement("g",null)),s||(s=f.createElement("g",null)),g||(g=f.createElement("g",null)),d||(d=f.createElement("g",null)),u||(u=f.createElement("g",null)),h||(h=f.createElement("g",null)),m||(m=f.createElement("g",null)),b||(b=f.createElement("g",null)),p||(p=f.createElement("g",null)),j||(j=f.createElement("g",null)))}var X,q,Y,K,Z,$,ee,te,ne,re,ae,ie,oe,le,ce,se=f.forwardRef(U),ge=(n.p,["title","titleId"]);function de(){return de=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function he(e,t){var n=e.title,r=e.titleId,a=ue(e,ge);return f.createElement("svg",de({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 112.196 112.196",style:{enableBackground:"new 0 0 112.196 112.196"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?f.createElement("title",{id:r},n):null,f.createElement("g",null,f.createElement("circle",{id:"XMLID_115_",style:{fill:"#6A453B"},cx:56.098,cy:56.097,r:56.098}),f.createElement("path",{style:{fill:"#FFFFFF"},d:"M79.124,22.506h-46.05c-5.83,0-10.56,4.73-10.56,10.57v46.05c0,5.83,4.73,10.56,10.56,10.56h46.05 c5.83,0,10.56-4.73,10.56-10.56v-46.05C89.684,27.236,84.954,22.506,79.124,22.506z M71.983,30.276l8.44-0.02h0.02 c0.81-0.01,1.47,0.65,1.47,1.45v8.47c0,0.81-0.65,1.46-1.46,1.46l-8.43,0.03c-0.81,0-1.46-0.65-1.46-1.45l-0.03-8.47 C70.523,30.936,71.173,30.286,71.983,30.276z M45.804,50.326c0.22-0.38,0.45-0.76,0.71-1.12c2.15-2.98,5.64-4.93,9.58-4.93 c3.95,0,7.44,1.95,9.59,4.93c0.26,0.36,0.49,0.74,0.71,1.13c0.96,1.7,1.53,3.67,1.53,5.76c0,6.52-5.31,11.82-11.83,11.82 c-6.52,0-11.82-5.3-11.82-11.82C44.273,54.006,44.834,52.036,45.804,50.326z M83.144,76.706c0,3.55-2.89,6.44-6.44,6.44h-41.21 c-3.55,0-6.44-2.89-6.44-6.44v-27.5h10.03c-0.25,0.61-0.47,1.25-0.65,1.89c-0.46,1.59-0.7,3.27-0.7,5 c0,10.13,8.24,18.37,18.36,18.37c10.13,0,18.37-8.24,18.37-18.37c0-1.73-0.25-3.41-0.7-5c-0.19-0.64-0.4-1.28-0.65-1.89h10.03 V76.706z"})),X||(X=f.createElement("g",null)),q||(q=f.createElement("g",null)),Y||(Y=f.createElement("g",null)),K||(K=f.createElement("g",null)),Z||(Z=f.createElement("g",null)),$||($=f.createElement("g",null)),ee||(ee=f.createElement("g",null)),te||(te=f.createElement("g",null)),ne||(ne=f.createElement("g",null)),re||(re=f.createElement("g",null)),ae||(ae=f.createElement("g",null)),ie||(ie=f.createElement("g",null)),oe||(oe=f.createElement("g",null)),le||(le=f.createElement("g",null)),ce||(ce=f.createElement("g",null)))}var me,be=f.forwardRef(he),pe=(n.p,["title","titleId"]);function je(){return je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},je.apply(this,arguments)}function fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function xe(e,t){var n=e.title,r=e.titleId,a=fe(e,pe);return f.createElement("svg",je({width:"64px",height:"64px",viewBox:"0 0 64 64",id:"i-github",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?f.createElement("title",{id:r},n):null,me||(me=f.createElement("path",{strokeWidth:0,fill:"currentColor",d:"M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"})))}var Oe,ye=f.forwardRef(xe),we=(n.p,["title","titleId"]);function ve(){return ve=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ve.apply(this,arguments)}function Fe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function Ee(e,t){var n=e.title,r=e.titleId,a=Fe(e,we);return f.createElement("svg",ve({width:70,height:70,viewBox:"4 3 70 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?f.createElement("title",{id:r},n):null,Oe||(Oe=f.createElement("path",{d:"M35 4.375C18.0879 4.375 4.375 18.0879 4.375 35C4.375 51.9121 18.0879 65.625 35 65.625C51.9121 65.625 65.625 51.9121 65.625 35C65.625 18.0879 51.9121 4.375 35 4.375ZM46.416 47.6875C43.6406 50.2441 39.8535 51.748 35.335 51.748C28.793 51.748 23.1328 47.9951 20.3779 42.5264C19.2432 40.2637 18.5938 37.707 18.5938 35C18.5938 32.293 19.2432 29.7363 20.3779 27.4736C23.1328 21.998 28.793 18.2451 35.335 18.2451C39.8467 18.2451 43.6338 19.9063 46.5391 22.6064L41.7402 27.4121C40.0039 25.751 37.7959 24.9102 35.3418 24.9102C30.9805 24.9102 27.2891 27.8564 25.9697 31.8145C25.6348 32.8193 25.4434 33.8926 25.4434 35C25.4434 36.1074 25.6348 37.1807 25.9697 38.1855C27.2891 42.1436 30.9805 45.0898 35.335 45.0898C37.5908 45.0898 39.5049 44.4951 41.002 43.4902C42.7793 42.3008 43.9551 40.5303 44.3447 38.4316H35.335V31.9512H51.1055C51.3037 33.0518 51.4062 34.1934 51.4062 35.376C51.4062 40.4824 49.5811 44.7686 46.416 47.6875Z",fill:"#EB4646"})))}var Ce=f.forwardRef(Ee),Se=(n.p,Object(v.a)((function(){return{root:{display:"flex",marginTop:40,"& > a":{marginLeft:10,marginRight:10,color:"#000"}}}}))),ke=function(){var e=Se();return Object(L.jsxs)(w.a,{className:e.root,children:[Object(L.jsx)("a",{href:"https://www.facebook.com/nguyenxuan.nghia.50/",children:Object(L.jsx)(se,{width:50,height:50})}),Object(L.jsx)("a",{href:"https://www.instagram.com/nxnghiax/?hl=vi",children:Object(L.jsx)(be,{width:50,height:50})}),Object(L.jsx)("a",{href:"https://github.com/nxNghia",children:Object(L.jsx)(ye,{width:50,height:50})}),Object(L.jsx)("a",{href:"mailto:nghia141999@gmail.com",children:Object(L.jsx)(Ce,{width:55,height:55})})]})},_e=Object(v.a)((function(){return{root:{width:"80%",margin:"auto",marginTop:100,marginBottom:150},me_image:{borderRadius:"50%",width:"auto",height:"100%"},image_container:{flexGrow:1,display:"flex",justifyContent:"center"},basic_info:{display:"flex",height:"50%","& li":{fontSize:"x-large",marginBottom:20}},basic_info_smaller:{"& li":{fontSize:"x-large",marginBottom:20}},basic_info_name:{flexGrow:1,"& h5":{fontSize:50}},quote:{marginTop:150,textAlign:"center",margin:"auto",width:"60%",fontStyle:"italic"},quote_smaller:{marginTop:150,textAlign:"center",margin:"auto",fontStyle:"italic"}}})),Ne=n.p+"static/media/Flag_of_Vietnam-Animated.4c899e75.gif",Be=function(){var e=_e(),t=Object(F.useMediaQuery)({maxWidth:1098});return Object(L.jsxs)(w.a,{className:e.root,children:[Object(L.jsxs)(w.a,{className:t?e.basic_info_smaller:e.basic_info,children:[Object(L.jsxs)(w.a,{className:e.basic_info_name,children:[Object(L.jsx)(S.a,{variant:"h5",children:"Nguyen Xuan Nghia"}),Object(L.jsx)(S.a,{variant:"h6",children:"(Nah)"}),Object(L.jsxs)("ul",{children:[Object(L.jsxs)("li",{children:["Living in Hanoi, Vietnam",Object(L.jsx)("span",{children:Object(L.jsx)("img",{src:Ne,alt:"flag",width:30})})]}),Object(L.jsx)("li",{children:"Speaking Vetnamese natively"}),Object(L.jsx)("li",{children:"Foreign languages: English (800 TOEIC aprox) and Japanese (learning)"})]}),Object(L.jsx)(ke,{})]}),Object(L.jsx)(w.a,{className:e.image_container,children:Object(L.jsx)("img",{src:W,alt:"me",className:e.me_image})})]}),Object(L.jsxs)(w.a,{"data-aos":"slide-up",className:t?e.quote_smaller:e.quote,children:[Object(L.jsx)(S.a,{variant:"h6",children:"\u201cWe keep moving forward, opening new doors, and doing new things, because we're curious and curiosity keeps leading us down new paths.\u201d"}),Object(L.jsx)(S.a,{variant:"h6",children:"--Walt Disney--"})]})]})},Te={REACTJS:{title:"ReactJS",color:"#20232A",font:"#FFFFFF"},EXPRESSJS:{title:"ExpressJS",color:"#404D59",font:"#FFFFFF"},MONGODB:{title:"MongoDB",color:"#4EA94B",font:"#FFFFFF"},JAVASCRIPT:{title:"JavaScript",color:"#F7DF1E"},CPP:{title:"C++",color:"#00599C",font:"#FFFFFF"},OPENGL:{title:"OpenGL",color:"#58A0DB",font:"#FFFFFF"},NETLIFY:{title:"Netlify",color:"#429972",font:"#FFFFFF"},HEROKU:{title:"Heroku",color:"#614399",font:"#FFFFFF"}},Ie=[{title:"EzyTalk",describe:"Chat application",url:"https://github.com/nxNghia/EzyTalk",includes:[Te.REACTJS,Te.EXPRESSJS,Te.MONGODB,Te.HEROKU]},{title:"Yumemi",describe:"Japanes prefecture's population visualization",url:"https://github.com/nxNghia/yumemi",includes:[Te.REACTJS,Te.NETLIFY]},{title:"2048",describe:"Small game, which inspire of the famous game 2048",url:"https://github.com/nxNghia/2048",includes:[Te.CPP,Te.OPENGL]},{title:"Flappy bird",describe:"Small game, which inspire of the famous game Flappy bird",url:"https://github.com/nxNghia/FlappyBird",includes:[Te.JAVASCRIPT]}],Pe=n(99),Le=Object(v.a)((function(){return{root:{width:"45%",cursor:"pointer",background:"#fff",marginBottom:30,padding:20,boxShadow:"1px 2px 5px",borderRadius:10,"&:hover":{boxShadow:"1px 5px 5px",background:"#313131",color:"#fff"},transition:"box-shadow 250ms, background 250ms, color 250ms",minHeight:150},root_smaller:{width:"80%",cursor:"pointer",background:"#fff",marginBottom:30,padding:20,boxShadow:"1px 2px 5px",borderRadius:10,"&:hover":{boxShadow:"1px 5px 5px",background:"#313131",color:"#fff"},transition:"box-shadow 250ms, background 250ms, color 250ms"},chip:{marginLeft:10,fontWeight:"bold",border:"1px solid #fff"},title:{fontSize:"xx-large",marginBottom:10},describe:{fontSize:"x-large",marginBottom:20}}})),Re=function(e){var t=e.data,n=e.turn,r=Le(),a=Object(F.useMediaQuery)({maxWidth:1098}),i=Object(f.useState)(!1),o=Object(y.a)(i,2),l=o[0],c=o[1];Object(f.useEffect)((function(){setTimeout((function(){return c(!0)}),1e3*n)}));return Object(L.jsx)(L.Fragment,{children:l?Object(L.jsxs)(w.a,{"data-aos":"fade-in",className:a?r.root_smaller:r.root,onClick:function(){return window.open(t.url,"_blank")},children:[Object(L.jsx)(S.a,{variant:"h5",className:r.title,children:t.title}),Object(L.jsx)(S.a,{className:r.describe,children:t.describe}),t.includes.map((function(e,t){return Object(L.jsx)(Pe.a,{className:r.chip,style:{background:e.color,color:e.font},label:e.title},t)}))]}):Object(L.jsx)("div",{style:{height:150}})})},Ae=Object(v.a)((function(){return{root:{paddingLeft:40,paddingRight:40,marginTop:150,marginBottom:150,minHeight:550},root_smaller:{marginTop:150,marginBottom:150},projects:{minHeight:550},projects_container:{display:"flex",flexWrap:"wrap",justifyContent:"space-between"},button_container:{textAlign:"center",marginTop:50}}})),Me=function(){var e=Ae(),t=Object(F.useMediaQuery)({maxWidth:1098});return Object(L.jsxs)(w.a,{className:t?e.root_smaller:e.root,children:[Object(L.jsx)(w.a,{className:e.projects,children:Object(L.jsx)(w.a,{className:e.projects_container,children:Ie.map((function(e,t){return Object(L.jsx)(Re,{data:e,turn:t},t)}))})}),Object(L.jsx)(w.a,{className:e.button_container,children:Object(L.jsx)(k.a,{color:"secondary",variant:"contained",size:"large",onClick:function(){return window.open("https://github.com/nxNghia?tab=repositories","_blank")},children:"View more projects"})})]})},De=Object(v.a)((function(){return{root:{marginTop:150,marginBottom:200}}})),ze=Object(v.a)((function(){return{category:{marginLeft:30,marginBottom:40,minHeight:150},skills_container:{marginBottom:20,paddingLeft:30,paddingTop:10,borderTop:"2px solid #555",minHeight:100,"& > div":{marginBottom:20}},title:{fontSize:"xx-large",marginBottom:10}}})),He=Object(v.a)((function(){return{skill_tag:{marginRight:10}}})),Je=function(e){var t=e.data,n=He();return Object(L.jsx)("img",{className:n.skill_tag,height:50,src:t,alt:"tag"})},We=function(e){var t=e.skills;return Object(L.jsx)(w.a,{children:t.map((function(e,t){return Object(L.jsx)(Je,{data:e},t)}))})},Ge=function(e){var t=e.skills;return Object(L.jsxs)(w.a,{children:[Object(L.jsx)(S.a,{variant:"h6",children:"Currently interesting:"}),t.map((function(e,t){return Object(L.jsx)(Je,{data:e},t)}))]})},Ve=function(e){var t=e.name,n=e.data,r=e.turn,a=ze(),i=Object(f.useState)(!1),o=Object(y.a)(i,2),l=o[0],c=o[1];Object(f.useEffect)((function(){setTimeout((function(){return c(!0)}),1e3*r)}),[]);return Object(L.jsx)(L.Fragment,{children:l?Object(L.jsxs)(w.a,{"data-aos":"fade-in",className:a.category,children:[Object(L.jsx)(S.a,{variant:"h5",className:a.title,children:t}),Object(L.jsxs)(w.a,{className:a.skills_container,children:[Object(L.jsx)(We,{skills:n.currently}),0!==n.interesting.length&&Object(L.jsx)(Ge,{skills:n.interesting})]})]}):Object(L.jsx)("div",{style:{height:150}})})},Qe={currently:["https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black","https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white","https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white","https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"],interesting:["https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white","https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white"]},Ue={currently:["https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB","https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white","https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"],interesting:["https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white","https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logoColor=white"]},Xe={currently:["https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white","https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white","https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"],interesting:[]},qe={currently:["https://img.shields.io/badge/GIT-D83B01?style=for-the-badge&logo=git&logoColor=white","https://img.shields.io/badge/figma-AAAAAA?style=for-the-badge&logo=figma&logoColor=white","https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white"],interesting:["https://img.shields.io/badge/docker-0078D4?style=for-the-badge&logo=docker&logoColor=white"]},Ye=function(){var e=De();return Object(L.jsxs)(w.a,{className:e.root,children:[Object(L.jsx)(Ve,{name:"Language",data:Qe,turn:0}),Object(L.jsx)(Ve,{name:"Framework / Library",data:Ue,turn:1}),Object(L.jsx)(Ve,{name:"Database",data:Xe,turn:2}),Object(L.jsx)(Ve,{name:"Other",data:qe,turn:3})]})},Ke=Object(v.a)((function(){return{root:{width:"90%",margin:"auto",display:"block"}}})),Ze=function(e){var t=e.pageIndex,n=Ke();return Object(L.jsx)(w.a,{className:n.root,children:function(){switch(t){case 0:default:return Object(L.jsx)(Be,{});case 1:return Object(L.jsx)(Ye,{});case 2:return Object(L.jsx)(Me,{});case 3:return Object(L.jsx)(J,{})}}()})},$e=Object(v.a)((function(){return{root:{display:"flex",justifyContent:"space-between",paddingBottom:20,paddingLeft:20,paddingRight:20}}})),et=function(){var e=$e();return Object(L.jsxs)(w.a,{className:e.root,children:[Object(L.jsx)(S.a,{children:function(){var e=new Date,t=e.getMonth()+1;return e.getDate()+"/"+t+"/"+e.getFullYear()}()}),Object(L.jsx)(S.a,{children:"Make by Nguyen Xuan Nghia \ud83e\udd18"})]})},tt=n(51),nt=n.n(tt),rt=Object(v.a)((function(){return{root:{background:"inherit",paddingLeft:30,paddingRight:30},root_smaller:{background:"inherit"}}})),at=function(){var e=rt(),t=Object(f.useState)(0),n=Object(y.a)(t,2),r=n[0],a=n[1],i=Object(F.useMediaQuery)({maxWidth:1098});return Object(f.useEffect)((function(){nt.a.init({duration:1500})})),Object(L.jsxs)(w.a,{className:i?e.root_smaller:e.root,children:[Object(L.jsx)(R,{pageIndex:r,setPageIndex:a}),Object(L.jsx)(Ze,{pageIndex:r}),Object(L.jsx)(et,{})]})},it=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,102)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};O.a.render(Object(L.jsx)(at,{}),document.getElementById("root")),it()}},[[71,1,2]]]);
//# sourceMappingURL=main.b9ea13ec.chunk.js.map