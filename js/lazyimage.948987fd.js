(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lazyimage"],{b1b8:function(e,t,o){"use strict";o("b9d4")},b9d4:function(e,t,o){},eed2:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"out-scroll"},[o("div",{staticClass:"middle-scroll"},[o("div",{staticClass:"place-holder"}),o("img",{ref:"img",staticClass:"lasy-image",attrs:{src:e.src}})])])},n=[],i={data:function(){return{imgSrc:"https://picsum.photos/200/200?t=".concat(Math.random()),src:""}},mounted:function(){var e=this,t=document.createDocumentFragment(),o=document.createElement("div");o.innerHTML="哈哈哈哈哈哈哈哈哈",t.appendChild(o),console.log("fragment>>>",o.offsetHeight),window.addEventListener("scroll",(function(){e.shouldLoad()})),console.log(this.$refs.img.parentNode),this.$refs.img.parentNode.addEventListener("scroll",(function(){e.shouldLoad()}));var s=new IntersectionObserver((function(t){t[0].intersectionRatio<=0?e.src="":(console.log("//进入视野"),console.log(e.$refs.img.getBoundingClientRect()),e.src=e.imgSrc)}));s.observe(document.querySelector(".lasy-image"))},methods:{shouldLoad:function(){var e=this.$refs.img,t=e.parentNode;t.scrollHeight-t.scrollTop<=t.offsetHeight&&(console.log("//进入视野"),this.src=this.imgSrc)}}},c=i,r=(o("b1b8"),o("2877")),l=Object(r["a"])(c,s,n,!1,null,"0df42b84",null);t["default"]=l.exports}}]);
//# sourceMappingURL=lazyimage.948987fd.js.map