(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{34:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),i=n(24),o=n.n(i),r=(n(34),n(11)),l=n.n(r),d=n(25),j=n(8),u=n(26),b=n.n(u),g=n(27),v=n.n(g),O=(n(53),n(6)),x=(n(54),function(){var e=Object(s.useContext)(N),t=e.newsList,n=e.setSelectedNews,a=e.selectedCategory;return Object(c.jsx)(v.a,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(c.jsxs)(O.b,{style:{textDecoration:"none"},to:"/details",onClick:function(){n(e)},children:[Object(c.jsxs)("h3",{style:{textAlign:"center"},children:[a," News"]}),Object(c.jsxs)("div",{className:"bannerContainer",children:[Object(c.jsx)("h2",{children:null===e||void 0===e?void 0:e.title}),void 0==(null===e||void 0===e?void 0:e.urlToImage)?Object(c.jsx)("img",{src:"https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg",alt:"Link Error"}):Object(c.jsx)("img",{className:"bannerImage",src:null===e||void 0===e?void 0:e.urlToImage,alt:"NewsImage"})]},t)]},t)}))})}),h=(n(60),function(e){var t=e.newsList;return console.log(t),Object(c.jsx)("div",{className:"newsCardWrapper",children:Object(c.jsx)("p",{className:"newsCardText",children:null===t||void 0===t?void 0:t.title})})}),m=(n(61),function(e){var t=e.newsList,n=e.setSelectedNews;return Object(c.jsx)("div",{className:"newsCard",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(c.jsx)(O.b,{style:{textDecoration:"none"},to:"/details",onClick:function(){n(e)},children:Object(c.jsx)(h,{newsList:e},t)})}))})}),w=(n(62),function(){var e=Object(s.useContext)(N),t=e.newsList,n=e.setSelectedNews,a=e.selectedNews,i=e.selectedCategory;return console.log(a),Object(c.jsxs)("div",{className:"newsContainer",children:[Object(c.jsxs)("div",{className:"newsDetail",children:[Object(c.jsx)("h2",{children:null===a||void 0===a?void 0:a.title}),Object(c.jsx)("img",{className:"newsImage",src:null===a||void 0===a?void 0:a.urlToImage,alt:"News Details"}),Object(c.jsx)("p",{children:null===a||void 0===a?void 0:a.content})]}),Object(c.jsxs)("div",{className:"newsCardContainer",children:[Object(c.jsxs)("h3",{children:["Other ",i," News"]}),Object(c.jsx)("div",{className:"newsCard",children:Object(c.jsx)(m,{newsList:t,setSelectedNews:n})})]})]})}),f=(n(63),function(){var e=Object(s.useContext)(N),t=e.categorySource,n=e.setSelectedCategory;return Object(c.jsx)("div",{className:"container",children:t.map((function(e,t){return Object(c.jsx)(O.b,{className:"navBar",onClick:function(){n(e.category)},to:"/",children:e.category},t)}))})}),p=n(2),y=(n(64),[{category:"General",imageId:"1566378246598-5b11a0d486cc"},{category:"Technology",imageId:"1478358161113-b0e11994a36b"},{category:"Sports",imageId:"1521412644187-c49fa049e84d"},{category:"Health",imageId:"1526256262350-7da7584cf5eb"},{category:"Business",imageId:"1542222024-c39e2281f121"},{category:"Entertainment",imageId:"1511671782779-c97d3d27a1d4"},{category:"Science",imageId:"1507413245164-6160d8298b31"}]),N=Object(s.createContext)();var C=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)("General"),o=Object(j.a)(i,2),r=o[0],u=o[1],g=Object(s.useState)([]),v=Object(j.a)(g,2),h=v[0],m=v[1],C=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://newsapi.org/v2/top-headlines?country=gb&category=".concat(r,"&apiKey=ea737c44a9754725aa0b320aced48165"));case 2:n=e.sent,a(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(n),Object(s.useEffect)((function(){C()}),[r]),Object(c.jsx)(O.a,{children:Object(c.jsxs)(N.Provider,{value:{newsList:n,setNewsList:a,categorySource:y,selectedCategory:r,setSelectedCategory:u,selectedNews:h,setSelectedNews:m},children:[Object(c.jsx)(f,{}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{path:"/details",component:w,exact:!0}),Object(c.jsx)(p.a,{path:"/",component:x})]})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(C,{})}),document.getElementById("root")),S()}},[[65,1,2]]]);
//# sourceMappingURL=main.f846a07a.chunk.js.map