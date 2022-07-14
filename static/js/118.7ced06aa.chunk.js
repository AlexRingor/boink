"use strict";(self.webpackChunksw_coding_exam=self.webpackChunksw_coding_exam||[]).push([[118],{118:function(e,r,s){s.r(r),s.d(r,{default:function(){return h}});var i=s(214),a=s(861),n=s(152),t=s(569),c=s.n(t),l=s(791),d=s(184);function p(e){return(0,d.jsxs)("div",{className:"product__wrapper",children:[(0,d.jsxs)("div",{className:"product__wrapper-thumbnail",children:[(0,d.jsx)("div",{className:"product__wrapper-container",children:(0,d.jsx)("div",{className:"product__wrapper-heart "+(e.isFav?"is-fav":""),children:(0,d.jsx)("img",{className:"thumbnail ",src:"./heart.svg",alt:"heart",onClick:function(){return e.toggleFav(e.id)}})})}),(0,d.jsx)("img",{src:e.image,alt:e.name})]}),(0,d.jsxs)("div",{className:"product__wrapper-details",children:[(0,d.jsxs)("h1",{children:[e.name," ",(0,d.jsx)("span",{children:e.desc.substring(0,30)})]}),(0,d.jsx)("div",{className:"product__wrapper-pricing",children:e.price})]})]})}function o(e){var r=(0,l.useState)(e.product[0]),s=(0,n.Z)(r,2),i=s[0],a=(s[1],(0,l.useState)(1)),t=(0,n.Z)(a,2),c=t[0],p=t[1],o=(0,l.useState)(parseInt(i.salePrice.replace("$",""))),u=(0,n.Z)(o,2),m=u[0],h=u[1],v=(0,l.useState)(parseInt(i.salePrice.replace("$",""))),_=(0,n.Z)(v,2),x=_[0],j=(_[1],(0,l.useState)(parseInt(i.originalPrice.replace("$","")))),f=(0,n.Z)(j,2),g=f[0],w=f[1],N=(0,l.useState)(parseInt(i.originalPrice.replace("$",""))),b=(0,n.Z)(N,2),k=b[0];b[1];console.log(e);return(0,d.jsxs)("div",{className:"item__wrapper",children:[(0,d.jsx)("div",{className:"item__wrapper-thumbnail",children:(0,d.jsxs)("div",{className:"item__wrapper-thumbnail--image",children:[(0,d.jsx)("img",{src:i.imageUrl,alt:i.name}),(0,d.jsxs)("div",{className:"item__wrapper-thumbnail--discount",children:["-",i.percentOff,"%"]})]})}),(0,d.jsxs)("div",{className:"item__wrapper-description",children:[(0,d.jsxs)("div",{className:"item__wrapper-description--title",children:[i.name," ",(0,d.jsx)("span",{children:i.description.substring(0,50)})]}),(0,d.jsxs)("div",{className:"item__wrapper-description--controls",children:[(0,d.jsx)("div",{onClick:function(){0!==c&&(p((function(e){return e-1})),h((function(e){return e-x})),w((function(e){return e-k})))},children:"-"}),(0,d.jsx)("div",{children:c}),(0,d.jsx)("div",{onClick:function(){return p((function(e){return e+1})),h((function(e){return e+x})),void w((function(e){return e+k}))},children:"+"})]}),(0,d.jsxs)("div",{className:"item__wrapper-description--value",children:["$",m," ",(0,d.jsxs)("strike",{children:["$",g]})]})]})]})}function u(e){var r=(0,l.useState)(!1),s=(0,n.Z)(r,2),i=s[0],a=s[1];return(0,d.jsx)("div",{className:"option__wrapper "+(e.isAvailable?"is-available ":"not-available ")+(!0===i?"selected":""),onClick:function(){a(!i)},children:e.sizeLabel})}function m(e){var r=(0,l.useState)(e.product[0]),s=(0,n.Z)(r,2),i=s[0];s[1];return console.log(e.product[0].sizes),(0,d.jsxs)("div",{className:"sizes__wrapper",children:[(0,d.jsxs)("div",{className:"sizes__wrapper-title",children:[(0,d.jsxs)("div",{className:"sizes__wrapper-title--container",children:[(0,d.jsx)("img",{src:i.imageUrl,alt:i.name}),(0,d.jsx)("div",{className:"sizes__wrapper-title--heading",children:i.name})]}),(0,d.jsx)("span",{children:i.description.substring(0,30)})]}),(0,d.jsxs)("div",{className:"sizes__wrapper-price",children:[(0,d.jsx)("span",{children:i.salePrice})," ",(0,d.jsx)("strike",{children:i.originalPrice})]}),(0,d.jsx)("div",{className:"sizes__wrapper-options",children:i.sizes.length?i.sizes.map((function(e,r){return(0,d.jsx)(u,{sizeLabel:e.label,isAvailable:e.isAvailable},r)})):null})]})}s(524);function h(){var e=(0,l.useState)([]),r=(0,n.Z)(e,2),s=r[0],t=r[1],u=(0,l.useState)(""),h=(0,n.Z)(u,2),v=h[0],_=h[1],x=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(){var r,s;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c().get("".concat("https://sw-coding-challenge.herokuapp.com/api/v1/products"));case 3:for(r=e.sent,s=0;s<r.data.d.length;s++)r.data.d[s].isFav=!1;t(r.data.d.splice(0,2).map((function(e){return e}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),_(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){x()}),[]);var j=function(e){console.log(s[0].isFav);var r=s.map((function(r,s){return s===e&&(r.isFav=!r.isFav),r}));t(r)};return(0,d.jsxs)(d.Fragment,{children:[v.length>0?(0,d.jsx)("h1",{children:"Unable to Fetch Data"}):null,s.length?(0,d.jsx)(m,{product:s}):null,s.length?(0,d.jsx)(o,{product:s}):null,(0,d.jsxs)("div",{className:"recommended__wrapper",children:[(0,d.jsxs)("div",{className:"recommended__wrapper-head",children:[(0,d.jsx)("h1",{children:"Recommended for you"}),(0,d.jsx)("a",{href:"sw.com",target:"_blank",children:"See more"})]}),(0,d.jsx)("div",{className:"recommended__wrapper-body",children:s.map((function(e,r){return(0,d.jsx)(p,{name:e.name,id:r,image:e.imageUrl,price:e.salePrice,desc:e.description,isFav:e.isFav,toggleFav:j},r)}))})]})]})}c().interceptors.request.use((function(e){return e.headers.authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs"),e}),(function(e){return Promise.reject(e)}))},524:function(){}}]);
//# sourceMappingURL=118.7ced06aa.chunk.js.map