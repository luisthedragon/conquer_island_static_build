(function(e){function t(t){for(var o,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({"how-to-play":"how-to-play"}[e]||e)+"."+{"how-to-play":"ed0c0364"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"how-to-play":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({"how-to-play":"how-to-play"}[e]||e)+"."+{"how-to-play":"2497732a"}[e]+".css",a=c.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===o||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===o||u===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var o=n("2b0e"),r=n("5f5b");n("ab8b"),n("2dd8");o["default"].use(r["a"]);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"background"},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Play!")]),e._v(" | "),n("router-link",{attrs:{to:"/how-to-play"}},[e._v("How to play")])],1),n("router-view")],1)])},i=[],s=(n("034f"),n("2877")),c={},l=Object(s["a"])(c,a,i,!1,null,null,null),u=l.exports,d=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("h3",[e._v("You are in the dogs' team.")]),e._m(0),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("label",{attrs:{for:"seed"}},[e._v("Game seed:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.seed,expression:"seed"}],attrs:{type:"number",name:"seed",min:"0",max:"1000000000"},domProps:{value:e.seed},on:{input:function(t){t.target.composing||(e.seed=t.target.value)}}}),n("button",{staticClass:"secondary",on:{click:e.startNewGame}},[e._v("New game")]),n("button",{on:{click:e.startNewRandomGame}},[e._v("New random game")])]),e._l(e.board,(function(t,o){return n("div",{key:o,staticClass:"d-flex justify-content-center"},e._l(t,(function(t,r){return n("b-aspect",{key:r},[n("div",{staticClass:"m-2 square",class:1==t?"dog":"lion",on:{click:function(t){return e.handleClick(o,r)}}})])})),1)})),e.winner?n("div",{staticClass:"winner-screen"},[e._m(1),e._m(2)]):e._e()],2)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[n("b",[e._v("Mission:")]),e._v(" Defeat the lions by dominating the island.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"d-flex align-items-center h-100 w-100"},[n("div",{staticClass:"dog final-dog"})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fixed-top-left"},[n("div",{staticClass:"d-flex align-items-center h-100 w-100"},[n("h1",{staticClass:"m-auto text-white"},[e._v(" Congrats! You have defeated the lions!! ")])])])}],p=(n("99af"),n("cb29"),n("4160"),n("d81d"),n("159b"),n("2909")),m=n("6125"),v=n.n(m),w={created:function(){this.seed=Math.floor(Math.random()*this.MAX_SEED_VALUE),this.startNewGame()},name:"Home",data:function(){return{board:[],nrows:3,ncols:3,winningState:[],winner:!1,MAX_SEED_VALUE:1e9}},components:{},methods:{startNewRandomGame:function(){this.seed=Math.floor(Math.random()*this.MAX_SEED_VALUE),this.startNewGame()},startNewGame:function(){this.seed<0&&(this.seed=0),this.seed>this.MAX_SEED_VALUE&&(this.seed=this.MAX_SEED_VALUE);var e=v()(this.seed);this.board=[];for(var t=0;t<this.nrows;t++)this.board=[].concat(Object(p["a"])(this.board),[new Array(this.ncols).fill(1).map((function(){return e()>=.5?1:0}))]);this.winningState=[];for(var n=0;n<this.nrows;n++)this.winningState=[].concat(Object(p["a"])(this.winningState),[new Array(this.ncols).fill(1)]);console.log("Winning state:"),console.log(this.winningState)},handleClick:function(e,t){var n=this;console.log("row: ".concat(e," col: ").concat(t)),o["default"].set(this.board[e],t,1-this.board[e][t]),this.calcAdjIndexes(e,t).forEach((function(e){console.log("row: ".concat(e.row," col: ").concat(e.col)),o["default"].set(n.board[e.row],e.col,1-n.board[e.row][e.col])})),this.winner=this.checkWinner(),console.log(this.winner)},calcAdjIndexes:function(e,t){var n=[];return e>=1&&(n=[].concat(Object(p["a"])(n),[{row:e-1,col:t}])),t<=1&&(n=[].concat(Object(p["a"])(n),[{row:e,col:t+1}])),e<=1&&(n=[].concat(Object(p["a"])(n),[{row:e+1,col:t}])),t>=1&&(n=[].concat(Object(p["a"])(n),[{row:e,col:t-1}])),n},checkWinner:function(){for(var e=0;e<this.nrows;e++)for(var t=0;t<this.ncols;t++)if(this.board[e][t]!==this.winningState[e][t])return!1;return!0}}},b=w,g=(n("8610"),Object(s["a"])(b,f,h,!1,null,"21aa1f26",null)),y=g.exports;o["default"].use(d["a"]);var _=[{path:"/",name:"Home",component:y},{path:"/how-to-play",name:"HowToPlay",component:function(){return n.e("how-to-play").then(n.bind(null,"05cd"))}}],E=new d["a"]({mode:"history",base:"/",routes:_}),j=E,C=n("2f62");o["default"].use(C["a"]);var S=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["default"].config.productionTip=!1,new o["default"]({router:j,store:S,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){},8610:function(e,t,n){"use strict";n("926d")},"926d":function(e,t,n){}});
//# sourceMappingURL=app.4e3824e5.js.map