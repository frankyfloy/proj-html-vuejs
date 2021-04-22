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
    headerData: {
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
      logoUrl: './assets/img/avada-charity-logo-retina.png',
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
        link: 'https://avada.theme-fusion.com/charity/causes/'
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
    }
  }
}); // Header
// nav

Vue.component("navbar-vue", {
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
    })
  },
  methods: {
    checkType: function checkType(type) {
      return type;
    }
  },
  //Conditional construct for html element type, render the corresponding element
  template: "\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <a class=\"navbar-brand\" :href=\"navbarData.linkHome\">\n            <img :src=\"navbarData.logoUrl\" alt=\"logo\">\n        </a>\n\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n        </button>\n\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n            <ul class=\"navbar-nav mr-auto\">\n\n                <li v-for=\"(item,i) in navbarData.navItems\"\n                    :class=\"checkType(item.type)\"\n                    class=\"nav-item active\">\n\n                    <template v-if=\"item.type === 'link'\">\n                        <a  class=\"nav-link\" :href=\"item.link\"> {{ item.text }} <span class=\"sr-only\"> {{item.text}} </span></a>\n                    </template>\n\n\n                    <template v-else-if=\"item.type === 'dropdown'\">\n                        <a  class=\"nav-link dropdown-toggle\" :href=\"item.link\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        {{ item.text }}\n                        </a>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                            <a class=\"dropdown-item\" href=\"#\">Action</a>\n                            <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                            <div class=\"dropdown-divider\"></div>\n                            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                        </div>\n                    </template>\n\n\n                    <template v-else-if=\"item.type === 'btnLink'\">\n                        <a class=\"btn btn-lg\" :href=\"item.link\" role=\"button\">\n                            {{ item.text }}\n                        </a>\n                    </template>\n                </li>\n\n            </ul>\n        </div>\n    </nav>\n    "
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
  template: "\n    <div class=\"jumbotron jumbotron-fluid\">\n      <div class=\"container\">\n        <h1 class=\"title\"> {{ headerData.title }} </h1>\n\n        <p v-for=\"(lead,i) in headerData.lead\"\n            :key=\"'lead' + i\"\n            :class=\"'lead'+ (i + 1)\">\n            {{ lead }}\n        </p>\n        <div class=\"btn-group mt-3\" role=\"group\" aria-label=\"donare\">\n            <div v-for=\"(btn,i) in headerData.buttons\"\n                :key=\"'btn'+ i\"\n                class=\"cont-btn\">\n                <a :class=\"'btn'+ (i + 1)\"\n                    class=\"btn btn-lg\" :href=\"btn.link\" role=\"button\">\n                    {{ btn.text }}\n                </a>\n            </div>\n        </div>\n      </div>\n    </div>\n    "
}); // ****** ROOT *********

var app = new Vue({
  el: '#root',
  // "inject" the store
  // into all child components from the root component
  store: store,
  data: {},
  mounted: function mounted() {},
  methods: {}
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