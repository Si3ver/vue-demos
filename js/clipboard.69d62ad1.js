(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["clipboard"],{"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),a=n("17c2"),i=n("9112");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),a=o("forEach");t.exports=a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,n){"use strict";var r=n("23e7"),o=n("5a34"),a=n("1d80"),i=n("ab13");r({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(a(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),o=n("825a"),a=n("d039"),i=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=o(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?i.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},3347:function(t,e,n){},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),a=n("b622"),i=a("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,n){var r=n("861d"),o=n("e8b5"),a=n("b622"),i=a("species");t.exports=function(t,e){var n;return o(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var r=n("b622"),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return!1}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b116:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._v(" Clipboard "),n("pre",[t._v("说明：\n      1. 劫持剪贴板复制事件，并插入内容\n      2. 剪贴板粘贴。可粘贴文字、图片、本地文件。\n")]),n("hr"),n("section",[t._v("复制内容:"+t._s(t.pasteContent)),n("br")]),t._m(0),n("section",[t._v(" 粘贴图片: "),n("img",{ref:"img",attrs:{src:t.pasteImage}})])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t._v(" 粘贴内容: "),n("textarea")])}],a=(n("d3b7"),n("25f0"),n("159b"),n("caad"),n("2532"),{name:"Clipborad",data:function(){return{copyContent:"",pasteContent:"",pasteImage:""}},mounted:function(){var t=this;document.body.oncopy=function(t){console.log("[event copy]",t);var e=document.getSelection();t.clipboardData.setData("text/plain","该文档不允许复制剪贴操作，谢谢配合!"+e.toString()),t.preventDefault()},document.body.onpaste=function(e){console.log("[event paste]",e.clipboardData),t.pasteContent=e.clipboardData.getData("text/plain"),console.log("剪贴板中的文本内容：",t.pasteContent),e.clipboardData.items&&e.clipboardData.items.forEach((function(e){if(e.type.includes("image")){var n=e.getAsFile();console.log("file",n);var r=new FileReader;r.onload=function(e){t.$refs.img.style.width=n.width+"px",t.$refs.img.style.height=n.height+"px",t.pasteImage=e.target.result,console.log(t.pasteImage)},r.onerror=function(t){console.log(t)},r.readAsDataURL(n)}}))}}}),i=a,c=(n("dff8"),n("2877")),s=Object(c["a"])(i,r,o,!1,null,"326a6614",null);e["default"]=s.exports},b727:function(t,e,n){var r=n("0366"),o=n("44ad"),a=n("7b0b"),i=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=7==t,p=5==t||l;return function(v,g,h,b){for(var m,y,x=a(v),E=o(x),w=r(g,h,3),_=i(E.length),A=0,C=b||c,D=e?C(v,_):n||d?C(v,0):void 0;_>A;A++)if((p||A in E)&&(m=E[A],y=w(m,A,x),t))if(e)D[A]=y;else if(y)switch(t){case 3:return!0;case 5:return m;case 6:return A;case 2:s.call(D,m)}else switch(t){case 4:return!1;case 7:s.call(D,m)}return l?-1:u||f?f:D}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},caad:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").includes,a=n("44d2");r({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),a("includes")},dff8:function(t,e,n){"use strict";n("3347")},e8b5:function(t,e,n){var r=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}}}]);
//# sourceMappingURL=clipboard.69d62ad1.js.map