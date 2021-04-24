/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

Vue.config.devtools = true; // Store

var store = new Vuex.Store({
  state: {
    event: false,
    //Updated with the updateScroll() method in $app.methods.updateScroll()
    headerData: {
      background: './assets/img/home-page-slider.jpg',
      title: 'make a difference',
      lead: ['as long as poverty, injustice & inequality persist, none of us can truly rest'],
      buttons: [btn1 = {
        text: 'our mission',
        link: 'https://avada.theme-fusion.com/charity/mission/'
      }, btn2 = {
        text: 'donate now',
        link: 'https://avada.theme-fusion.com/charity/donate/'
      }]
    },
    navbarData: {
      logos: {
        desktop: {
          white: './assets/img/avada-charity-logo-retina.png',
          colorated: './assets/img/avada-charity-mobile-logo-retina.png'
        },
        mobile: {
          white: './assets/img/avada-charity-mobile-logo-low.png',
          colorated: './assets/img/avada-charity-mobile-logo-retina.png'
        }
      },
      linkHome: 'https://avada.theme-fusion.com/charity/',
      navItems: [{
        type: 'link',
        text: 'home',
        link: 'https://avada.theme-fusion.com/charity/'
      }, {
        type: 'link',
        text: 'mission',
        link: 'https://avada.theme-fusion.com/charity/mission/'
      }, {
        type: 'dropdown',
        text: 'causes',
        link: 'https://avada.theme-fusion.com/charity/causes/',
        dropdownItems: [{
          text: 'FAIR TRADE',
          link: 'https://avada.theme-fusion.com/charity/portfolio-items/fair-trade/'
        }, {
          text: 'VACCINES',
          link: 'https://avada.theme-fusion.com/charity/portfolio-items/farming/'
        }, {
          text: 'VACCINES',
          link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/'
        }, {
          text: 'EDUCATION',
          link: 'https://avada.theme-fusion.com/charity/portfolio-items/education/'
        }, {
          text: 'CLEAN WATER',
          link: 'https://avada.theme-fusion.com/charity/portfolio-items/clean-water/'
        }, {
          text: 'SHELTER',
          link: 'https://avada.theme-fusion.com/charity/portfolio-items/shelter/'
        }]
      }, {
        type: 'link',
        text: 'journal',
        link: 'https://avada.theme-fusion.com/charity/journal/'
      }, {
        type: 'btnLink',
        text: 'donate',
        link: 'https://avada.theme-fusion.com/charity/donate/'
      }]
    }
  },
  mutations: {
    toggleEvent: function toggleEvent(state, id) {
      if (id === 'toggle') {
        state.event = !state.event;
      } else {
        state.event = false;
      }
    },
    PAGE_ACTIVE: function PAGE_ACTIVE(state, item) {
      state.pageActive = item;
    }
  },
  actions: {
    pageActive: function pageActive(_ref, page) {
      var commit = _ref.commit;
      commit('PAGE_ACTIVE', page);
    }
  },
  getters: {
    getPageActive: function getPageActive(state) {
      return state.pageActive;
    }
  }
}); // ------------ HEADER
// nav

Vue.component("navbar-vue", {
  props: {
    scroll_event: {
      type: Number,
      required: true
    },
    page_active: {
      type: Object,
      required: true
    },
    widht_screen: {
      type: Number,
      required: true
    }
  },
  computed: {
    navbarData: function (_navbarData) {
      function navbarData() {
        return _navbarData.apply(this, arguments);
      }

      navbarData.toString = function () {
        return _navbarData.toString();
      };

      return navbarData;
    }(function () {
      return store.state.navbarData;
      console.log(navbarData);
    }),
    getPageActive: function getPageActive() {
      return store.state.pageActive;
    }
  },
  methods: {
    checkType: function checkType(type) {
      return type;
    },
    pageActive: function pageActive(item) {
      this.$store.dispatch('pageActive', item);

      if (item.text.toLowerCase() === this.page_active.text.toLowerCase()) {
        return 'text-gold';
      }
    },
    bgColorScrollY: function bgColorScrollY() {
      var nav;

      if (this.scroll_event > 50) {
        nav = 'navbar-light bg-light';
      } else nav = 'navbar-dark';

      this.mediaQueryLogo();
      return nav;
    },
    // Mediaquery
    mediaQueryLogo: function mediaQueryLogo() {
      var logo;

      if (this.scroll_event > 50) {
        logo = store.state.navbarData.logos.mobile.colorated;
      } else logo = store.state.navbarData.logos.desktop.white;

      return logo;
    }
  },
  // navbarData.logos
  template: "\n    <nav\n        :class=\"bgColorScrollY()\"\n        class=\"navbar navbar-expand-lg\">\n\n        <a class=\"navbar-brand\" :href=\"navbarData.linkHome\">\n            <img\n                :src=\"mediaQueryLogo()\" alt=\"logo\">\n        </a>\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n\n                <li\n                    v-for=\"(item,i) in navbarData.navItems\"\n                    :class=\"checkType(item.type)\"\n                    class=\"nav-item active\">\n\n                    <template v-if=\"item.type === 'link'\">\n                        <a\n                            class=\"nav-link\" :href=\"item.link\">\n                            <span\n                                @click:=\"pageActive(item)\"\n                                :class=\"pageActive(item)\">\n                                {{ item.text }}\n                            </span>\n                            <span class=\"sr-only\"> {{item.text}} </span>\n                        </a>\n                    </template>\n\n                    <template v-else-if=\"item.type === 'dropdown'\">\n                        <a\n                            @click:=\"pageActive(item)\"\n                            :class=\"pageActive(item)\"\n                            :href=\"item.link\"\n                            class=\"nav-link dropdown-toggle\"\n                            id=\"navbarDropdown\"\n                            role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                            aria-expanded=\"true\">\n                        {{ item.text }}\n                        </a>\n\n                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                            <template v-for=\"(dropdownItem, i) in item.dropdownItems\">\n                                <a\n                                    @click:=\"pageActive(item)\"\n                                    :href=\"dropdownItem.link\"\n                                    class=\"dropdown-item\" > {{dropdownItem.text}} </a>\n                                <div class=\"dropdown-divider\"></div>\n                            </template>\n                        </div>\n                    </template>\n\n                    <template v-else-if=\"item.type === 'btnLink'\">\n                        <a\n                            @click:=\"pageActive(item)\"\n                            :class=\"pageActive(item)\"\n                            class=\"btn btn-lg\" :href=\"item.link\" role=\"button\">\n                            {{ item.text }}\n                        </a>\n                    </template>\n                </li>\n            </ul>\n        </div>\n    </nav>\n    "
}); // Jumbotron

Vue.component("jumbo-vue", {
  computed: {
    headerData: function (_headerData) {
      function headerData() {
        return _headerData.apply(this, arguments);
      }

      headerData.toString = function () {
        return _headerData.toString();
      };

      return headerData;
    }(function () {
      return store.state.headerData;
      console.log(headerData);
    })
  },
  template: "\n    <div class=\"jumbotron jumbotron-fluid\">\n\n        <img :src=\"headerData.background\" alt=\"background-image\">\n\n        <div class=\"container\">\n            <h1 class=\"title\"> {{ headerData.title }} </h1>\n            <p v-for=\"(lead,i) in headerData.lead\"\n                :key=\"'lead' + i\"\n                :class=\"'lead'+ (i + 1)\">\n                {{ lead }}\n            </p>\n            <div class=\"btn-group mt-3\" role=\"group\" aria-label=\"donare\">\n                <div v-for=\"(btn,i) in headerData.buttons\"\n                    :key=\"'btn'+ i\"\n                    class=\"cont-btn\">\n                    <a :class=\"'btn'+ (i + 1)\"\n                        class=\"btn btn-lg\" :href=\"btn.link\" role=\"button\">\n                        {{ btn.text }}\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
}); // ****** ROOT *********

var app = new Vue({
  el: '#root',
  vuetify: new Vuetify(),
  // "inject" the store
  // into all child components from the root component
  store: store,
  data: {
    widhtScreen: 0,
    scrollWindow: 0,
    widthWindow: 0,
    pageActive: null
  },
  created: function created() {
    this.pageActive = store.state.navbarData.navItems[0];
    console.log(this.pageActive);
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.updateScroll);
    this.widhtScreen = this.$vuetify.breakpoint.width;
    console.log(this.widhtScreen);
  },
  computed: {// TODO: RECUPERARE LA LARGHEZZA AGGIORNATA
    // get_widthWindow(){
    //     console.log(this.widhtScreen)
    //     this.widhtScreen = this.vuetify.breakpoint.width;
    //     return this.widhtScreen;
    // }
  },
  methods: {
    updateScroll: function updateScroll() {
      this.scrollWindow = window.scrollY;
      console.log(event);
    }
  }
});

/***/ }),

/***/ "./src/scss/master.scss":
/*!******************************!*\
  !*** ./src/scss/master.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/master": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/master"], () => (__webpack_require__("./src/scss/master.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;