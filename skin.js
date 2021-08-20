(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.skin = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$1 = {
    name: 'coupon-modal-888',
    props: {
      lottery: {
        type: Object,
        required: true
      }
    },
    mounted: function mounted() {
      console.log('订单');
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  /* script */
  const __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("section", { class: { shadow: true } }, [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c("CpClose", _vm._b({}, "CpClose", _vm.$props, false)),
          _vm._v(" "),
          _c("div", { staticClass: "ad" }),
          _vm._v(" "),
          _c("div", { staticClass: "box" }, [
            _c("div", { staticClass: "light" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "dialog" },
              [
                _c(
                  "div",
                  { staticClass: "name-wrap" },
                  [
                    _c(
                      "CpTitle",
                      _vm._b(
                        { attrs: { clickable: true } },
                        "CpTitle",
                        _vm.$props,
                        false
                      )
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "con" }),
                _vm._v(" "),
                _c("CpButton", _vm._b({}, "CpButton", _vm.$props, false))
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "smoke" }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "coupon" },
              [
                _c(
                  "CpDetail",
                  _vm._b(
                    { attrs: { isPic: true } },
                    "CpDetail",
                    _vm.$props,
                    false
                  )
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "colors" })
        ],
        1
      )
    ])
  };
  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-086ac312_0", { source: ".shadow[data-v-086ac312] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n}\n.shadow .container[data-v-086ac312] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.shadow .container .close[data-v-086ac312] {\n  z-index: 20;\n  position: fixed;\n  top: 0.6rem;\n  right: 0.225rem;\n  width: 0.3rem;\n  height: 0.3rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/close.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  opacity: 0;\n  animation: close-show-data-v-086ac312 0.1s 1.5s forwards;\n}\n@keyframes close-show-data-v-086ac312 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n.shadow .container .box[data-v-086ac312] {\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 3.3rem;\n  height: 3.505rem;\n  transform-origin: center bottom;\n  animation: box-show-0-data-v-086ac312 0.6s linear forwards;\n}\n@keyframes box-show-0-data-v-086ac312 {\n0%,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n0% {\n    opacity: 0;\n    transform: translate3d(0, -15rem, 0) scaleY(1);\n}\n60% {\n    opacity: 1;\n    transform: translate3d(0, 0rem, 0) scaleY(0.7);\n}\n75% {\n    transform: translate3d(0, 0rem, 0) scaleY(1.2);\n}\n90% {\n    transform: translate3d(0, 0rem, 0) scaleY(1);\n}\nto {\n    transform: none;\n}\n}\n.shadow .container .box .light[data-v-086ac312] {\n  position: absolute;\n  top: -1.1rem;\n  left: -0.2rem;\n  opacity: 0;\n  width: 3.75rem;\n  height: 3.76rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/light2.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  animation: lightShow-data-v-086ac312 0.1s 1.4s linear forwards,light-rotate-data-v-086ac312 9s linear infinite;\n}\n@keyframes lightShow-data-v-086ac312 {\nto {\n    opacity: 1;\n}\n}\n@keyframes light-rotate-data-v-086ac312 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n.shadow .container .box .dialog[data-v-086ac312] {\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n  right: 0;\n  margin: auto;\n  width: 3.105rem;\n  height: 3.17rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/sprites.png');\n  background-size: 3.105rem 15.85rem;\n  background-repeat: no-repeat;\n  transform-origin: center bottom;\n  animation: dialog-shake-data-v-086ac312 0.5s 0.8s linear forwards,dialog-box-data-v-086ac312 0.4s 1.3s steps(1) forwards;\n}\n@keyframes dialog-shake-data-v-086ac312 {\n0%,\n  30%,\n  60% {\n    transform: rotate(0deg);\n}\n15% {\n    transform: rotate(6deg);\n}\n45% {\n    transform: rotate(-6deg);\n}\n80% {\n    transform: rotate(0) scaleY(0.7);\n}\n100% {\n    transform: rotate(0) scaleY(1);\n}\n}\n@keyframes dialog-box-data-v-086ac312 {\n0% {\n    background-position-y: 0rem;\n    transform: scaleX(1) scaleY(1);\n}\n25% {\n    background-position-y: -3.17rem;\n    transform: scaleX(0.9) scaleY(1.15);\n}\n50% {\n    background-position-y: -6.34rem;\n    transform: scaleX(0.95) scaleY(1.08);\n}\n75% {\n    background-position-y: -9.51rem;\n    transform: scaleX(0.98) scaleY(1.04);\n}\n100% {\n    background-position-y: -12.68rem;\n    transform: scaleX(1) scaleY(1);\n}\n}\n.shadow .container .box .dialog .name-wrap[data-v-086ac312] {\n  text-align: center;\n}\n.shadow .container .box .dialog .name-wrap .name[data-v-086ac312] {\n  position: relative;\n  top: 1.025rem;\n  padding: 0.02rem 0.25rem;\n  background-color: #ed8117;\n  border-radius: 0.115rem;\n  font-size: 0.12rem;\n  line-height: 0.16rem;\n  font-family: 'SourceHanSansSC';\n  color: #fff;\n  font-weight: 400;\n  opacity: 0;\n  animation: nameShow-data-v-086ac312 0.2s 1.4s linear forwards;\n}\n@keyframes nameShow-data-v-086ac312 {\nto {\n    opacity: 1;\n}\n}\n.shadow .container .box .dialog .con[data-v-086ac312] {\n  width: 1.38rem;\n  height: 0.515rem;\n  position: absolute;\n  top: 0.8rem;\n  left: 0rem;\n  right: 0;\n  margin: auto;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/gongheilei.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  opacity: 0;\n  animation: conMove-data-v-086ac312 0.5s 1.3s linear forwards;\n}\n@keyframes conMove-data-v-086ac312 {\n0% {\n    transform: translate3d(0, 0, 0) rotate(-6deg);\n    opacity: 0;\n}\n50% {\n    transform: translate3d(0, -1rem, 0) rotate(-6deg);\n    opacity: 1;\n}\n100% {\n    transform: translate3d(0, -1rem, 0) rotate(0);\n    opacity: 1;\n}\n}\n.shadow .container .box .dialog .btn[data-v-086ac312] {\n  position: absolute;\n  bottom: 0.13rem;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  margin: auto;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/btn.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  width: 1.11rem;\n  height: 1.105rem;\n  animation: btnShow-data-v-086ac312 0.2s 1.4s linear forwards,btn-scale-data-v-086ac312 0.6s 1.6s linear infinite;\n}\n@keyframes btnShow-data-v-086ac312 {\nto {\n    bottom: -0.25rem;\n    opacity: 1;\n}\n}\n@keyframes btn-scale-data-v-086ac312 {\n0%,\n  100% {\n    transform: scale(1);\n}\n50% {\n    transform: scale(1.2);\n}\n}\n.shadow .container .box .coupon[data-v-086ac312] {\n  position: absolute;\n  top: 0.4rem;\n  left: 0rem;\n  right: 0;\n  margin: auto;\n  width: 2.99rem;\n  height: 1.425rem;\n  padding: 0;\n  transform: scaleY(0);\n  transform-origin: center bottom;\n  background-color: #fff;\n  border: 0.03rem solid white;\n  border-radius: 0.05rem;\n  overflow: hidden;\n  animation: couponShow-data-v-086ac312 0.2s 1.3s linear forwards;\n}\n@keyframes couponShow-data-v-086ac312 {\n0% {\n    transform: scaleY(0);\n}\n33% {\n    transform: scaleY(0.1);\n}\n67% {\n    transform: scaleY(0.3);\n}\n100% {\n    transform: scaleY(1);\n}\n}\n.shadow .container .box .coupon img[data-v-086ac312] {\n  display: block;\n  width: 2.99rem;\n  height: 1.425rem;\n}\n.shadow .container .box .smoke[data-v-086ac312] {\n  pointer-events: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  top: 1.75rem;\n  left: 0rem;\n  transform: scale(2);\n  right: 0;\n  margin: auto;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/smoke.png');\n  background-size: 21rem 1.5rem;\n  background-repeat: no-repeat;\n  animation-name: keyframes-smoke-data-v-086ac312;\n  animation-duration: 0.5s;\n  animation-delay: 0.25s;\n  opacity: 0;\n  animation-iteration-count: forwards;\n  animation-fill-mode: forwards;\n  animation-timing-function: steps(1);\n}\n@keyframes keyframes-smoke-data-v-086ac312 {\n0% {\n    opacity: 1;\n    width: 1.5rem;\n    height: 1.5rem;\n    background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/smoke.png');\n    background-size: 21rem 1.5rem;\n}\n7.14% {\n    background-position: -1.5rem 0rem;\n}\n14.29% {\n    background-position: -3rem 0rem;\n}\n21.43% {\n    background-position: -4.5rem 0rem;\n}\n28.57% {\n    background-position: -6rem 0rem;\n}\n35.71% {\n    background-position: -7.5rem 0rem;\n}\n42.86% {\n    background-position: -9rem 0rem;\n}\n50.00% {\n    background-position: -10.5rem 0rem;\n}\n57.14% {\n    background-position: -12rem 0rem;\n}\n64.29% {\n    background-position: -13.5rem 0rem;\n}\n71.43% {\n    background-position: -15rem 0rem;\n}\n78.57% {\n    background-position: -16.5rem 0rem;\n}\n85.71% {\n    background-position: -18rem 0rem;\n    opacity: 1;\n}\n92.86%,\n  100% {\n    background-position: -19.5rem 0rem;\n    opacity: 0;\n}\n}\n.shadow .container .colors[data-v-086ac312] {\n  pointer-events: none;\n  width: 3.75rem;\n  height: 4rem;\n  transform: scale(1.6);\n  position: absolute;\n  top: 1rem;\n  left: 0rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/icons.png');\n  background-size: 41.25rem 4rem;\n  background-repeat: no-repeat;\n  animation-name: keyframes-icons-data-v-086ac312;\n  animation-duration: 0.6s;\n  animation-delay: 1.3s;\n  opacity: 0;\n  animation-iteration-count: forwards;\n  animation-fill-mode: forwards;\n  animation-timing-function: steps(1);\n}\n@keyframes keyframes-icons-data-v-086ac312 {\n0% {\n    width: 3.75rem;\n    height: 4rem;\n    background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/icons.png');\n    background-size: 41.25rem 4rem;\n    opacity: 1;\n}\n9.09% {\n    background-position: -3.75rem 0rem;\n}\n18.18% {\n    background-position: -7.5rem 0rem;\n}\n27.27% {\n    background-position: -11.25rem 0rem;\n}\n36.36% {\n    background-position: -15rem 0rem;\n}\n45.45% {\n    background-position: -18.75rem 0rem;\n}\n54.55% {\n    background-position: -22.5rem 0rem;\n}\n63.64% {\n    background-position: -26.25rem 0rem;\n}\n72.73% {\n    background-position: -30rem 0rem;\n}\n81.82% {\n    background-position: -33.75rem 0rem;\n}\n90.91%,\n  100% {\n    background-position: -37.5rem 0rem;\n    opacity: 0;\n}\n}\n", map: {"version":3,"sources":["SkinDemo.vue","/Users/gaobaoxiang/code/wondersgroup-web-front/tech/remote-component-main/rollup/components/skin/SkinDemo.vue"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,eAAe;EACf,MAAM;EACN,OAAO;EACP,cAAc;AAChB;AACA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,MAAM;EACN,OAAO;AACT;AACA;EACE,WAAW;EACX,eAAe;EACf,WAAW;EACX,eAAe;EACf,aAAa;EACb,cAAc;EACd,sEAAsE;EACtE,0BAA0B;EAC1B,4BAA4B;EAC5B,UAAU;EACV,wDAAwC;AAC1C;AACA;AACE;IACE,UAAU;AACZ;AACA;IACE,UAAU;AACZ;AACF;AACA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;ECCZ,QAAA;EDCE,SAAS;ECCX,YAAA;EACA,aAAA;EACA,gBAAA;EACA,+BAAA;EACA,0DAAA;AACA;AACA;AACA;;;;;IAKA,8DAAA;AACA;AACA;IACA,UAAA;IACA,8CAAA;AACA;AACA;IDCI,UAAU;ICCd,8CAAA;AACA;AACA;IACA,8CAAA;AACA;AACA;IACA,4CAAA;AACA;ADCE;ICCF,eAAA;AACA;AACA;AACA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EACA,UAAA;EACA,cAAA;EACA,eAAA;EACA,uEAAA;EACA,0BAAA;EACA,4BAAA;EACA,8GAAA;AACA;AACA;AACA;IACA,UAAA;AACA;AACA;AACA;AACA;IACA,uBAAA;AACA;AACA;IACA,yBAAA;AACA;AACA;AACA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,wEAAA;EACA,kCAAA;EACA,4BAAA;EACA,+BAAA;EACA,wHAAA;AACA;AACA;AACA;;;IAGA,uBAAA;AACA;AACA;IACA,uBAAA;AACA;AACA;IACA,wBAAA;AACA;AACA;IACA,gCAAA;AACA;AACA;IACA,8BAAA;AACA;AACA;AACA;AACA;IACA,2BAAA;IACA,8BAAA;AACA;AACA;IACA,+BAAA;IACA,mCAAA;AACA;AACA;IACA,+BAAA;IACA,oCAAA;AACA;AACA;IACA,+BAAA;IACA,oCAAA;AACA;AACA;IACA,gCAAA;IACA,8BAAA;AACA;AACA;AACA;EACA,kBAAA;AACA;AACA;EACA,kBAAA;EACA,aAAA;EACA,wBAAA;EACA,yBAAA;EACA,uBAAA;EACA,kBAAA;EACA,oBAAA;EACA,8BAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,6DAAA;AACA;AACA;AACA;IACA,UAAA;AACA;AACA;AACA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,2EAAA;EACA,0BAAA;EACA,4BAAA;EACA,UAAA;EACA,4DAAA;AACA;AACA;AACA;IACA,6CAAA;IACA,UAAA;AACA;AACA;IACA,iDAAA;IACA,UAAA;AACA;AACA;IACA,6CAAA;IACA,UAAA;AACA;AACA;AACA;EACA,kBAAA;EACA,eAAA;EACA,OAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,oEAAA;EACA,0BAAA;EACA,4BAAA;EACA,cAAA;EACA,gBAAA;EACA,gHAAA;AACA;AACA;AACA;IACA,gBAAA;IACA,UAAA;AACA;AACA;AACA;AACA;;IAEA,mBAAA;AACA;AACA;IACA,qBAAA;AACA;AACA;AACA;EACA,kBAAA;EACA,WAAA;EACA,UAAA;EACA,QAAA;EACA,YAAA;EACA,cAAA;EACA,gBAAA;EACA,UAAA;EACA,oBAAA;EACA,+BAAA;EACA,sBAAA;EACA,2BAAA;EACA,sBAAA;EACA,gBAAA;EACA,+DAAA;AACA;AACA;AACA;IACA,oBAAA;AACA;AACA;IACA,sBAAA;AACA;AACA;IACA,sBAAA;AACA;AACA;IACA,oBAAA;AACA;AACA;AACA;EACA,cAAA;EACA,cAAA;EACA,gBAAA;AACA;AACA;EACA,oBAAA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,YAAA;EACA,UAAA;EACA,mBAAA;EACA,QAAA;EACA,YAAA;EACA,sEAAA;EACA,6BAAA;EACA,4BAAA;EACA,+CAAA;EACA,wBAAA;EACA,sBAAA;EACA,UAAA;EACA,mCAAA;EACA,6BAAA;EACA,mCAAA;AACA;AACA;AACA;IACA,UAAA;IACA,aAAA;IACA,cAAA;IACA,sEAAA;IACA,6BAAA;AACA;AACA;IACA,iCAAA;AACA;AACA;IACA,+BAAA;AACA;AACA;IACA,iCAAA;AACA;AACA;IACA,+BAAA;AACA;AACA;IACA,iCAAA;AACA;AACA;IACA,+BAAA;AACA;AACA;IACA,kCAAA;AACA;AACA;IACA,gCAAA;AACA;AACA;IACA,kCAAA;AACA;AACA;IACA,gCAAA;AACA;AACA;IDCI,kCAAkC;ACCtC;AACA;IACA,gCAAA;IACA,UAAA;AACA;AACA;;IAEA,kCAAA;IDCI,UAAU;ACCd;AACA;AACA;EDCE,oBAAoB;ECCtB,cAAA;EACA,YAAA;EACA,qBAAA;EDCE,kBAAkB;ECCpB,SAAA;EACA,UAAA;EACA,sEAAA;EDCE,8BAA8B;ECChC,4BAAA;EACA,+CAAA;EACA,wBAAA;EDCE,qBAAqB;ECCvB,UAAA;EACA,mCAAA;EACA,6BAAA;EDCE,mCAAmC;ACCrC;AACA;AACA;IDCI,cAAc;ICClB,YAAA;IACA,sEAAA;IACA,8BAAA;IDCI,UAAU;ACCd;AACA;IACA,kCAAA;ADCE;ACCF;IACA,iCAAA;AACA;ADCE;ICCF,mCAAA;AACA;AACA;IDCI,gCAAgC;ACCpC;AACA;IACA,mCAAA;ADCE;ACCF;IACA,kCAAA;AACA;AACA;IDCI,mCAAmC;ACCvC;AACA;IACA,gCAAA;AACA;AACA;IACA,mCAAA;AACA;AACA;;IAEA,kCAAA;IACA,UAAA;AACA;AACA","file":"SkinDemo.vue","sourcesContent":[".shadow {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n}\n.shadow .container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  top: 0;\n  left: 0;\n}\n.shadow .container .close {\n  z-index: 20;\n  position: fixed;\n  top: 0.6rem;\n  right: 0.225rem;\n  width: 0.3rem;\n  height: 0.3rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/close.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  opacity: 0;\n  animation: close-show 0.1s 1.5s forwards;\n}\n@keyframes close-show {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.shadow .container .box {\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 3.3rem;\n  height: 3.505rem;\n  transform-origin: center bottom;\n  animation: box-show-0 0.6s linear forwards;\n}\n@keyframes box-show-0 {\n  0%,\n  60%,\n  75%,\n  90%,\n  to {\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -15rem, 0) scaleY(1);\n  }\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 0rem, 0) scaleY(0.7);\n  }\n  75% {\n    transform: translate3d(0, 0rem, 0) scaleY(1.2);\n  }\n  90% {\n    transform: translate3d(0, 0rem, 0) scaleY(1);\n  }\n  to {\n    transform: none;\n  }\n}\n.shadow .container .box .light {\n  position: absolute;\n  top: -1.1rem;\n  left: -0.2rem;\n  opacity: 0;\n  width: 3.75rem;\n  height: 3.76rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/light2.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  animation: lightShow 0.1s 1.4s linear forwards, light-rotate 9s linear infinite;\n}\n@keyframes lightShow {\n  to {\n    opacity: 1;\n  }\n}\n@keyframes light-rotate {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.shadow .container .box .dialog {\n  position: absolute;\n  top: 0rem;\n  left: 0rem;\n  right: 0;\n  margin: auto;\n  width: 3.105rem;\n  height: 3.17rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/sprites.png');\n  background-size: 3.105rem 15.85rem;\n  background-repeat: no-repeat;\n  transform-origin: center bottom;\n  animation: dialog-shake 0.5s 0.8s linear forwards, dialog-box 0.4s 1.3s steps(1) forwards;\n}\n@keyframes dialog-shake {\n  0%,\n  30%,\n  60% {\n    transform: rotate(0deg);\n  }\n  15% {\n    transform: rotate(6deg);\n  }\n  45% {\n    transform: rotate(-6deg);\n  }\n  80% {\n    transform: rotate(0) scaleY(0.7);\n  }\n  100% {\n    transform: rotate(0) scaleY(1);\n  }\n}\n@keyframes dialog-box {\n  0% {\n    background-position-y: 0rem;\n    transform: scaleX(1) scaleY(1);\n  }\n  25% {\n    background-position-y: -3.17rem;\n    transform: scaleX(0.9) scaleY(1.15);\n  }\n  50% {\n    background-position-y: -6.34rem;\n    transform: scaleX(0.95) scaleY(1.08);\n  }\n  75% {\n    background-position-y: -9.51rem;\n    transform: scaleX(0.98) scaleY(1.04);\n  }\n  100% {\n    background-position-y: -12.68rem;\n    transform: scaleX(1) scaleY(1);\n  }\n}\n.shadow .container .box .dialog .name-wrap {\n  text-align: center;\n}\n.shadow .container .box .dialog .name-wrap .name {\n  position: relative;\n  top: 1.025rem;\n  padding: 0.02rem 0.25rem;\n  background-color: #ed8117;\n  border-radius: 0.115rem;\n  font-size: 0.12rem;\n  line-height: 0.16rem;\n  font-family: 'SourceHanSansSC';\n  color: #fff;\n  font-weight: 400;\n  opacity: 0;\n  animation: nameShow 0.2s 1.4s linear forwards;\n}\n@keyframes nameShow {\n  to {\n    opacity: 1;\n  }\n}\n.shadow .container .box .dialog .con {\n  width: 1.38rem;\n  height: 0.515rem;\n  position: absolute;\n  top: 0.8rem;\n  left: 0rem;\n  right: 0;\n  margin: auto;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/gongheilei.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  opacity: 0;\n  animation: conMove 0.5s 1.3s linear forwards;\n}\n@keyframes conMove {\n  0% {\n    transform: translate3d(0, 0, 0) rotate(-6deg);\n    opacity: 0;\n  }\n  50% {\n    transform: translate3d(0, -1rem, 0) rotate(-6deg);\n    opacity: 1;\n  }\n  100% {\n    transform: translate3d(0, -1rem, 0) rotate(0);\n    opacity: 1;\n  }\n}\n.shadow .container .box .dialog .btn {\n  position: absolute;\n  bottom: 0.13rem;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  margin: auto;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/btn.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  width: 1.11rem;\n  height: 1.105rem;\n  animation: btnShow 0.2s 1.4s linear forwards, btn-scale 0.6s 1.6s linear infinite;\n}\n@keyframes btnShow {\n  to {\n    bottom: -0.25rem;\n    opacity: 1;\n  }\n}\n@keyframes btn-scale {\n  0%,\n  100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n}\n.shadow .container .box .coupon {\n  position: absolute;\n  top: 0.4rem;\n  left: 0rem;\n  right: 0;\n  margin: auto;\n  width: 2.99rem;\n  height: 1.425rem;\n  padding: 0;\n  transform: scaleY(0);\n  transform-origin: center bottom;\n  background-color: #fff;\n  border: 0.03rem solid white;\n  border-radius: 0.05rem;\n  overflow: hidden;\n  animation: couponShow 0.2s 1.3s linear forwards;\n}\n@keyframes couponShow {\n  0% {\n    transform: scaleY(0);\n  }\n  33% {\n    transform: scaleY(0.1);\n  }\n  67% {\n    transform: scaleY(0.3);\n  }\n  100% {\n    transform: scaleY(1);\n  }\n}\n.shadow .container .box .coupon img {\n  display: block;\n  width: 2.99rem;\n  height: 1.425rem;\n}\n.shadow .container .box .smoke {\n  pointer-events: none;\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  top: 1.75rem;\n  left: 0rem;\n  transform: scale(2);\n  right: 0;\n  margin: auto;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/smoke.png');\n  background-size: 21rem 1.5rem;\n  background-repeat: no-repeat;\n  animation-name: keyframes-smoke;\n  animation-duration: 0.5s;\n  animation-delay: 0.25s;\n  opacity: 0;\n  animation-iteration-count: forwards;\n  animation-fill-mode: forwards;\n  animation-timing-function: steps(1);\n}\n@keyframes keyframes-smoke {\n  0% {\n    opacity: 1;\n    width: 1.5rem;\n    height: 1.5rem;\n    background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/smoke.png');\n    background-size: 21rem 1.5rem;\n  }\n  7.14% {\n    background-position: -1.5rem 0rem;\n  }\n  14.29% {\n    background-position: -3rem 0rem;\n  }\n  21.43% {\n    background-position: -4.5rem 0rem;\n  }\n  28.57% {\n    background-position: -6rem 0rem;\n  }\n  35.71% {\n    background-position: -7.5rem 0rem;\n  }\n  42.86% {\n    background-position: -9rem 0rem;\n  }\n  50.00% {\n    background-position: -10.5rem 0rem;\n  }\n  57.14% {\n    background-position: -12rem 0rem;\n  }\n  64.29% {\n    background-position: -13.5rem 0rem;\n  }\n  71.43% {\n    background-position: -15rem 0rem;\n  }\n  78.57% {\n    background-position: -16.5rem 0rem;\n  }\n  85.71% {\n    background-position: -18rem 0rem;\n    opacity: 1;\n  }\n  92.86%,\n  100% {\n    background-position: -19.5rem 0rem;\n    opacity: 0;\n  }\n}\n.shadow .container .colors {\n  pointer-events: none;\n  width: 3.75rem;\n  height: 4rem;\n  transform: scale(1.6);\n  position: absolute;\n  top: 1rem;\n  left: 0rem;\n  background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/icons.png');\n  background-size: 41.25rem 4rem;\n  background-repeat: no-repeat;\n  animation-name: keyframes-icons;\n  animation-duration: 0.6s;\n  animation-delay: 1.3s;\n  opacity: 0;\n  animation-iteration-count: forwards;\n  animation-fill-mode: forwards;\n  animation-timing-function: steps(1);\n}\n@keyframes keyframes-icons {\n  0% {\n    width: 3.75rem;\n    height: 4rem;\n    background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/icons.png');\n    background-size: 41.25rem 4rem;\n    opacity: 1;\n  }\n  9.09% {\n    background-position: -3.75rem 0rem;\n  }\n  18.18% {\n    background-position: -7.5rem 0rem;\n  }\n  27.27% {\n    background-position: -11.25rem 0rem;\n  }\n  36.36% {\n    background-position: -15rem 0rem;\n  }\n  45.45% {\n    background-position: -18.75rem 0rem;\n  }\n  54.55% {\n    background-position: -22.5rem 0rem;\n  }\n  63.64% {\n    background-position: -26.25rem 0rem;\n  }\n  72.73% {\n    background-position: -30rem 0rem;\n  }\n  81.82% {\n    background-position: -33.75rem 0rem;\n  }\n  90.91%,\n  100% {\n    background-position: -37.5rem 0rem;\n    opacity: 0;\n  }\n}\n","<template>\n  <section :class=\"{ shadow: true }\">\n    <div class=\"container\">\n      <CpClose v-bind=\"$props\" />\n\n      <div class=\"ad\"></div>\n      <div class=\"box\">\n        <div class=\"light\"></div>\n        <div class=\"dialog\">\n          <div class=\"name-wrap\">\n            <CpTitle v-bind=\"$props\" :clickable=\"true\" />\n          </div>\n          <div class=\"con\"></div>\n          <CpButton v-bind=\"$props\"></CpButton>\n        </div>\n        <div class=\"smoke\"></div>\n        <div class=\"coupon\">\n          <CpDetail v-bind=\"$props\" :isPic=\"true\" />\n        </div>\n      </div>\n      <div class=\"colors\"></div>\n    </div>\n  </section>\n</template>\n\n<script>\nexport default {\n  name: 'coupon-modal-888',\n  props: {\n    lottery: {\n      type: Object,\n      required: true,\n    },\n  },\n  mounted() {\n    console.log('订单')\n  },\n}\n</script>\n\n<style lang=\"less\" scoped>\n@topx: 1 / 200rem;\n\n.wd(@w, @h) {\n  width: @w * @topx;\n  height: @h * @topx;\n}\n.bg(@url) {\n  background-image: url(@url);\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n}\n.ps(@t, @l) {\n  position: absolute;\n  top: @t * @topx;\n  left: @l * @topx;\n}\n.pr(@t, @r) {\n  position: absolute;\n  top: @t * @topx;\n  right: @r * @topx;\n}\n\n&.shadow {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10000;\n\n  .container {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    top: 0;\n    left: 0;\n    .close {\n      z-index: 20;\n      position: fixed;\n      top: 120 * @topx;\n      right: 45 * @topx;\n      .wd(60, 60);\n      .bg('//yun.dui88.com/tuia/cdn/h5test/img/close.png');\n      opacity: 0;\n      animation: close-show 0.1s 1.5s forwards;\n      @keyframes close-show {\n        0% {\n          opacity: 0;\n        }\n        100% {\n          opacity: 1;\n        }\n      }\n    }\n    .box {\n      .ps(0, 0);\n      right: 0;\n      bottom: 0;\n      margin: auto;\n      .wd(660, 701);\n      transform-origin: center bottom;\n      animation: box-show-0 0.6s linear forwards;\n      @keyframes box-show-0 {\n        0%,\n        60%,\n        75%,\n        90%,\n        to {\n          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n        }\n        0% {\n          opacity: 0;\n          transform: translate3d(0, -3000 * @topx, 0) scaleY(1);\n        }\n        60% {\n          opacity: 1;\n          transform: translate3d(0, 0 * @topx, 0) scaleY(0.7);\n        }\n        75% {\n          transform: translate3d(0, 0 * @topx, 0) scaleY(1.2);\n        }\n        90% {\n          transform: translate3d(0, 0 * @topx, 0) scaleY(1);\n        }\n        to {\n          transform: none;\n        }\n      }\n      .light {\n        position: absolute;\n        top: -220 * @topx;\n        left: -40 * @topx;\n        opacity: 0;\n        .wd(750, 752);\n        .bg('//yun.dui88.com/tuia/cdn/h5test/img/light2.png');\n        animation: lightShow 0.1s 1.4s linear forwards,\n          light-rotate 9s linear infinite;\n        @keyframes lightShow {\n          to {\n            opacity: 1;\n          }\n        }\n        @keyframes light-rotate {\n          0% {\n            transform: rotate(0deg);\n          }\n          100% {\n            transform: rotate(360deg);\n          }\n        }\n      }\n      .dialog {\n        .ps(0, 0);\n        right: 0;\n        margin: auto;\n        width: 621 * @topx;\n        height: 634 * @topx;\n        background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/sprites.png');\n        background-size: 621 * @topx 3170 * @topx;\n        background-repeat: no-repeat;\n        transform-origin: center bottom;\n        animation: dialog-shake 0.5s 0.8s linear forwards,\n          dialog-box 0.4s 1.3s steps(1) forwards;\n        @keyframes dialog-shake {\n          0%,\n          30%,\n          60% {\n            transform: rotate(0deg);\n          }\n          15% {\n            transform: rotate(6deg);\n          }\n          45% {\n            transform: rotate(-6deg);\n          }\n          80% {\n            transform: rotate(0) scaleY(0.7);\n          }\n          100% {\n            transform: rotate(0) scaleY(1);\n          }\n        }\n        @keyframes dialog-box {\n          0% {\n            background-position-y: 0 * @topx;\n            transform: scaleX(1) scaleY(1);\n          }\n          25% {\n            background-position-y: -634 * @topx;\n            transform: scaleX(0.9) scaleY(1.15);\n          }\n          50% {\n            background-position-y: -1268 * @topx;\n            transform: scaleX(0.95) scaleY(1.08);\n          }\n          75% {\n            background-position-y: -1902 * @topx;\n            transform: scaleX(0.98) scaleY(1.04);\n          }\n          100% {\n            background-position-y: -2536 * @topx;\n            transform: scaleX(1) scaleY(1);\n          }\n        }\n        .name-wrap {\n          text-align: center;\n          .name {\n            position: relative;\n            top: 205 * @topx;\n            padding: 4 * @topx 50 * @topx;\n            background-color: #ed8117;\n            border-radius: 23 * @topx;\n            font-size: 24 * @topx;\n            line-height: 32 * @topx;\n            font-family: 'SourceHanSansSC';\n            color: #fff;\n            font-weight: 400;\n            opacity: 0;\n            animation: nameShow 0.2s 1.4s linear forwards;\n            @keyframes nameShow {\n              to {\n                opacity: 1;\n              }\n            }\n          }\n        }\n        .con {\n          .wd(276, 103);\n          .ps(160, 0);\n          right: 0;\n          margin: auto;\n          .bg('//yun.dui88.com/tuia/cdn/h5test/img/gongheilei.png');\n          opacity: 0;\n          animation: conMove 0.5s 1.3s linear forwards;\n          @keyframes conMove {\n            0% {\n              transform: translate3d(0, 0, 0) rotate(-6deg);\n              opacity: 0;\n            }\n            50% {\n              transform: translate3d(0, -200 * @topx, 0) rotate(-6deg);\n              opacity: 1;\n            }\n            100% {\n              transform: translate3d(0, -200 * @topx, 0) rotate(0);\n              opacity: 1;\n            }\n          }\n        }\n        .btn {\n          position: absolute;\n          bottom: 26 * @topx;\n          left: 0;\n          right: 0;\n          opacity: 0;\n          margin: auto;\n          .bg('//yun.dui88.com/tuia/cdn/h5test/img/btn.png');\n          .wd(222, 221);\n          animation: btnShow 0.2s 1.4s linear forwards,\n            btn-scale 0.6s 1.6s linear infinite;\n          @keyframes btnShow {\n            to {\n              bottom: -50 * @topx;\n              opacity: 1;\n            }\n          }\n          @keyframes btn-scale {\n            0%,\n            100% {\n              transform: scale(1);\n            }\n            50% {\n              transform: scale(1.2);\n            }\n          }\n        }\n      }\n      .coupon {\n        .ps(80, 0);\n        right: 0;\n        margin: auto;\n        .wd(598, 285);\n        padding: 0;\n        transform: scaleY(0);\n        border-radius: 10 * @topx;\n        transform-origin: center bottom;\n        background-color: #fff;\n        border: 6 * @topx solid white;\n        border-radius: 10 * @topx;\n        overflow: hidden;\n        animation: couponShow 0.2s 1.3s linear forwards;\n        @keyframes couponShow {\n          0% {\n            transform: scaleY(0);\n          }\n          33% {\n            transform: scaleY(0.1);\n          }\n          67% {\n            transform: scaleY(0.3);\n          }\n          100% {\n            transform: scaleY(1);\n          }\n        }\n        img {\n          display: block;\n          .wd(598, 285);\n        }\n      }\n      .smoke {\n        pointer-events: none;\n        width: 300 * @topx;\n        height: 300 * @topx;\n        .ps(350, 0);\n        transform: scale(2);\n        right: 0;\n        margin: auto;\n        background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/smoke.png');\n        background-size: 4200 * @topx 300 * @topx;\n        background-repeat: no-repeat;\n        animation-name: keyframes-smoke;\n        animation-duration: 0.5s;\n        animation-delay: 0.25s;\n        opacity: 0;\n        animation-iteration-count: forwards;\n        animation-fill-mode: forwards;\n        animation-timing-function: steps(1);\n\n        @keyframes keyframes-smoke {\n          0% {\n            opacity: 1;\n            width: 300 * @topx;\n            height: 300 * @topx;\n            background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/smoke.png');\n            background-size: 4200 * @topx 300 * @topx;\n          }\n\n          7.14% {\n            background-position: -300 * @topx 0 * @topx;\n          }\n\n          14.29% {\n            background-position: -600 * @topx 0 * @topx;\n          }\n\n          21.43% {\n            background-position: -900 * @topx 0 * @topx;\n          }\n\n          28.57% {\n            background-position: -1200 * @topx 0 * @topx;\n          }\n\n          35.71% {\n            background-position: -1500 * @topx 0 * @topx;\n          }\n\n          42.86% {\n            background-position: -1800 * @topx 0 * @topx;\n          }\n\n          50.00% {\n            background-position: -2100 * @topx 0 * @topx;\n          }\n\n          57.14% {\n            background-position: -2400 * @topx 0 * @topx;\n          }\n\n          64.29% {\n            background-position: -2700 * @topx 0 * @topx;\n          }\n\n          71.43% {\n            background-position: -3000 * @topx 0 * @topx;\n          }\n\n          78.57% {\n            background-position: -3300 * @topx 0 * @topx;\n          }\n\n          85.71% {\n            background-position: -3600 * @topx 0 * @topx;\n            opacity: 1;\n          }\n\n          92.86%,\n          100% {\n            background-position: -3900 * @topx 0 * @topx;\n            opacity: 0;\n          }\n        }\n      }\n    }\n    .colors {\n      pointer-events: none;\n      width: 750 * @topx;\n      height: 800 * @topx;\n      transform: scale(1.6);\n      .ps(200, 0);\n      background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/icons.png');\n      background-size: 8250 * @topx 800 * @topx;\n      background-repeat: no-repeat;\n      animation-name: keyframes-icons;\n      animation-duration: 0.6s;\n      animation-delay: 1.3s;\n      opacity: 0;\n      animation-iteration-count: forwards;\n      animation-fill-mode: forwards;\n      animation-timing-function: steps(1);\n      @keyframes keyframes-icons {\n        0% {\n          width: 750 * @topx;\n          height: 800 * @topx;\n          background-image: url('//yun.dui88.com/tuia/cdn/h5test/img/icons.png');\n          background-size: 8250 * @topx 800 * @topx;\n          opacity: 1;\n        }\n\n        9.09% {\n          background-position: -750 * @topx 0 * @topx;\n        }\n\n        18.18% {\n          background-position: -1500 * @topx 0 * @topx;\n        }\n\n        27.27% {\n          background-position: -2250 * @topx 0 * @topx;\n        }\n\n        36.36% {\n          background-position: -3000 * @topx 0 * @topx;\n        }\n\n        45.45% {\n          background-position: -3750 * @topx 0 * @topx;\n        }\n\n        54.55% {\n          background-position: -4500 * @topx 0 * @topx;\n        }\n\n        63.64% {\n          background-position: -5250 * @topx 0 * @topx;\n        }\n\n        72.73% {\n          background-position: -6000 * @topx 0 * @topx;\n        }\n\n        81.82% {\n          background-position: -6750 * @topx 0 * @topx;\n        }\n\n        90.91%,\n        100% {\n          background-position: -7500 * @topx 0 * @topx;\n          opacity: 0;\n        }\n      }\n    }\n  }\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-086ac312";
    /* module identifier */
    const __vue_module_identifier__$1 = undefined;
    /* functional template */
    const __vue_is_functional_template__$1 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
      __vue_inject_styles__$1,
      __vue_script__$1,
      __vue_scope_id__$1,
      __vue_is_functional_template__$1,
      __vue_module_identifier__$1,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  //
  //
  //
  //
  //
  var script = {
    name: 'advertisement'
  };

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_vm._v("\n  测试单文件打包\n")])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-f7f70646_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue"}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = undefined;
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__ = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      false,
      createInjector,
      undefined,
      undefined
    );

  var main = {
    skin: __vue_component__$1,
    advertisement: __vue_component__
  };

  return main;

})));
