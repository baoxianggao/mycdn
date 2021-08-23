(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('swiper'), require('@/assets/images/img3.png'), require('@/assets/images/right_arrow.png'), require('@/assets/images/left_arrow.png')) :
  typeof define === 'function' && define.amd ? define(['swiper', '@/assets/images/img3.png', '@/assets/images/right_arrow.png', '@/assets/images/left_arrow.png'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Organization = factory(global.Swiper, global.defalutImg, global.__$_require_assets_images_right_arrow_png__, global.__$_require_assets_images_left_arrow_png__));
}(this, (function (Swiper, defalutImg, __$_require_assets_images_right_arrow_png__, __$_require_assets_images_left_arrow_png__) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Swiper__default = /*#__PURE__*/_interopDefaultLegacy(Swiper);
  var defalutImg__default = /*#__PURE__*/_interopDefaultLegacy(defalutImg);
  var __$_require_assets_images_right_arrow_png____default = /*#__PURE__*/_interopDefaultLegacy(__$_require_assets_images_right_arrow_png__);
  var __$_require_assets_images_left_arrow_png____default = /*#__PURE__*/_interopDefaultLegacy(__$_require_assets_images_left_arrow_png__);

  //
  var script$2 = {
    name: 'Carousel',
    data: function() {
      return {
        defaultImg: defalutImg__default['default'],
        swiperList: [
          {
            time: '2015/09/01',
            title: '战略方向调整',
            icon: 'icon-link',
            details: '版本详情',
            events: '2021-02-01',
            number: 'VSX20190522',
            digest: '战略方向调整',
            img: defalutImg__default['default'],
            explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'
          },
          {
            time: '2015/09/02',
            title: '三定调整',
            icon: 'icon-link',
            details: '版本详情',
            events: '2021-02-01',
            number: 'VSX20190522',
            digest: '战略方向调整',
            img: defalutImg__default['default'],
            explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'
          },
          {
            time: '2015/09/03',
            title: '新业务调整',
            icon: 'icon-link',
            details: '版本详情',
            events: '2021-02-01',
            number: 'VSX20190522',
            digest: '战略方向调整',
            img: defalutImg__default['default'],
            explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'
          },
          {
            time: '2015/09/04',
            title: '战略方向调整',
            icon: 'icon-link',
            details: '版本详情',
            events: '2021-02-01',
            number: 'VSX20190522',
            digest: '战略方向调整',
            img: defalutImg__default['default'],
            explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'
          },
          {
            time: '2015/09/05',
            title: '央企改革调整',
            icon: 'icon-link',
            details: '版本详情',
            events: '2021-02-01',
            number: 'VSX20190522',
            digest: '战略方向调整',
            img: defalutImg__default['default'],
            explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'
          }
        ]
      }
    },
    props: {},

    mounted() {
      new Swiper__default['default']('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        freeMode: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
    },
    watch: {}
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
  const __vue_script__$2 = script$2;
  var __vue_render__$2 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", { staticClass: "swiper-container" }, [
        _c(
          "div",
          { staticClass: "swiper-wrapper" },
          _vm._l(_vm.swiperList, function(item) {
            return _c("div", { key: item.time, staticClass: "swiper-slide" }, [
              _c("span", { staticClass: "time-span" }, [
                _vm._v(_vm._s(item.time))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "carouse-content" }, [
                _c("span", { staticClass: "circle" }),
                _vm._v(" "),
                _c(
                  "p",
                  { staticClass: "title-text" },
                  [
                    _vm._v(
                      "\n            " + _vm._s(item.title) + "\n            "
                    ),
                    _c("icon-font", {
                      staticClass: "link-ico",
                      attrs: { type: item.icon }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "details" }, [
                  _c("span", [_vm._v(_vm._s(item.details))]),
                  _vm._v(" "),
                  _c("div", { staticClass: "deta-cont" }, [
                    _c("span", [_vm._v("收起")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "content-ps" }, [
                      _c("p", { staticClass: "form-text" }, [
                        _c("span", [_vm._v("版本形成事件：")]),
                        _vm._v(_vm._s(item.events))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "form-text" }, [
                        _c("span", [_vm._v("版本号：")]),
                        _vm._v(_vm._s(item.number))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "form-text" }, [
                        _c("span", [_vm._v("版本摘要：")]),
                        _vm._v(_vm._s(item.digest))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "form-text" }, [
                        _c("span", [_vm._v("版本详细说明：")]),
                        _vm._v(
                          "\n                  " +
                            _vm._s(item.explain) +
                            "\n                "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "see-more",
                          attrs: { href: "javascript:;" }
                        },
                        [
                          _vm._v("查看更多 "),
                          _c("a-icon", { attrs: { type: "right-circle" } })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "details" }, [
                  _c("span", [_vm._v("相关图片")]),
                  _vm._v(" "),
                  _c("div", { staticClass: "deta-cont" }, [
                    _c("span", [_vm._v("收起")]),
                    _vm._v(" "),
                    _c("div", { staticClass: "content-ps" }, [
                      _c("img", {
                        attrs: { src: item.img, width: "100%", alt: "" }
                      })
                    ])
                  ])
                ])
              ])
            ])
          }),
          0
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  };
  var __vue_staticRenderFns__$2 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "swiper-button-next" }, [
        _c("img", {
          attrs: { src: __$_require_assets_images_right_arrow_png____default['default'], alt: "" }
        })
      ])
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "swiper-button-prev" }, [
        _c("img", {
          attrs: { src: __$_require_assets_images_left_arrow_png____default['default'], alt: "" }
        })
      ])
    }
  ];
  __vue_render__$2._withStripped = true;

    /* style */
    const __vue_inject_styles__$2 = function (inject) {
      if (!inject) return
      inject("data-v-5cce5df2_0", { source: ".swiper-container[data-v-5cce5df2]::after {\n  content: '';\n  width: 100%;\n  height: 62px;\n  background: #f8f9fc;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.swiper-container[data-v-5cce5df2]::before {\n  content: '';\n  width: 95%;\n  height: 16px;\n  background: #e7e8ed;\n  position: absolute;\n  left: 22px;\n  top: 44px;\n  z-index: 1;\n}\n.swiper-container[data-v-5cce5df2] {\n  width: 100%;\n  padding: 0 25px;\n  box-sizing: border-box;\n  position: relative;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide[data-v-5cce5df2] {\n  transition: 300ms;\n  transform: scale(1);\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .time-span[data-v-5cce5df2] {\n  font-size: 18px;\n  color: #bbc2cc;\n  font-weight: 600;\n  display: block;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content[data-v-5cce5df2] {\n  position: relative;\n  border-left: 2px solid #e7e8ed;\n  z-index: 99;\n  margin-top: 20px;\n  margin-left: 40px;\n  min-height: 100px;\n  padding: 20px 20px 20px 0;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .circle[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .circle[data-v-5cce5df2] {\n  border: 5px solid #fff;\n  background: #b3b9c7;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: absolute;\n  top: -14px;\n  left: -10px;\n  box-shadow: 0px 2px 10px 0px #c9cdd8;\n  z-index: 99;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .title-text[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .title-text[data-v-5cce5df2] {\n  font-size: 16px;\n  color: #34414f;\n  letter-spacing: 0;\n  font-weight: 600;\n  margin-left: 20px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .title-text .link-ico[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .title-text .link-ico[data-v-5cce5df2] {\n  position: absolute;\n  left: 78%;\n  cursor: pointer;\n  color: #b3b9c7;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details[data-v-5cce5df2] {\n  font-size: 14px;\n  color: #7c8690;\n  letter-spacing: 0.01px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont[data-v-5cce5df2] {\n  display: none;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont span[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont span[data-v-5cce5df2] {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps[data-v-5cce5df2] {\n  display: none;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text[data-v-5cce5df2] {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text span[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text span[data-v-5cce5df2] {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .time-span[data-v-5cce5df2] {\n  font-size: 18px;\n  color: #1bb583;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content[data-v-5cce5df2]::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content[data-v-5cce5df2]::after {\n  content: '';\n  width: calc(100% + 68px);\n  height: 16px;\n  background: #95d0bd;\n  position: absolute;\n  top: -13px;\n  left: 0;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content[data-v-5cce5df2] {\n  border-color: #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .circle[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .circle[data-v-5cce5df2] {\n  background: #1bb583 !important;\n  width: 25px !important;\n  height: 25px !important;\n  top: -17px !important;\n  left: -13px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .title-text[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .title-text[data-v-5cce5df2] {\n  color: #1bb583 !important;\n  font-size: 18px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .title-text .link-ico[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .title-text .link-ico[data-v-5cce5df2] {\n  color: #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details[data-v-5cce5df2] {\n  font-size: 12px !important;\n  color: #34414f !important;\n  margin-bottom: 15px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont[data-v-5cce5df2] {\n  display: block !important;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont span[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont span[data-v-5cce5df2] {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps[data-v-5cce5df2] {\n  display: block !important;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text[data-v-5cce5df2] {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text span[data-v-5cce5df2],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text span[data-v-5cce5df2] {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont[data-v-5cce5df2] ::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont[data-v-5cce5df2] ::after {\n  content: '';\n  width: calc(100% - 90px);\n  border-top: 1px dashed rgba(151, 151, 151, 0.55);\n  position: absolute;\n  top: 8px;\n  left: 58px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details[data-v-5cce5df2]::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details[data-v-5cce5df2]::after {\n  content: '';\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #1bb583;\n  position: absolute;\n  top: 3px;\n  left: -6px;\n}\n.swiper-container .swiper-button-next[data-v-5cce5df2] {\n  right: 0;\n}\n.swiper-container .swiper-button-prev[data-v-5cce5df2] {\n  left: 0;\n}\n.swiper-container .swiper-button-next[data-v-5cce5df2],\n.swiper-container .swiper-button-prev[data-v-5cce5df2] {\n  width: 20px;\n  height: 62px;\n  border: 1px solid #f3f3f9;\n  background: #f5f6fa;\n  background-image: none;\n  text-align: center;\n  top: 3%;\n}\n.swiper-container .swiper-button-next img[data-v-5cce5df2],\n.swiper-container .swiper-button-prev img[data-v-5cce5df2] {\n  width: 8px;\n  height: 12px;\n  margin: 26px 0;\n}\n", map: {"version":3,"sources":["Carousel.vue","/Users/gaobaoxiang/code/wondersgroup-web-front/tech/remote-component-main/rollup/components/ComponentPage/Carousel.vue"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,OAAO;EACP,MAAM;AACR;AACA;EACE,WAAW;EACX,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,UAAU;AACZ;AACA;EACE,WAAW;EACX,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;AACA;;EAEE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;;EAEE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;AACA;;EAEE,kBAAkB;EAClB,8BAA8B;EAC9B,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;AACxB;AACA;;EAEE,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,oCAAoC;EACpC,WAAW;AACb;AACA;;EAEE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;;EAEE,kBAAkB;EAClB,SAAS;EACT,eAAe;EACf,cAAc;AAChB;AACA;;EAEE,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;;EAEE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB,WAAW;AACb;AACA;;EAEE,cAAc;AAChB;AACA;;EAEE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,gBAAgB;AAClB;AACA;;EAEE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;AAClB;AACA;;EAEE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;AACA;;EAEE,eAAe;EACf,cAAc;AAChB;AACA;;EAEE,WAAW;EACX,wBAAwB;EACxB,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,OAAO;AACT;ACCA;;EAEA,gCAAA;AACA;AACA;;EAEA,8BAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;EACA,sBAAA;AACA;AACA;;EAEA,yBAAA;EACA,0BAAA;AACA;AACA;;EAEA,yBAAA;AACA;AACA;;EAEA,0BAAA;EACA,yBAAA;EACA,mBAAA;AACA;AACA;;EAEA,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,iBAAA;EACA,WAAA;AACA;AACA;;EAEA,cAAA;AACA;AACA;;EAEA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;AACA;AACA;;EAEA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AACA;;EAEA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;;EAEA,WAAA;EACA,wBAAA;EACA,gDAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AACA;AACA;;EAEA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AACA;AACA;EACA,QAAA;AACA;AACA;EACA,OAAA;AACA;AACA;;EAEA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,OAAA;AACA;AACA;;EAEA,UAAA;EACA,YAAA;EACA,cAAA;AACA","file":"Carousel.vue","sourcesContent":[".swiper-container::after {\n  content: '';\n  width: 100%;\n  height: 62px;\n  background: #f8f9fc;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.swiper-container::before {\n  content: '';\n  width: 95%;\n  height: 16px;\n  background: #e7e8ed;\n  position: absolute;\n  left: 22px;\n  top: 44px;\n  z-index: 1;\n}\n.swiper-container {\n  width: 100%;\n  padding: 0 25px;\n  box-sizing: border-box;\n  position: relative;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active,\n.swiper-container .swiper-wrapper .swiper-slide {\n  transition: 300ms;\n  transform: scale(1);\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span,\n.swiper-container .swiper-wrapper .swiper-slide .time-span {\n  font-size: 18px;\n  color: #bbc2cc;\n  font-weight: 600;\n  display: block;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content {\n  position: relative;\n  border-left: 2px solid #e7e8ed;\n  z-index: 99;\n  margin-top: 20px;\n  margin-left: 40px;\n  min-height: 100px;\n  padding: 20px 20px 20px 0;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .circle,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .circle {\n  border: 5px solid #fff;\n  background: #b3b9c7;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: absolute;\n  top: -14px;\n  left: -10px;\n  box-shadow: 0px 2px 10px 0px #c9cdd8;\n  z-index: 99;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .title-text,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .title-text {\n  font-size: 16px;\n  color: #34414f;\n  letter-spacing: 0;\n  font-weight: 600;\n  margin-left: 20px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .title-text .link-ico,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .title-text .link-ico {\n  position: absolute;\n  left: 78%;\n  cursor: pointer;\n  color: #b3b9c7;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details {\n  font-size: 14px;\n  color: #7c8690;\n  letter-spacing: 0.01px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont {\n  display: none;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont span,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont span {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps {\n  display: none;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text span,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text span {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .time-span {\n  font-size: 18px;\n  color: #1bb583;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content::after {\n  content: '';\n  width: calc(100% + 68px);\n  height: 16px;\n  background: #95d0bd;\n  position: absolute;\n  top: -13px;\n  left: 0;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content {\n  border-color: #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .circle,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .circle {\n  background: #1bb583 !important;\n  width: 25px !important;\n  height: 25px !important;\n  top: -17px !important;\n  left: -13px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .title-text,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .title-text {\n  color: #1bb583 !important;\n  font-size: 18px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .title-text .link-ico,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .title-text .link-ico {\n  color: #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details {\n  font-size: 12px !important;\n  color: #34414f !important;\n  margin-bottom: 15px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont {\n  display: block !important;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont span,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont span {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps {\n  display: block !important;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text span,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text span {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont ::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont ::after {\n  content: '';\n  width: calc(100% - 90px);\n  border-top: 1px dashed rgba(151, 151, 151, 0.55);\n  position: absolute;\n  top: 8px;\n  left: 58px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details::after {\n  content: '';\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #1bb583;\n  position: absolute;\n  top: 3px;\n  left: -6px;\n}\n.swiper-container .swiper-button-next {\n  right: 0;\n}\n.swiper-container .swiper-button-prev {\n  left: 0;\n}\n.swiper-container .swiper-button-next,\n.swiper-container .swiper-button-prev {\n  width: 20px;\n  height: 62px;\n  border: 1px solid #f3f3f9;\n  background: #f5f6fa;\n  background-image: none;\n  text-align: center;\n  top: 3%;\n}\n.swiper-container .swiper-button-next img,\n.swiper-container .swiper-button-prev img {\n  width: 8px;\n  height: 12px;\n  margin: 26px 0;\n}\n","<template>\n  <div>\n    <div class=\"swiper-container\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" v-for=\"item of swiperList\" :key=\"item.time\">\n          <span class=\"time-span\">{{ item.time }}</span>\n          <div class=\"carouse-content\">\n            <span class=\"circle\"></span>\n            <p class=\"title-text\">\n              {{ item.title }}\n              <icon-font class=\"link-ico\" :type=\"item.icon\"></icon-font>\n            </p>\n            <div class=\"details\">\n              <span>{{ item.details }}</span>\n              <div class=\"deta-cont\">\n                <span>收起</span>\n                <div class=\"content-ps\">\n                  <p class=\"form-text\"><span>版本形成事件：</span>{{ item.events }}</p>\n                  <p class=\"form-text\"><span>版本号：</span>{{ item.number }}</p>\n                  <p class=\"form-text\"><span>版本摘要：</span>{{ item.digest }}</p>\n                  <p class=\"form-text\">\n                    <span>版本详细说明：</span>\n                    {{ item.explain }}\n                  </p>\n                  <a class=\"see-more\" href=\"javascript:;\">查看更多 <a-icon type=\"right-circle\"/></a>\n                </div>\n              </div>\n            </div>\n            <div class=\"details\">\n              <span>相关图片</span>\n              <div class=\"deta-cont\">\n                <span>收起</span>\n                <div class=\"content-ps\">\n                  <img :src=\"item.img\" width=\"100%\" alt=\"\" />\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"swiper-button-next\">\n        <img src=\"@/assets/images/right_arrow.png\" alt=\"\" />\n      </div>\n      <div class=\"swiper-button-prev\">\n        <img src=\"@/assets/images/left_arrow.png\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script type=\"text/javascript\">\nimport Swiper from 'swiper'\nimport defalutImg from '@/assets/images/img3.png'\nexport default {\n  name: 'Carousel',\n  data: function() {\n    return {\n      defaultImg: defalutImg,\n      swiperList: [\n        {\n          time: '2015/09/01',\n          title: '战略方向调整',\n          icon: 'icon-link',\n          details: '版本详情',\n          events: '2021-02-01',\n          number: 'VSX20190522',\n          digest: '战略方向调整',\n          img: defalutImg,\n          explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'\n        },\n        {\n          time: '2015/09/02',\n          title: '三定调整',\n          icon: 'icon-link',\n          details: '版本详情',\n          events: '2021-02-01',\n          number: 'VSX20190522',\n          digest: '战略方向调整',\n          img: defalutImg,\n          explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'\n        },\n        {\n          time: '2015/09/03',\n          title: '新业务调整',\n          icon: 'icon-link',\n          details: '版本详情',\n          events: '2021-02-01',\n          number: 'VSX20190522',\n          digest: '战略方向调整',\n          img: defalutImg,\n          explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'\n        },\n        {\n          time: '2015/09/04',\n          title: '战略方向调整',\n          icon: 'icon-link',\n          details: '版本详情',\n          events: '2021-02-01',\n          number: 'VSX20190522',\n          digest: '战略方向调整',\n          img: defalutImg,\n          explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'\n        },\n        {\n          time: '2015/09/05',\n          title: '央企改革调整',\n          icon: 'icon-link',\n          details: '版本详情',\n          events: '2021-02-01',\n          number: 'VSX20190522',\n          digest: '战略方向调整',\n          img: defalutImg,\n          explain: '这次三定方案的详细说明如下，三定方案的详细说明，三定方案的详细说明，三定方案的详细说明'\n        }\n      ]\n    }\n  },\n  props: {},\n\n  mounted() {\n    new Swiper('.swiper-container', {\n      loop: true,\n      slidesPerView: 3,\n      spaceBetween: 30,\n      centeredSlides: true,\n      freeMode: true,\n      nextButton: '.swiper-button-next',\n      prevButton: '.swiper-button-prev',\n      pagination: {\n        el: '.swiper-pagination',\n        clickable: true\n      }\n    })\n  },\n  watch: {}\n}\n</script>\n\n<style scoped lang=\"less\">\n.swiper-container::after {\n  content: '';\n  width: 100%;\n  height: 62px;\n  background: #f8f9fc;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.swiper-container::before {\n  content: '';\n  width: 95%;\n  height: 16px;\n  background: #e7e8ed;\n  position: absolute;\n  left: 22px;\n  top: 44px;\n  z-index: 1;\n}\n.swiper-container {\n  width: 100%;\n  padding: 0 25px;\n  box-sizing: border-box;\n  position: relative;\n  .swiper-wrapper {\n    .swiper-slide-active,\n    .swiper-slide {\n      transition: 300ms;\n      transform: scale(1);\n      .time-span {\n        font-size: 18px;\n        color: #bbc2cc;\n        font-weight: 600;\n        display: block;\n        margin-top: 10px;\n        margin-left: 5px;\n      }\n      .carouse-content {\n        position: relative;\n        border-left: 2px solid #e7e8ed;\n        z-index: 99;\n        margin-top: 20px;\n        margin-left: 40px;\n        min-height: 100px;\n        padding: 20px 20px 20px 0;\n        box-sizing: border-box;\n        .circle {\n          border: 5px solid #fff;\n          background: #b3b9c7;\n          border-radius: 50%;\n          width: 20px;\n          height: 20px;\n          display: inline-block;\n          position: absolute;\n          top: -14px;\n          left: -10px;\n          box-shadow: 0px 2px 10px 0px rgba(201, 205, 216, 1);\n          z-index: 99;\n        }\n        .title-text {\n          font-size: 16px;\n          color: #34414f;\n          letter-spacing: 0;\n          font-weight: 600;\n          margin-left: 20px;\n          .link-ico {\n            position: absolute;\n            left: 78%;\n            cursor: pointer;\n            color: #b3b9c7;\n          }\n        }\n        .details {\n          font-size: 14px;\n          color: #7c8690;\n          letter-spacing: 0.01px;\n          font-weight: 400;\n          margin-bottom: 10px;\n          position: relative;\n          padding-left: 20px;\n          box-sizing: border-box;\n          .deta-cont {\n            display: none;\n            position: relative;\n            top: -16px;\n            text-align: right;\n            width: 100%;\n            span {\n              color: #26b385;\n            }\n            .content-ps {\n              display: none;\n              background: #f8f9fc;\n              padding: 10px;\n              box-sizing: border-box;\n              margin-top: 10px;\n              .form-text {\n                font-size: 12px;\n                color: #34414f;\n                font-weight: 400;\n                margin-bottom: 5px;\n                text-align: left;\n                span {\n                  font-size: 12px;\n                  color: #7c8690;\n                  letter-spacing: 0;\n                  font-weight: 400;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    .swiper-slide-active,\n    .swiper-slide-duplicate-active {\n      // transform: scale(1.2);\n      .time-span {\n        font-size: 18px;\n        color: #1bb583;\n      }\n      .carouse-content::after {\n        content: '';\n        width: calc(100% + 68px);\n        height: 16px;\n        background: #95d0bd;\n        position: absolute;\n        top: -13px;\n        left: 0;\n      }\n      .carouse-content {\n        border-color: #1bb583 !important;\n      }\n      .circle {\n        background: #1bb583 !important;\n        width: 25px !important;\n        height: 25px !important;\n        top: -17px !important;\n        left: -13px !important;\n      }\n      .title-text {\n        color: #1bb583 !important;\n        font-size: 18px !important;\n        .link-ico {\n          color: #1bb583 !important;\n        }\n      }\n      .details {\n        font-size: 12px !important;\n        color: #34414f !important;\n        margin-bottom: 15px;\n        .deta-cont {\n          display: block !important;\n          position: relative;\n          top: -16px;\n          text-align: right;\n          width: 100%;\n          span {\n            color: #26b385;\n          }\n          .content-ps {\n            display: block !important;\n            background: #f8f9fc;\n            padding: 10px;\n            box-sizing: border-box;\n            margin-top: 10px;\n            text-align: left;\n            .form-text {\n              font-size: 12px;\n              color: #34414f;\n              font-weight: 400;\n              margin-bottom: 5px;\n              text-align: left;\n              span {\n                font-size: 12px;\n                color: #7c8690;\n                letter-spacing: 0;\n                font-weight: 400;\n              }\n            }\n          }\n        }\n        .deta-cont ::after {\n          content: '';\n          width: calc(100% - 90px);\n          border-top: 1px dashed rgba(151, 151, 151, 0.55);\n          position: absolute;\n          top: 8px;\n          left: 58px;\n        }\n      }\n      .details::after {\n        content: '';\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: #1bb583;\n        position: absolute;\n        top: 3px;\n        left: -6px;\n      }\n    }\n  }\n\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev {\n    left: 0;\n  }\n  .swiper-button-next,\n  .swiper-button-prev {\n    width: 20px;\n    height: 62px;\n    border: 1px solid #f3f3f9;\n    background: #f5f6fa;\n    background-image: none;\n    text-align: center;\n    top: 3%;\n    img {\n      width: 8px;\n      height: 12px;\n      margin: 26px 0;\n    }\n  }\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$2 = "data-v-5cce5df2";
    /* module identifier */
    const __vue_module_identifier__$2 = undefined;
    /* functional template */
    const __vue_is_functional_template__$2 = false;
    /* style inject SSR */
    
    /* style inject shadow dom */
    

    
    const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
      { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
      __vue_inject_styles__$2,
      __vue_script__$2,
      __vue_scope_id__$2,
      __vue_is_functional_template__$2,
      __vue_module_identifier__$2,
      false,
      createInjector,
      undefined,
      undefined
    );

  //
  var script$1 = {
    name: 'CarouselTime',
    data: function() {
      return {
        swiperList: [
          {
            time: '2015',
            dome: [
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              },
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              }
            ]
          },
          {
            time: '2016',
            dome: [
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              }
            ]
          },
          {
            time: '2017',
            dome: [
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              },
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              }
            ]
          },
          {
            time: '2018',
            dome: [
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              }
            ]
          },
          {
            time: '2019',
            dome: [
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              },
              {
                title: '战略方向调整V1.0',
                events: '2021-02-01'
              }
            ]
          }
        ]
      }
    },
    props: {
      // swiperList: Object
    },

    mounted() {
      new Swiper__default['default']('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        // centeredSlides: true,
        freeMode: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
      console.log(this.swiperList);
    },
    watch: {}
  };

  /* script */
  const __vue_script__$1 = script$1;
  var __vue_render__$1 = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c("div", { staticClass: "swiper-container" }, [
        _c(
          "div",
          { staticClass: "swiper-wrapper" },
          _vm._l(_vm.swiperList, function(item) {
            return _c("div", { key: item.time, staticClass: "swiper-slide" }, [
              _c("span", { staticClass: "time-span" }, [
                _vm._v(_vm._s(item.time))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "carouse-content" },
                [
                  _c("span", { staticClass: "circle" }),
                  _vm._v(" "),
                  _vm._l(item.dome, function(a, d) {
                    return _c("div", { key: d, staticClass: "time-box" }, [
                      _c("p", { staticClass: "font16" }, [
                        _vm._v(_vm._s(a.events))
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "title-text mat0 mal0" }, [
                        _vm._v(_vm._s(a.title))
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "see-more",
                          attrs: { href: "javascript:;" }
                        },
                        [_vm._v("查看图片")]
                      )
                    ])
                  })
                ],
                2
              )
            ])
          }),
          0
        ),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _vm._m(1)
      ])
    ])
  };
  var __vue_staticRenderFns__$1 = [
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "swiper-button-next" }, [
        _c("img", {
          attrs: { src: __$_require_assets_images_right_arrow_png____default['default'], alt: "" }
        })
      ])
    },
    function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "swiper-button-prev" }, [
        _c("img", {
          attrs: { src: __$_require_assets_images_left_arrow_png____default['default'], alt: "" }
        })
      ])
    }
  ];
  __vue_render__$1._withStripped = true;

    /* style */
    const __vue_inject_styles__$1 = function (inject) {
      if (!inject) return
      inject("data-v-019d0cf4_0", { source: ".mat0[data-v-019d0cf4] {\n  margin-bottom: 0;\n}\n.mal0[data-v-019d0cf4] {\n  margin-left: 0 !important;\n}\n.swiper-container[data-v-019d0cf4]::after {\n  content: '';\n  width: 100%;\n  height: 62px;\n  background: #f8f9fc;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.swiper-container[data-v-019d0cf4]::before {\n  content: '';\n  width: 95%;\n  height: 16px;\n  background: #e7e8ed;\n  position: absolute;\n  left: 22px;\n  top: 44px;\n  z-index: 1;\n}\n.swiper-container[data-v-019d0cf4] {\n  width: 100%;\n  padding: 0 25px;\n  box-sizing: border-box;\n  position: relative;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide[data-v-019d0cf4] {\n  transition: 300ms;\n  transform: scale(1);\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .time-span[data-v-019d0cf4] {\n  font-size: 18px;\n  color: #bbc2cc;\n  font-weight: 600;\n  display: block;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content[data-v-019d0cf4] {\n  position: relative;\n  z-index: 99;\n  margin-top: 20px;\n  margin-left: 40px;\n  min-height: 100px;\n  padding: 30px 0px 30px 0;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .time-box[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .time-box[data-v-019d0cf4] {\n  border-left: 4px solid #b3b9c7;\n  box-shadow: 0px 2px 10px 0px rgba(201, 205, 216, 0.72);\n  width: 225px;\n  height: 107px;\n  padding: 14px 18px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .time-box .font16[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .time-box .font16[data-v-019d0cf4] {\n  font-size: 16px;\n  color: #838c96;\n  letter-spacing: 0.01px;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .circle[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .circle[data-v-019d0cf4] {\n  border: 5px solid #fff;\n  background: #b3b9c7;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: absolute;\n  top: -14px;\n  left: -10px;\n  box-shadow: 0px 2px 10px 0px #c9cdd8;\n  z-index: 99;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .title-text[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .title-text[data-v-019d0cf4] {\n  font-size: 16px;\n  color: #34414f;\n  letter-spacing: 0;\n  font-weight: 600;\n  margin-left: 20px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details[data-v-019d0cf4] {\n  font-size: 14px;\n  color: #7c8690;\n  letter-spacing: 0.01px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont[data-v-019d0cf4] {\n  display: none;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont span[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont span[data-v-019d0cf4] {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps[data-v-019d0cf4] {\n  display: none;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text[data-v-019d0cf4] {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text span[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text span[data-v-019d0cf4] {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .time-span[data-v-019d0cf4] {\n  font-size: 18px;\n  color: #1bb583;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content[data-v-019d0cf4]::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content[data-v-019d0cf4]::after {\n  content: '';\n  width: calc(100% + 68px);\n  height: 16px;\n  background: #95d0bd;\n  position: absolute;\n  top: -13px;\n  left: 0;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content[data-v-019d0cf4] {\n  border-color: #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-box[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .time-box[data-v-019d0cf4] {\n  border-left: 4px solid #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .circle[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .circle[data-v-019d0cf4] {\n  background: #1bb583 !important;\n  width: 25px !important;\n  height: 25px !important;\n  top: -17px !important;\n  left: -13px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .title-text[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .title-text[data-v-019d0cf4] {\n  color: #1bb583 !important;\n  font-size: 18px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details[data-v-019d0cf4] {\n  font-size: 12px !important;\n  color: #34414f !important;\n  margin-bottom: 15px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont[data-v-019d0cf4] {\n  display: block !important;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont span[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont span[data-v-019d0cf4] {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps[data-v-019d0cf4] {\n  display: block !important;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text[data-v-019d0cf4] {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text span[data-v-019d0cf4],\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text span[data-v-019d0cf4] {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont[data-v-019d0cf4] ::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont[data-v-019d0cf4] ::after {\n  content: '';\n  width: calc(100% - 90px);\n  border-top: 1px dashed rgba(151, 151, 151, 0.55);\n  position: absolute;\n  top: 8px;\n  left: 58px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details[data-v-019d0cf4]::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details[data-v-019d0cf4]::after {\n  content: '';\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #1bb583;\n  position: absolute;\n  top: 3px;\n  left: -6px;\n}\n.swiper-container .swiper-button-next[data-v-019d0cf4] {\n  right: 0;\n}\n.swiper-container .swiper-button-prev[data-v-019d0cf4] {\n  left: 0;\n}\n.swiper-container .swiper-button-next[data-v-019d0cf4],\n.swiper-container .swiper-button-prev[data-v-019d0cf4] {\n  width: 20px;\n  height: 62px;\n  border: 1px solid #f3f3f9;\n  background: #f5f6fa;\n  background-image: none;\n  text-align: center;\n  top: 5%;\n}\n.swiper-container .swiper-button-next img[data-v-019d0cf4],\n.swiper-container .swiper-button-prev img[data-v-019d0cf4] {\n  width: 8px;\n  height: 12px;\n  margin: 26px 0;\n}\n", map: {"version":3,"sources":["CarouselTime.vue","/Users/gaobaoxiang/code/wondersgroup-web-front/tech/remote-component-main/rollup/components/ComponentPage/CarouselTime.vue"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,OAAO;EACP,MAAM;AACR;AACA;EACE,WAAW;EACX,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,UAAU;EACV,SAAS;EACT,UAAU;AACZ;AACA;EACE,WAAW;EACX,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;AACA;;EAEE,iBAAiB;EACjB,mBAAmB;AACrB;AACA;;EAEE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;AACA;;EAEE,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,sBAAsB;AACxB;AACA;;EAEE,8BAA8B;EAC9B,sDAAsD;EACtD,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;AACrB;AACA;;EAEE,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;AACrB;AACA;;EAEE,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,oCAAoC;EACpC,WAAW;AACb;AACA;;EAEE,eAAe;EACf,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;;EAEE,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,sBAAsB;AACxB;AACA;;EAEE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,iBAAiB;EACjB,WAAW;AACb;AACA;;EAEE,cAAc;AAChB;AACA;;ECEA,aAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AACA;AACA;;EAEA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AACA;;EAEA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;;EAEA,eAAA;EACA,cAAA;AACA;AACA;;EAEA,WAAA;EACA,wBAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;AACA;AACA;;EAEA,gCAAA;AACA;AACA;;EAEA,yCAAA;AACA;AACA;;EAEA,8BAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;EACA,sBAAA;AACA;AACA;;EAEA,yBAAA;EACA,0BAAA;AACA;AACA;;EAEA,0BAAA;EACA,yBAAA;EACA,mBAAA;AACA;AACA;;EAEA,yBAAA;EACA,kBAAA;EACA,UAAA;EACA,iBAAA;EACA,WAAA;AACA;AACA;;EAEA,cAAA;AACA;AACA;;EAEA,yBAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;AACA;AACA;;EAEA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;AACA;AACA;;EAEA,eAAA;EACA,cAAA;EACA,iBAAA;EACA,gBAAA;AACA;AACA;;EAEA,WAAA;EACA,wBAAA;EACA,gDAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AACA;AACA;;EAEA,WAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,QAAA;EACA,UAAA;AACA;AACA;EACA,QAAA;AACA;AACA;EACA,OAAA;AACA;AACA;;EAEA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;EACA,OAAA;AACA;AACA;;EAEA,UAAA;EACA,YAAA;EACA,cAAA;AACA","file":"CarouselTime.vue","sourcesContent":[".mat0 {\n  margin-bottom: 0;\n}\n.mal0 {\n  margin-left: 0 !important;\n}\n.swiper-container::after {\n  content: '';\n  width: 100%;\n  height: 62px;\n  background: #f8f9fc;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.swiper-container::before {\n  content: '';\n  width: 95%;\n  height: 16px;\n  background: #e7e8ed;\n  position: absolute;\n  left: 22px;\n  top: 44px;\n  z-index: 1;\n}\n.swiper-container {\n  width: 100%;\n  padding: 0 25px;\n  box-sizing: border-box;\n  position: relative;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active,\n.swiper-container .swiper-wrapper .swiper-slide {\n  transition: 300ms;\n  transform: scale(1);\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span,\n.swiper-container .swiper-wrapper .swiper-slide .time-span {\n  font-size: 18px;\n  color: #bbc2cc;\n  font-weight: 600;\n  display: block;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content {\n  position: relative;\n  z-index: 99;\n  margin-top: 20px;\n  margin-left: 40px;\n  min-height: 100px;\n  padding: 30px 0px 30px 0;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .time-box,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .time-box {\n  border-left: 4px solid #b3b9c7;\n  box-shadow: 0px 2px 10px 0px rgba(201, 205, 216, 0.72);\n  width: 225px;\n  height: 107px;\n  padding: 14px 18px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .time-box .font16,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .time-box .font16 {\n  font-size: 16px;\n  color: #838c96;\n  letter-spacing: 0.01px;\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .circle,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .circle {\n  border: 5px solid #fff;\n  background: #b3b9c7;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  display: inline-block;\n  position: absolute;\n  top: -14px;\n  left: -10px;\n  box-shadow: 0px 2px 10px 0px #c9cdd8;\n  z-index: 99;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .title-text,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .title-text {\n  font-size: 16px;\n  color: #34414f;\n  letter-spacing: 0;\n  font-weight: 600;\n  margin-left: 20px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details {\n  font-size: 14px;\n  color: #7c8690;\n  letter-spacing: 0.01px;\n  font-weight: 400;\n  margin-bottom: 10px;\n  position: relative;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont {\n  display: none;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont span,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont span {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps {\n  display: none;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content .details .deta-cont .content-ps .form-text span,\n.swiper-container .swiper-wrapper .swiper-slide .carouse-content .details .deta-cont .content-ps .form-text span {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-span,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .time-span {\n  font-size: 18px;\n  color: #1bb583;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content::after {\n  content: '';\n  width: calc(100% + 68px);\n  height: 16px;\n  background: #95d0bd;\n  position: absolute;\n  top: -13px;\n  left: 0;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .carouse-content,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .carouse-content {\n  border-color: #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .time-box,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .time-box {\n  border-left: 4px solid #1bb583 !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .circle,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .circle {\n  background: #1bb583 !important;\n  width: 25px !important;\n  height: 25px !important;\n  top: -17px !important;\n  left: -13px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .title-text,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .title-text {\n  color: #1bb583 !important;\n  font-size: 18px !important;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details {\n  font-size: 12px !important;\n  color: #34414f !important;\n  margin-bottom: 15px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont {\n  display: block !important;\n  position: relative;\n  top: -16px;\n  text-align: right;\n  width: 100%;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont span,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont span {\n  color: #26b385;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps {\n  display: block !important;\n  background: #f8f9fc;\n  padding: 10px;\n  box-sizing: border-box;\n  margin-top: 10px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text {\n  font-size: 12px;\n  color: #34414f;\n  font-weight: 400;\n  margin-bottom: 5px;\n  text-align: left;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont .content-ps .form-text span,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont .content-ps .form-text span {\n  font-size: 12px;\n  color: #7c8690;\n  letter-spacing: 0;\n  font-weight: 400;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details .deta-cont ::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details .deta-cont ::after {\n  content: '';\n  width: calc(100% - 90px);\n  border-top: 1px dashed rgba(151, 151, 151, 0.55);\n  position: absolute;\n  top: 8px;\n  left: 58px;\n}\n.swiper-container .swiper-wrapper .swiper-slide-active .details::after,\n.swiper-container .swiper-wrapper .swiper-slide-duplicate-active .details::after {\n  content: '';\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #1bb583;\n  position: absolute;\n  top: 3px;\n  left: -6px;\n}\n.swiper-container .swiper-button-next {\n  right: 0;\n}\n.swiper-container .swiper-button-prev {\n  left: 0;\n}\n.swiper-container .swiper-button-next,\n.swiper-container .swiper-button-prev {\n  width: 20px;\n  height: 62px;\n  border: 1px solid #f3f3f9;\n  background: #f5f6fa;\n  background-image: none;\n  text-align: center;\n  top: 5%;\n}\n.swiper-container .swiper-button-next img,\n.swiper-container .swiper-button-prev img {\n  width: 8px;\n  height: 12px;\n  margin: 26px 0;\n}\n","<template>\n  <div>\n    <div class=\"swiper-container\">\n      <div class=\"swiper-wrapper\">\n        <div class=\"swiper-slide\" v-for=\"item of swiperList\" :key=\"item.time\">\n          <span class=\"time-span\">{{ item.time }}</span>\n          <div class=\"carouse-content\">\n            <span class=\"circle\"></span>\n            <div class=\"time-box\" v-for=\"(a, d) of item.dome\" :key=\"d\">\n              <p class=\"font16\">{{ a.events }}</p>\n              <p class=\"title-text mat0 mal0\">{{ a.title }}</p>\n              <a class=\"see-more\" href=\"javascript:;\">查看图片</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"swiper-button-next\">\n        <img src=\"@/assets/images/right_arrow.png\" alt=\"\" />\n      </div>\n      <div class=\"swiper-button-prev\">\n        <img src=\"@/assets/images/left_arrow.png\" alt=\"\" />\n      </div>\n    </div>\n  </div>\n</template>\n\n<script type=\"text/javascript\">\nimport Swiper from 'swiper'\nexport default {\n  name: 'CarouselTime',\n  data: function() {\n    return {\n      swiperList: [\n        {\n          time: '2015',\n          dome: [\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            },\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            }\n          ]\n        },\n        {\n          time: '2016',\n          dome: [\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            }\n          ]\n        },\n        {\n          time: '2017',\n          dome: [\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            },\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            }\n          ]\n        },\n        {\n          time: '2018',\n          dome: [\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            }\n          ]\n        },\n        {\n          time: '2019',\n          dome: [\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            },\n            {\n              title: '战略方向调整V1.0',\n              events: '2021-02-01'\n            }\n          ]\n        }\n      ]\n    }\n  },\n  props: {\n    // swiperList: Object\n  },\n\n  mounted() {\n    new Swiper('.swiper-container', {\n      loop: true,\n      slidesPerView: 3,\n      spaceBetween: 30,\n      // centeredSlides: true,\n      freeMode: true,\n      nextButton: '.swiper-button-next',\n      prevButton: '.swiper-button-prev',\n      pagination: {\n        el: '.swiper-pagination',\n        clickable: true\n      }\n    })\n    console.log(this.swiperList)\n  },\n  watch: {}\n}\n</script>\n\n<style scoped lang=\"less\">\n.mat0 {\n  margin-bottom: 0;\n}\n.mal0 {\n  margin-left: 0 !important;\n}\n.swiper-container::after {\n  content: '';\n  width: 100%;\n  height: 62px;\n  background: #f8f9fc;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.swiper-container::before {\n  content: '';\n  width: 95%;\n  height: 16px;\n  background: #e7e8ed;\n  position: absolute;\n  left: 22px;\n  top: 44px;\n  z-index: 1;\n}\n.swiper-container {\n  width: 100%;\n  padding: 0 25px;\n  box-sizing: border-box;\n  position: relative;\n  .swiper-wrapper {\n    .swiper-slide-active,\n    .swiper-slide {\n      transition: 300ms;\n      transform: scale(1);\n      .time-span {\n        font-size: 18px;\n        color: #bbc2cc;\n        font-weight: 600;\n        display: block;\n        margin-top: 10px;\n        margin-left: 5px;\n      }\n      .carouse-content {\n        position: relative;\n        // border-left: 2px solid #e7e8ed;\n        z-index: 99;\n        margin-top: 20px;\n        margin-left: 40px;\n        min-height: 100px;\n        padding: 30px 0px 30px 0;\n        box-sizing: border-box;\n        .time-box {\n          border-left: 4px solid #b3b9c7;\n          box-shadow: 0px 2px 10px 0px rgba(201, 205, 216, 0.72);\n          width: 225px;\n          height: 107px;\n          padding: 14px 18px;\n          box-sizing: border-box;\n          margin-bottom: 30px;\n          .font16 {\n            font-size: 16px;\n            color: #838c96;\n            letter-spacing: 0.01px;\n            font-weight: 400;\n            margin-bottom: 10px;\n          }\n        }\n        .circle {\n          border: 5px solid #fff;\n          background: #b3b9c7;\n          border-radius: 50%;\n          width: 20px;\n          height: 20px;\n          display: inline-block;\n          position: absolute;\n          top: -14px;\n          left: -10px;\n          box-shadow: 0px 2px 10px 0px rgba(201, 205, 216, 1);\n          z-index: 99;\n        }\n        .title-text {\n          font-size: 16px;\n          color: #34414f;\n          letter-spacing: 0;\n          font-weight: 600;\n          margin-left: 20px;\n        }\n        .details {\n          font-size: 14px;\n          color: #7c8690;\n          letter-spacing: 0.01px;\n          font-weight: 400;\n          margin-bottom: 10px;\n          position: relative;\n          padding-left: 20px;\n          box-sizing: border-box;\n          .deta-cont {\n            display: none;\n            position: relative;\n            top: -16px;\n            text-align: right;\n            width: 100%;\n            span {\n              color: #26b385;\n            }\n            .content-ps {\n              display: none;\n              background: #f8f9fc;\n              padding: 10px;\n              box-sizing: border-box;\n              margin-top: 10px;\n              .form-text {\n                font-size: 12px;\n                color: #34414f;\n                font-weight: 400;\n                margin-bottom: 5px;\n                text-align: left;\n                span {\n                  font-size: 12px;\n                  color: #7c8690;\n                  letter-spacing: 0;\n                  font-weight: 400;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n    .swiper-slide-active,\n    .swiper-slide-duplicate-active {\n      // transform: scale(1.2);\n      .time-span {\n        font-size: 18px;\n        color: #1bb583;\n      }\n      .carouse-content::after {\n        content: '';\n        width: calc(100% + 68px);\n        height: 16px;\n        background: #95d0bd;\n        position: absolute;\n        top: -13px;\n        left: 0;\n      }\n      .carouse-content {\n        border-color: #1bb583 !important;\n      }\n      .time-box {\n        border-left: 4px solid #1bb583 !important;\n      }\n      .circle {\n        background: #1bb583 !important;\n        width: 25px !important;\n        height: 25px !important;\n        top: -17px !important;\n        left: -13px !important;\n      }\n      .title-text {\n        color: #1bb583 !important;\n        font-size: 18px !important;\n      }\n      .details {\n        font-size: 12px !important;\n        color: #34414f !important;\n        margin-bottom: 15px;\n        .deta-cont {\n          display: block !important;\n          position: relative;\n          top: -16px;\n          text-align: right;\n          width: 100%;\n          span {\n            color: #26b385;\n          }\n          .content-ps {\n            display: block !important;\n            background: #f8f9fc;\n            padding: 10px;\n            box-sizing: border-box;\n            margin-top: 10px;\n            text-align: left;\n            .form-text {\n              font-size: 12px;\n              color: #34414f;\n              font-weight: 400;\n              margin-bottom: 5px;\n              text-align: left;\n              span {\n                font-size: 12px;\n                color: #7c8690;\n                letter-spacing: 0;\n                font-weight: 400;\n              }\n            }\n          }\n        }\n        .deta-cont ::after {\n          content: '';\n          width: calc(100% - 90px);\n          border-top: 1px dashed rgba(151, 151, 151, 0.55);\n          position: absolute;\n          top: 8px;\n          left: 58px;\n        }\n      }\n      .details::after {\n        content: '';\n        width: 10px;\n        height: 10px;\n        border-radius: 50%;\n        background: #1bb583;\n        position: absolute;\n        top: 3px;\n        left: -6px;\n      }\n    }\n  }\n\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev {\n    left: 0;\n  }\n  .swiper-button-next,\n  .swiper-button-prev {\n    width: 20px;\n    height: 62px;\n    border: 1px solid #f3f3f9;\n    background: #f5f6fa;\n    background-image: none;\n    text-align: center;\n    top: 5%;\n    img {\n      width: 8px;\n      height: 12px;\n      margin: 26px 0;\n    }\n  }\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__$1 = "data-v-019d0cf4";
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
  var script = {
    data() {
      return {
        queryParam: { status: 0 }
      }
    },
    components: { Carousel: __vue_component__$2, CarouselTime: __vue_component__$1 },
    methods: {
      childValue(val1, val2) {
        console.log(val1, val2);
      }
    }
  };

  /* script */
  const __vue_script__ = script;

  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [
      _c(
        "div",
        { staticClass: "select-box mt42" },
        [
          _c(
            "a-form-item",
            { staticClass: "select-sty" },
            [
              _c(
                "a-select",
                {
                  staticStyle: { width: "100px" },
                  model: {
                    value: _vm.queryParam.status,
                    callback: function($$v) {
                      _vm.$set(_vm.queryParam, "status", $$v);
                    },
                    expression: "queryParam.status"
                  }
                },
                [
                  _c("a-select-option", { attrs: { value: 0 } }, [
                    _vm._v(" 按事件 ")
                  ]),
                  _vm._v(" "),
                  _c("a-select-option", { attrs: { value: 1 } }, [
                    _vm._v(" 按时间线 ")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _vm.queryParam.status == 0
            ? _c(
                "div",
                { staticClass: "operation-r" },
                [
                  _c(
                    "a-button",
                    {
                      staticClass: "edit-btn",
                      attrs: { type: "sync", icon: "sync" }
                    },
                    [_vm._v("刷新 ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    {
                      staticClass: "edit-btn",
                      attrs: { type: "download", icon: "download" }
                    },
                    [_vm._v("\n        导出\n      ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    {
                      staticClass: "edit-btn",
                      attrs: { type: "printer", icon: "printer" }
                    },
                    [_vm._v("\n        打印\n      ")]
                  )
                ],
                1
              )
            : _vm.queryParam.status == 1
            ? _c(
                "div",
                { staticClass: "operation-r" },
                [
                  _c(
                    "a-button",
                    {
                      staticClass: "edit-btn",
                      attrs: { type: "sync", icon: "sync" }
                    },
                    [_vm._v("刷新 ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    {
                      staticClass: "edit-btn",
                      attrs: { type: "download", icon: "download" }
                    },
                    [_vm._v("\n        导出\n      ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a-button",
                    {
                      staticClass: "edit-btn",
                      attrs: { type: "printer", icon: "printer" }
                    },
                    [_vm._v("\n        打印\n      ")]
                  )
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "carousel" },
        [
          _vm.queryParam.status == 0
            ? _c("carousel")
            : _vm.queryParam.status == 1
            ? _c("carousel-time")
            : _vm._e()
        ],
        1
      )
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = function (inject) {
      if (!inject) return
      inject("data-v-15dfc806_0", { source: ".select-box .operation-r {\n  display: inline-block;\n  float: right;\n  position: relative;\n}\n.carousel {\n  margin-top: 30px;\n}\n", map: {"version":3,"sources":["Organization.vue"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,gBAAgB;AAClB","file":"Organization.vue","sourcesContent":[".select-box .operation-r {\n  display: inline-block;\n  float: right;\n  position: relative;\n}\n.carousel {\n  margin-top: 30px;\n}\n"]}, media: undefined })
  ,inject("data-v-15dfc806_1", { source: "\n.ant-carousel[data-v-15dfc806] .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n.ant-carousel[data-v-15dfc806] .custom-slick-arrow {\n  width: 25px;\n  height: 25px;\n  font-size: 25px;\n  color: #fff;\n  background-color: rgba(31, 45, 61, 0.11);\n  opacity: 0.3;\n}\n.ant-carousel[data-v-15dfc806] .custom-slick-arrow:before {\n  display: none;\n}\n.ant-carousel[data-v-15dfc806] .custom-slick-arrow:hover {\n  opacity: 0.5;\n}\n.ant-carousel[data-v-15dfc806] .slick-slide h3 {\n  color: #fff;\n}\n", map: {"version":3,"sources":["/Users/gaobaoxiang/code/wondersgroup-web-front/tech/remote-component-main/rollup/components/Organization/Organization.vue"],"names":[],"mappings":";AAiEA;EACA,kBAAA;EACA,aAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AACA;AACA;EACA,WAAA;EACA,YAAA;EACA,eAAA;EACA,WAAA;EACA,wCAAA;EACA,YAAA;AACA;AACA;EACA,aAAA;AACA;AACA;EACA,YAAA;AACA;AAEA;EACA,WAAA;AACA","file":"Organization.vue","sourcesContent":["<template>\n  <div>\n    <div class=\"select-box mt42\">\n      <a-form-item class=\"select-sty\">\n        <a-select style=\"width: 100px\" v-model=\"queryParam.status\">\n          <a-select-option :value=\"0\"> 按事件 </a-select-option>\n          <a-select-option :value=\"1\"> 按时间线 </a-select-option>\n        </a-select>\n      </a-form-item>\n      <div class=\"operation-r\" v-if=\"queryParam.status == 0\">\n        <a-button class=\"edit-btn\" type=\"sync\" icon=\"sync\">刷新 </a-button>\n        <a-button class=\"edit-btn\" type=\"download\" icon=\"download\">\n          导出\n        </a-button>\n        <a-button class=\"edit-btn\" type=\"printer\" icon=\"printer\">\n          打印\n        </a-button>\n      </div>\n      <div class=\"operation-r\" v-else-if=\"queryParam.status == 1\">\n        <a-button class=\"edit-btn\" type=\"sync\" icon=\"sync\">刷新 </a-button>\n        <a-button class=\"edit-btn\" type=\"download\" icon=\"download\">\n          导出\n        </a-button>\n        <a-button class=\"edit-btn\" type=\"printer\" icon=\"printer\">\n          打印\n        </a-button>\n      </div>\n    </div>\n\n    <div class=\"carousel\">\n      <carousel v-if=\"queryParam.status == 0\"></carousel>\n      <carousel-time v-else-if=\"queryParam.status == 1\"></carousel-time>\n    </div>\n  </div>\n</template>\n<script>\nimport Carousel from '../ComponentPage/Carousel.vue'\nimport CarouselTime from '../ComponentPage/CarouselTime.vue'\nexport default {\n  data() {\n    return {\n      queryParam: { status: 0 }\n    }\n  },\n  components: { Carousel, CarouselTime },\n  methods: {\n    childValue(val1, val2) {\n      console.log(val1, val2)\n    }\n  }\n}\n</script>\n<style lang=\"less\">\n.select-box {\n  .operation-r {\n    display: inline-block;\n    float: right;\n    position: relative;\n  }\n}\n.carousel {\n  margin-top: 30px;\n}\n</style>\n<style scoped>\n.ant-carousel >>> .slick-slide {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  overflow: hidden;\n}\n.ant-carousel >>> .custom-slick-arrow {\n  width: 25px;\n  height: 25px;\n  font-size: 25px;\n  color: #fff;\n  background-color: rgba(31, 45, 61, 0.11);\n  opacity: 0.3;\n}\n.ant-carousel >>> .custom-slick-arrow:before {\n  display: none;\n}\n.ant-carousel >>> .custom-slick-arrow:hover {\n  opacity: 0.5;\n}\n\n.ant-carousel >>> .slick-slide h3 {\n  color: #fff;\n}\n</style>\n"]}, media: undefined });

    };
    /* scoped */
    const __vue_scope_id__ = "data-v-15dfc806";
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

  return __vue_component__;

})));
