(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{34:function(e,t,n){},54:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n.n(s),i=n(24),r=n.n(i),o=(n(34),n(11)),l=n.n(o),d=n(25),j=n(8),u=n(26),b=n.n(u),g=n(27),v=n.n(g),O=(n(53),n(6)),h=(n(54),function(){var e=Object(s.useContext)(C),t=e.newsList,n=e.setSelectedNews,a=e.selectedCategory;return Object(c.jsx)(v.a,{children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(c.jsxs)(O.b,{style:{textDecoration:"none"},to:"/details",onClick:function(){n(e)},children:[Object(c.jsxs)("h3",{style:{textAlign:"center"},children:[a," News"]}),Object(c.jsxs)("div",{className:"bannerContainer",children:[Object(c.jsx)("h2",{children:null===e||void 0===e?void 0:e.title}),void 0==(null===e||void 0===e?void 0:e.urlToImage)?Object(c.jsx)("img",{src:"https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg",alt:"Link Error"}):Object(c.jsx)("img",{className:"bannerImage",src:null===e||void 0===e?void 0:e.urlToImage,alt:"NewsImage"})]},t)]},t)}))})}),x=(n(60),function(e){var t=e.newsList;return Object(c.jsx)("div",{className:"newsCardWrapper",children:Object(c.jsx)("p",{className:"newsCardText",children:null===t||void 0===t?void 0:t.title})})}),m=(n(61),function(e){var t=e.newsList;return Object(c.jsx)("div",{className:"newsCard",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(c.jsx)(O.b,{to:"/details",children:Object(c.jsx)(x,{newsList:e},t)})}))})}),p=(n(62),function(){var e=Object(s.useContext)(C),t=e.newsList,n=e.selectedNews,a=e.selectedCategory;return console.log(n),Object(c.jsxs)("div",{className:"newsContainer",children:[Object(c.jsxs)("div",{className:"newsDetail",children:[Object(c.jsx)("h1",{children:null===n||void 0===n?void 0:n.title}),Object(c.jsx)("img",{className:"newsImage",src:null===n||void 0===n?void 0:n.urlToImage,alt:"News Details"}),Object(c.jsx)("p",{children:null===n||void 0===n?void 0:n.description})]}),Object(c.jsxs)("div",{className:"newsCardContainer",children:[Object(c.jsxs)("h3",{children:["Other ",a," News"]}),Object(c.jsx)("div",{className:"newsCard",children:Object(c.jsx)(m,{newsList:t})})]})]})}),f=(n(63),function(){var e=Object(s.useContext)(C),t=e.categorySource,n=e.setSelectedCategory;return Object(c.jsx)("div",{className:"container",children:t.map((function(e,t){return Object(c.jsx)(O.b,{className:"navBar",onClick:function(){n(e.category)},to:"/",children:e.category},t)}))})}),w=n(2),y=(n(64),[{category:"General",imageId:"1566378246598-5b11a0d486cc"},{category:"Technology",imageId:"1478358161113-b0e11994a36b"},{category:"Sports",imageId:"1521412644187-c49fa049e84d"},{category:"Health",imageId:"1526256262350-7da7584cf5eb"},{category:"Business",imageId:"1542222024-c39e2281f121"},{category:"Entertainment",imageId:"1511671782779-c97d3d27a1d4"},{category:"Science",imageId:"1507413245164-6160d8298b31"}]),C=Object(s.createContext)();var N=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)("General"),r=Object(j.a)(i,2),o=r[0],u=r[1],g=Object(s.useState)([]),v=Object(j.a)(g,2),x=v[0],m=v[1],N=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://newsapi.org/v2/top-headlines?country=gb&category=".concat(o,"&apiKey=ea737c44a9754725aa0b320aced48165"));case 2:n=e.sent,a(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.articles);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return console.log(n),Object(s.useEffect)((function(){N()}),[o]),Object(c.jsx)(O.a,{children:Object(c.jsxs)(C.Provider,{value:{newsList:n,setNewsList:a,categorySource:y,selectedCategory:o,setSelectedCategory:u,selectedNews:x,setSelectedNews:m},children:[Object(c.jsx)(f,{}),Object(c.jsxs)(w.c,{children:[Object(c.jsx)(w.a,{path:"/details",component:p,exact:!0}),Object(c.jsx)(w.a,{path:"/",component:h})]})]})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),I()}},[[65,1,2]]]);
//# sourceMappingURL=main.15719884.chunk.js.map