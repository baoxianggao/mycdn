!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("axios")):"function"==typeof define&&define.amd?define(["axios"],n):(e=e||self).advertisement=n(e.axios)}(this,function(e){"use strict";e=e&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e;console.log("test:",1);var n={name:"advertisement",methods:{moment:moment,test:function(){console.log("axios:",e)}}};function t(e,n,t,o,s,i,r,d,a,c){"boolean"!=typeof r&&(a=d,d=r,r=!1);const l="function"==typeof t?t.options:t;e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,s&&(l.functional=!0)),o&&(l._scopeId=o);let m;if(i?(m=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=m):n&&(m=r?function(e){n.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){n.call(this,d(e))}),m)if(l.functional){const u=l.render;l.render=function(e,n){return m.call(n),u(e,n)}}else{r=l.beforeCreate;l.beforeCreate=r?[].concat(r,m):[m]}return t}const i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(e){return(e,n)=>function(n,t){const e=i?t.media||"default":n,o=d[e]||(d[e]={ids:new Set,styles:[]});if(!o.ids.has(n)){o.ids.add(n);let e=t.source;var s;t.map&&(e+="\n/*# sourceURL="+t.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),o.element||(o.element=document.createElement("style"),o.element.type="text/css",t.media&&o.element.setAttribute("media",t.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(o.element)),"styleSheet"in o.element?(o.styles.push(e),o.element.styleSheet.cssText=o.styles.filter(Boolean).join("\n")):(s=o.ids.size-1,n=document.createTextNode(e),(t=o.element.childNodes)[s]&&o.element.removeChild(t[s]),t.length?o.element.insertBefore(n,t[s]):o.element.appendChild(n))}}(e,n)}let r;const d={};var s=n,n=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",[e._v("\n  测试单文件打包\n  "+e._s(e.moment().format())+"\n")])};n._withStripped=!0;return t({render:n,staticRenderFns:[]},function(e){e&&e("data-v-1f9ed379_0",{source:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",map:{version:3,sources:[],names:[],mappings:"",file:"index.vue"},media:void 0})},s,void 0,!1,void 0,!1,o,void 0,void 0)});
