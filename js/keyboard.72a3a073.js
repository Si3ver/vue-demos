(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["keyboard"],{a15b:function(n,o,t){"use strict";var e=t("23e7"),c=t("44ad"),u=t("fc6a"),r=t("a640"),a=[].join,l=c!=Object,i=r("join",",");e({target:"Array",proto:!0,forced:l||!i},{join:function(n){return a.call(u(this),void 0===n?",":n)}})},a640:function(n,o,t){"use strict";var e=t("d039");n.exports=function(n,o){var t=[][n];return!!t&&e((function(){t.call(null,o||function(){throw 1},1)}))}},cbc4:function(n,o,t){"use strict";t.r(o);var e=function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",[n._v(" 最后一次按下的按键: "+n._s(n.currentKey)+" "),t("div",[t("button",{on:{click:n.doFullScreen}},[n._v("全屏")]),t("button",{on:{click:n.doLock}},[n._v("lock()")]),t("button",{on:{click:n.unLock}},[n._v("unlock()")])])])},c=[],u=(t("a15b"),{name:"Keyborad",data:function(){return{currentKey:""}},mounted:function(){var n=this;document.addEventListener("keydown",(function(o){var t=[];return o.altKey&&t.push("alt"),o.ctrlKey&&t.push("ctrl"),o.metaKey&&t.push("meta"),t.push(o.key),n.currentKey=t.join(" + "),!1}))},methods:{doLock:function(){navigator.keyboard&&navigator.keyboard.lock().then((function(){console.log("lock>>>")}))},unLock:function(){console.log("unlock>>>"),navigator.keyboard.unlock()},doFullScreen:function(){document.documentElement.requestFullscreen()}}}),r=u,a=t("2877"),l=Object(a["a"])(r,e,c,!1,null,null,null);o["default"]=l.exports}}]);
//# sourceMappingURL=keyboard.72a3a073.js.map