!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).History=n()}(this,(function(){"use strict";function t(t,n,e,a,i,s,o,r,c,l){"boolean"!=typeof o&&(c=r,r=o,o=!1);const A="function"==typeof e?e.options:e;let d;if(t&&t.render&&(A.render=t.render,A.staticRenderFns=t.staticRenderFns,A._compiled=!0,i&&(A.functional=!0)),a&&(A._scopeId=a),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},A._ssrRegister=d):n&&(d=o?function(t){n.call(this,l(t,this.$root.$options.shadowRoot))}:function(t){n.call(this,r(t))}),d)if(A.functional){const t=A.render;A.render=function(n,e){return d.call(e),t(n,e)}}else{const t=A.beforeCreate;A.beforeCreate=t?[].concat(t,d):[d]}return e}const n={name:"HeaderChoose",data:function(){return{}},methods:{onChange(t){console.log(`checked = ${t.target.checked}`)}},props:[],components:{},created(){},computed:{},mounted(){},watch:{}};var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"module-row margin-lr"},[e("a-row",[e("a-col",{staticClass:"text-right",attrs:{span:24}},[e("a-button",{staticClass:"edit-btn"},[e("a-icon",{attrs:{type:"download"}}),t._v("导出 ")],1),t._v(" "),e("a-divider",{attrs:{type:"vertical"}}),t._v(" "),e("a-button",{staticClass:"edit-btn"},[e("a-icon",{attrs:{type:"printer"}}),t._v(" 打印")],1)],1)],1)],1)};e._withStripped=!0;const a=t({render:e,staticRenderFns:[]},undefined,n,undefined,false,undefined,!1,void 0,void 0,void 0);var i={name:"Setting",data:function(){return{disabled:!0,isShow:!1,current:"current",flag:0,origin:"origin",arr:[{id:1,type:"icon-a-1"},{id:2,type:"icon-a-2"},{id:3,type:"icon-a-3"}]}},methods:{openSett(){this.isShow=!0},shut(){this.isShow=!1},confirm(){this.isShow=!1},handlerLi(t){this.flag=t}},props:[],components:{},created(){},computed:{},mounted(){},watch:{}};const s="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(t){return(t,n)=>function(t,n){const e=s?n.media||"default":t,a=c[e]||(c[e]={ids:new Set,styles:[]});if(!a.ids.has(t)){a.ids.add(t);let e=n.source;if(n.map&&(e+="\n/*# sourceURL="+n.map.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",n.media&&a.element.setAttribute("media",n.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(e),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const t=a.ids.size-1,n=document.createTextNode(e),i=a.element.childNodes;i[t]&&a.element.removeChild(i[t]),i.length?a.element.insertBefore(n,i[t]):a.element.appendChild(n)}}}(t,n)}let r;const c={};const l=i;var A=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-icon",{staticClass:"font18",attrs:{type:"setting"},on:{click:t.openSett}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"fixed-box text-left"},[e("div",{staticClass:"fixed-tit"},[t._v("表格显示设置")]),t._v(" "),e("div",{staticClass:"fixed-content"},[e("span",{staticClass:"p1 float-l mar-r20 font-bold"},[t._v("显示密度设置")]),t._v(" "),t._l(t.arr,(function(n,a){return e("span",{key:a},[e("icon-font",{class:{current:t.flag==a,origin:t.origin},attrs:{type:n.type},on:{click:function(n){return t.handlerLi(a)}}})],1)})),t._v(" "),e("a-row",{staticClass:"mt42 list-col"},[e("a-col",{attrs:{span:12}},[e("span",{staticClass:"p1 font-bold"},[t._v("表头设置")])]),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("span",{staticClass:"br-font mt0"},[t._v("恢复默认")])]),t._v(" "),e("a-col",{attrs:{span:12}},[e("span",{staticClass:"p1"},[t._v("姓名")])]),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":"",disabled:t.disabled}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("span",{staticClass:"p1"},[t._v("证件类型号码")])]),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":"",disabled:t.disabled}})],1),t._v(" "),e("a-col",{attrs:{span:24}},[e("h5",{staticClass:"h5-style"},[e("span",[t._v("以上树形不可排序")])])]),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("手机号码")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":""}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("招聘项目")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":""}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("邀约状态")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":""}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("事件状态")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":""}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("机构")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":""}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("部门")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":""}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("岗位")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty",attrs:{"default-checked":""}})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("性别")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty"})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("年龄")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty"})],1),t._v(" "),e("a-col",{attrs:{span:12}},[e("icon-font",{attrs:{type:"icon-paixu"}}),e("span",{staticClass:"p1"},[t._v("籍贯")])],1),t._v(" "),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-switch",{staticClass:"swit-sty"})],1)],1),t._v(" "),e("div",{staticClass:"foot-btn"},[e("a-button",{staticClass:"mar-r20",on:{click:t.shut}},[t._v("取消")]),t._v(" "),e("a-button",{staticClass:"save-btn bg-gr",attrs:{type:"确定"},on:{click:t.confirm}},[t._v("确定")])],1)],2)])],1)};A._withStripped=!0;const d=t({render:A,staticRenderFns:[]},(function(t){t&&t("data-v-f9181b24_0",{source:'.text-r[data-v-f9181b24] {\n  height: 32px;\n  line-height: 32px;\n  text-align: right;\n}\n.fixed-box[data-v-f9181b24] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999;\n  width: 325px;\n  background: #fff;\n  height: 100%;\n}\n.fixed-tit[data-v-f9181b24] {\n  font-size: 16px;\n  color: #34414f;\n  letter-spacing: 0;\n  font-weight: 600;\n  border-bottom: 1px solid #e5e5e5;\n  padding: 20px 24px;\n  text-align: left;\n}\n.fixed-content[data-v-f9181b24] {\n  padding: 18px 24px;\n  height: calc(100% - 138px);\n  overflow-y: auto;\n}\n.origin[data-v-f9181b24] {\n  font-size: 44px;\n  border: 1px solid #ededed;\n  border-radius: 1px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.current[data-v-f9181b24] {\n  border: 2px solid #03a872;\n  position: relative;\n}\n.current[data-v-f9181b24]::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  content: "√";\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  color: #fff;\n  font-weight: bold;\n  background: #03a872;\n  font-size: 12px;\n}\n.swit-sty[data-v-f9181b24] {\n  min-width: 23px;\n  height: 17px;\n  margin-bottom: 8px;\n}\n.swit-sty .ant-switch-loading-icon[data-v-f9181b24],\n.ant-switch[data-v-f9181b24]::after {\n  width: 10px;\n  height: 10px;\n  top: 2px;\n}\n.br-font[data-v-f9181b24] {\n  font-size: 14px;\n  color: #03a872;\n  letter-spacing: 0.01px;\n  text-align: right;\n  font-weight: 400;\n  line-height: 22px;\n}\n.h5-style[data-v-f9181b24] {\n  font-size: 14px;\n  color: #34414f;\n  letter-spacing: 0;\n  line-height: 22px;\n  font-weight: 400;\n  position: relative;\n  text-align: center;\n}\n.h5-style span[data-v-f9181b24] {\n  background: #fff;\n  padding: 0 10px;\n  position: relative;\n  z-index: 9;\n}\n.h5-style[data-v-f9181b24]::after {\n  position: absolute;\n  top: 11px;\n  left: 0;\n  width: 100%;\n  content: "";\n  height: 1px;\n  background: #e5e5e5;\n}\n.list-col .ant-col[data-v-f9181b24] {\n  margin-bottom: 15px;\n}\n.foot-btn[data-v-f9181b24] {\n  border-top: 1px solid #e5e5e5;\n  width: 325px;\n  padding: 20px;\n  text-align: right;\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  z-index: 99;\n}\n',map:{version:3,sources:["Setting.vue"],names:[],mappings:"AAAA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,YAAY;AACd;AACA;EACE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,gCAAgC;EAChC,kBAAkB;EAClB,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,eAAe;EACf,YAAY;EACZ,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,YAAY;EACZ,QAAQ;AACV;AACA;EACE,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,OAAO;EACP,WAAW;EACX,WAAW;EACX,WAAW;EACX,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,sBAAsB;EACtB,eAAe;EACf,SAAS;EACT,QAAQ;EACR,gBAAgB;EAChB,WAAW;AACb",file:"Setting.vue",sourcesContent:['.text-r {\n  height: 32px;\n  line-height: 32px;\n  text-align: right;\n}\n.fixed-box {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999;\n  width: 325px;\n  background: #fff;\n  height: 100%;\n}\n.fixed-tit {\n  font-size: 16px;\n  color: #34414f;\n  letter-spacing: 0;\n  font-weight: 600;\n  border-bottom: 1px solid #e5e5e5;\n  padding: 20px 24px;\n  text-align: left;\n}\n.fixed-content {\n  padding: 18px 24px;\n  height: calc(100% - 138px);\n  overflow-y: auto;\n}\n.origin {\n  font-size: 44px;\n  border: 1px solid #ededed;\n  border-radius: 1px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n.current {\n  border: 2px solid #03a872;\n  position: relative;\n}\n.current::after {\n  position: absolute;\n  top: 0;\n  right: 0;\n  content: "√";\n  width: 15px;\n  height: 15px;\n  line-height: 15px;\n  color: #fff;\n  font-weight: bold;\n  background: #03a872;\n  font-size: 12px;\n}\n.swit-sty {\n  min-width: 23px;\n  height: 17px;\n  margin-bottom: 8px;\n}\n.swit-sty .ant-switch-loading-icon,\n.ant-switch::after {\n  width: 10px;\n  height: 10px;\n  top: 2px;\n}\n.br-font {\n  font-size: 14px;\n  color: #03a872;\n  letter-spacing: 0.01px;\n  text-align: right;\n  font-weight: 400;\n  line-height: 22px;\n}\n.h5-style {\n  font-size: 14px;\n  color: #34414f;\n  letter-spacing: 0;\n  line-height: 22px;\n  font-weight: 400;\n  position: relative;\n  text-align: center;\n}\n.h5-style span {\n  background: #fff;\n  padding: 0 10px;\n  position: relative;\n  z-index: 9;\n}\n.h5-style::after {\n  position: absolute;\n  top: 11px;\n  left: 0;\n  width: 100%;\n  content: "";\n  height: 1px;\n  background: #e5e5e5;\n}\n.list-col .ant-col {\n  margin-bottom: 15px;\n}\n.foot-btn {\n  border-top: 1px solid #e5e5e5;\n  width: 325px;\n  padding: 20px;\n  text-align: right;\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  background: #fff;\n  z-index: 99;\n}\n']},media:void 0})}),l,"data-v-f9181b24",false,undefined,!1,o,void 0,void 0);const p={name:"CheckInforBtn",data:function(){return{buttonWidth:70,text:"Are you sure to delete this task?"}},methods:{confirm(){},onChange(t){console.log(`checked = ${t.target.checked}`)}},props:[],components:{},created(){},computed:{},mounted(){},watch:{}};var f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("a-popconfirm",{attrs:{placement:"bottom","ok-text":"确定","cancel-text":"取消"},on:{confirm:t.confirm}},[e("template",{slot:"title"},[e("p",[e("a-input",{attrs:{placeholder:"请输入"}})],1)]),t._v(" "),e("a-button",[t._v("变更项 "),e("a-icon",{staticClass:"ccc",attrs:{type:"caret-down"}})],1)],2),t._v(" "),e("a-popconfirm",{attrs:{placement:"bottom","ok-text":"确定","cancel-text":"取消"},on:{confirm:t.confirm}},[e("template",{slot:"title"},[e("p",[e("a-date-picker",{attrs:{"show-time":""}},[e("template",{slot:"renderExtraFooter"},[t._v(" extra footer ")])],2)],1)]),t._v(" "),e("a-button",[t._v("操作时间 "),e("a-icon",{staticClass:"ccc",attrs:{type:"caret-down"}})],1)],2),t._v(" "),e("a-popconfirm",{attrs:{placement:"bottom","ok-text":"确定","cancel-text":"取消"},on:{confirm:t.confirm}},[e("template",{slot:"title"},[e("p",[e("a-date-picker",[e("template",{slot:"renderExtraFooter"},[t._v(" extra footer ")])],2)],1)]),t._v(" "),e("a-button",[t._v("生效时间 "),e("a-icon",{staticClass:"ccc",attrs:{type:"caret-down"}})],1)],2),t._v(" "),e("a-popconfirm",{attrs:{placement:"bottom","ok-text":"确定","cancel-text":"取消"},on:{confirm:t.confirm}},[e("template",{slot:"title"},[e("p",[e("a-input",{attrs:{placeholder:"请输入"}})],1)]),t._v(" "),e("a-button",[t._v("变更前内容 "),e("a-icon",{staticClass:"ccc",attrs:{type:"caret-down"}})],1)],2),t._v(" "),e("a-popconfirm",{attrs:{placement:"bottom","ok-text":"确定","cancel-text":"取消"},on:{confirm:t.confirm}},[e("template",{slot:"title"},[e("p",[e("a-input",{attrs:{placeholder:"请输入"}})],1)]),t._v(" "),e("a-button",[t._v("变更后内容 "),e("a-icon",{staticClass:"ccc",attrs:{type:"caret-down"}})],1)],2),t._v(" "),e("a-popconfirm",{attrs:{placement:"bottom","ok-text":"确定","cancel-text":"取消"},on:{confirm:t.confirm}},[e("template",{slot:"title"},[e("p",[e("a-input",{attrs:{placeholder:"请输入"}})],1)]),t._v(" "),e("a-button",[t._v("操作人 "),e("a-icon",{staticClass:"ccc",attrs:{type:"caret-down"}})],1)],2)],1)};f._withStripped=!0;const h=[{title:"变更项",dataIndex:"name",width:200},{title:"变更前",dataIndex:"username",width:200},{title:"变更后",dataIndex:"ranking",width:200},{title:"操作人",dataIndex:"result",width:200},{title:"操作时间",dataIndex:"ranks",width:200}],C=[{key:"1",name:"成本中心编码",username:"759900",ranking:"753655",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"2",name:"成本中心编码",username:"-",ranking:"759900",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"3",name:"机构简称",username:"中国人寿保险股份有限公司",ranking:"寿险公司",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"4",name:"主要负责人",username:"张三",ranking:"李四",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"5",name:"主要负责人",username:"赵武",ranking:"梁清",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"6",name:"成本中心编码",username:"759900",ranking:"753655",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"7",name:"成本中心编码",username:"753670",ranking:"753655",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"8",name:"机构简称",username:"中国人寿四川分公司",ranking:"四川分公司",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"9",name:"成本中心编码",username:"759950",ranking:"753659",result:"张楠楠",ranks:"2017-07-01 14:09:41"},{key:"10",name:"主要负责人",username:"75赵武900",ranking:"李四",result:"张楠楠",ranks:"2017-07-01 14:09:41"}];const g={name:"HelloVue",data:function(){return{data:C,columns:h}},props:[],components:{HeaderChoose:a,Setting:d,HistoricPage:t({render:f,staticRenderFns:[]},undefined,p,"data-v-d0fc3348",false,undefined,!1,void 0,void 0,void 0)},created(){},computed:{},mounted(){},methods:{onSearch(t){console.log(t)},onChange(t,n){console.log("Selected Time: ",t),console.log("Formatted Selected Time: ",n)},onOk(t){console.log("onOk: ",t)},onChanges(t){console.log("Page: ",t)}}};var m=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"mt20"},[e("a-row",[e("a-col",{attrs:{span:19}},[e("div",{staticClass:"form-module"},[e("historic-page")],1)]),t._v(" "),e("a-col",{attrs:{span:5}},[e("div",{staticClass:"mt20"},[e("header-choose")],1)])],1)],1),t._v(" "),e("div",{staticClass:"table-scroll"},[e("div",{staticClass:"setting-box"},[e("Setting")],1),t._v(" "),e("a-table",{staticClass:"table-style",attrs:{columns:t.columns,"data-source":t.data,pagination:!1,size:"middle",scroll:{x:1200}}})],1),t._v(" "),e("a-pagination",{staticClass:"paging",attrs:{total:100,"show-total":function(t){return"总共 "+t+" 条"},"show-size-changer":"","page-size":20,"default-current":1,"show-quick-jumper":""}})],1)};m._withStripped=!0;return t({render:m,staticRenderFns:[]},(function(t){t&&t("data-v-dc9e1250_0",{source:".form-size[data-v-dc9e1250] {\n  font-size: 14px;\n  color: #34414f;\n  letter-spacing: 0;\n  margin-left: 20px;\n  margin-right: 5px;\n}\n.ant-calendar-picker[data-v-dc9e1250] {\n  min-width: 170px !important;\n  width: 170px !important;\n}\n.btn-right[data-v-dc9e1250] {\n  display: inline-block;\n  float: right;\n}\n.btn-right .mar-12[data-v-dc9e1250] {\n  margin-left: 12px;\n}\n",map:{version:3,sources:["History.vue"],names:[],mappings:"AAAA;EACE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,iBAAiB;AACnB;AACA;EACE,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,iBAAiB;AACnB",file:"History.vue",sourcesContent:[".form-size {\n  font-size: 14px;\n  color: #34414f;\n  letter-spacing: 0;\n  margin-left: 20px;\n  margin-right: 5px;\n}\n.ant-calendar-picker {\n  min-width: 170px !important;\n  width: 170px !important;\n}\n.btn-right {\n  display: inline-block;\n  float: right;\n}\n.btn-right .mar-12 {\n  margin-left: 12px;\n}\n"]},media:void 0})}),g,"data-v-dc9e1250",false,undefined,!1,o,void 0,void 0)}));
