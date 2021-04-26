/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

var _content;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    },
    // *****************************DATI MAIN
    mainDate: {
      sections: [{
        id: 'section1',
        columns: [{
          id: 'everyMomentCounts',
          type: 'col',
          mediaXl: 'col-8',
          mediaSm: 'col-12',
          content: {
            type: 'card',
            head: 'EVERY MOMENT COUNTS',
            divider: true,
            p: ['Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo vehicula, nisi est laoreet leo, ac convallis nisi nibh id velit. Aliquam mattis metus a nisi pretium.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh vestibulum, laoreet ipsum quis, vestibulum nisi. Curabitur non mi et turpis pharetra vulputate. Ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh vestibulum, laoreet ipsum quis, vestibulum nisi.', 'Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo vehicula, nisi est laoreet leo, ac convallis nisi nibh id velit.'],
            btn: [{
              text: 'our mission',
              link: 'https://avada.theme-fusion.com/charity/mission/'
            }]
          }
        }, {
          id: 'numbersReached',
          type: 'col',
          mediaXl: 'col-4',
          mediaSm: 'col-12',
          content: {
            type: 'div-flex',
            "class": 'world',
            div: [{
              icon: 'far fa-heart',
              span: '2032',
              p: 'Volunteers worldwide'
            }, {
              icon: 'fas fa-globe',
              span: '132',
              p: 'Volunteers worldwide'
            }, {
              icon: 'fas fa-dollar-sign',
              span: '3.8M',
              p: 'Volunteers worldwide'
            }]
          }
        }]
      }, {
        id: 'section2',
        columns: [{
          id: 'OUR_VALUES',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'card',
            head: 'OUR VALUES',
            divider: true,
            p: ['Think Big. Act Bigger']
          }
        }, {
          id: 'CARD_OUR_VALUES',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'div-flex',
            "class": 'cardOurValues',
            div: [{
              icon: 'fas fa-tint',
              span: 'Clean Water',
              p: 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
              btn: {
                text: 'LEARN MORE',
                link: 'https://avada.theme-fusion.com/charity/mission/'
              }
            }, {
              icon: 'fas fa-stethoscope',
              span: 'Vaccinations',
              p: 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
              btn: {
                text: 'LEARN MORE',
                link: 'https://avada.theme-fusion.com/charity/mission/'
              }
            }, {
              icon: 'fas fa-graduation-cap',
              span: 'Education',
              p: 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
              btn: {
                text: 'LEARN MORE',
                link: 'https://avada.theme-fusion.com/charity/mission/'
              }
            }, {
              icon: 'fab fa-pagelines',
              span: 'Farming',
              p: 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
              btn: {
                text: 'LEARN MORE',
                link: 'https://avada.theme-fusion.com/charity/mission/'
              }
            }]
          }
        }]
      }, {
        id: 'section3',
        columns: [{
          id: 'RECENT_CAUSES',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'card',
            head: 'RECENT CAUSES',
            divider: true,
            p: ['We run projects in over 30 countries in 5 contintents']
          }
        }, {
          id: 'CARD_OUR_VALUES',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'card',
            "class": 'cardImgRecentCause',
            img: [{
              head: 'FAIR TRADE',
              src: "./assets/img/avada-charity-fair-trade-featured-600x450.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/fair-trade/'
            }, {
              head: 'SHELTER',
              src: "./assets/img/avada-charity-shelter-featured-600x450.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/shelter/'
            }, {
              head: 'FARMING',
              src: "./assets/img/avada-charity-farming-featured-600x450.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/farming/'
            }, {
              head: 'VACCINES',
              src: "./assets/img/avada-charity-vaccines-featured-600x450.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/'
            }]
          }
        }]
      }, {
        id: 'section4',
        columns: [{
          id: 'VIEW_ALL_OUR_CAUSES',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'card',
            btn: [{
              text: 'VIEW ALL OUR CAUSES',
              link: 'https://avada.theme-fusion.com/charity/causes/'
            }]
          }
        }]
      }, {
        id: 'section5',
        columns: [{
          id: 'LATEST_ARTICLES',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'card',
            head: 'LATEST ARTICLES',
            divider: true,
            p: ['Together we make all the difference']
          }
        }, {
          id: 'RECENT_CAUSES',
          type: 'col',
          mediaXl: 'col-4',
          mediaSm: 'col-4',
          content: {
            type: 'card',
            "class": 'cardImgRecentCause',
            img: [{
              headHover: 'Understanding community complexities',
              head: 'Understanding community complexities',
              src: "./assets/img/photo-1444213007800-cff19e1677ac-600x450.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/fair-trade/',
              p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
            }]
          }
        }, {
          id: 'RECENT_CAUSES2',
          type: 'col',
          mediaXl: 'col-4',
          mediaSm: 'col-4',
          content: {
            type: 'card',
            "class": 'cardImgRecentCause',
            img: [{
              head: 'The human story of uniqueness',
              src: "./assets/img/photo-1444664597500-035db93e2323-177x142.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/shelter/',
              p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
            }, {
              head: 'Sustainable trade tactics',
              src: "./assets/img/photo-1447430617419-95715602278e-177x142.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/farming/',
              p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
            }, {
              head: 'Farmers making a difference',
              src: "./assets/img/photo-1460230525622-630fe3294cd7-177x142.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/',
              p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
            }, {
              head: 'Meeting remote tribes in Peru',
              src: "./assets/img/photo-1460600421604-5e138c208b9c-177x142.jpg",
              link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/',
              p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
            }]
          }
        }, {
          id: 'VIEW_ALL_OUR_CAUSES',
          type: 'col',
          mediaXl: 'col-8',
          mediaSm: 'col-8',
          content: {
            type: 'card',
            btn: [{
              text: 'VIEW ALL OUR ARTICLES',
              link: 'https://avada.theme-fusion.com/charity/journal/'
            }]
          }
        }]
      }, {
        id: 'section6',
        columns: [{
          id: 'CHANGE_A_LIFE_TODAY',
          type: 'col',
          mediaXl: 'col-7',
          mediaSm: 'col-7',
          content: (_content = {
            type: 'card',
            head: 'CHANGE A LIFE TODAY',
            divider: true,
            p: ['As long as poverty, injustice & inequality persist, none of us can truly rest. It doesn’t take much to change a life, Get in touch today and start making the difference.']
          }, _defineProperty(_content, "divider", true), _defineProperty(_content, "btn", [{
            text: 'VOLUNTEER',
            link: 'https://avada.theme-fusion.com/charity/causes/'
          }, {
            text: 'DONATE NOW',
            link: 'https://avada.theme-fusion.com/charity/donate/'
          }]), _content)
        }]
      }]
    },
    footerDate: {
      sections: [{
        id: 'section1Foot',
        columns: [{
          id: 'LOGO-FOOTER',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'div-logo',
            "class": 'card-logo',
            img: {
              src: "./assets/img/avada-charity-sticky-header-logo.png",
              link: 'https://avada.theme-fusion.com/charity/'
            }
          }
        }]
      }, {
        id: 'section2Foot',
        columns: [{
          id: 'termsAndCond',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'link-footer',
            "class": 'link-footer',
            span: "<nobr>\n                                    \xA9 Copyright 2012 - <span v-text=\"getYear\"></span>AVADA THEME BY THEME FUSION\n                                </nobr> | THEME BY <a href=\"http://theme-fusion.com/\">Terms of Use</a> | ALL RIGHTS RESERVED | POWERED BY <a href=\"#\">WORDPRESS</a>"
          }
        }, {
          id: 'SocialContact',
          type: 'col',
          mediaXl: 'col-12',
          mediaSm: 'col-12',
          content: {
            type: 'div-icon-social',
            "class": 'card-logo',
            div: [{
              icon: 'fab fa-facebook cl-face',
              link: 'https://www.facebook.com/'
            }, {
              icon: 'fab fa-instagram cl-insta',
              link: 'https://www.instagram.com/'
            }, {
              icon: 'fab fa-twitter cl-twitter',
              link: 'https://twitter.com/'
            }, {
              icon: 'fab fa-youtube cl-youTb',
              link: 'https://www.pinterest.com/'
            }]
          }
        }]
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
  getters: {// getPageActive (state) {
    //     return state.pageActive
    // }
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
  template: "\n    <div class=\"jumbotron jumbotron-fluid\">\n\n        <img :src=\"headerData.background\" alt=\"background-image\">\n\n        <div class=\"container animate__animated animate__fadeInUp animate__slow\">\n            <h1 class=\"title\"> {{ headerData.title }} </h1>\n            <p v-for=\"(lead,i) in headerData.lead\"\n                :key=\"'lead' + i\"\n                :class=\"'lead'+ (i + 1)\">\n                {{ lead }}\n            </p>\n            <div class=\"btn-group mt-3\" role=\"group\" aria-label=\"donare\">\n                <div v-for=\"(btn,i) in headerData.buttons\"\n                    :key=\"'btn'+ i\"\n                    class=\"cont-btn\">\n                    <a :class=\"'btn'+ (i + 1)\"\n                        class=\"btn btn-lg\" :href=\"btn.link\" role=\"button\">\n                        {{ btn.text }}\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    "
}); // -----------------------------MAIN

Vue.component("item-flex", {
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  methods: {
    isInContent: function isInContent(tag) {
      console.log("-------------");
      return tag in this.items;
    },
    divider: function divider() {
      var exists;

      if (this.items.content.divider) {
        exists = true;
      } else exists = false;

      return exists;
    }
  },
  template: "\n    <div\n        v-if=\"isInContent('div')\"\n        :class=\"items.class\">\n\n        <div\n            v-if=\"items.class === 'world'\"\n            class=\"cont-div-data\">\n            <div\n                v-for=\"(div, i) in items.div\"\n                class=\"div-data\">\n\n                <i :class=\"div.icon\"></i>\n\n                <span class=\"data-numbers\"> {{ div.span }} </span>\n\n                <p class=\"head-data\"> {{ div.p }} </p>\n\n            </div>\n\n        </div>\n\n        <template v-else>\n            <div v-for=\"(div, i) in items.div\"\n                class=\"div-data col-3\">\n                <i :class=\"div.icon\"></i>\n                <span class=\"head-card\"> {{ div.span }} </span>\n\n                <p class=\"text-card\"> {{ div.p }} </p>\n\n                <a\n                    :href=\"div.btn.link\"\n                    class=\"btn btn-lg\"  role=\"button\">\n                    {{ div.btn.text }}\n                </a>\n            </div>\n        </template>\n    </div>\n    "
}); // single card

Vue.component("card-vue", {
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    isInContent: function isInContent(tag) {
      return tag in this.card;
    }
  },
  template: "\n    <div class=\"my-card\">\n\n        <template v-if=\"isInContent('img')\">\n            <div v-for=\"(img,index) in card.img\"\n                :href=\"img.link\"\n                :key=\"index\"\n                class=\"cont-img\" >\n\n                <img\n                    :src=\"img.src\"\n                    class=\"\" >\n\n                <span>\n                    <span\n                        v-if=\"'span' in img || 'head' in img\"\n                        class=\"card-title\">\n                        {{ img.head }}\n                    </span>\n\n                    <template v-if=\"'p' in img\">\n                        <p\n                            v-for=\"(p, i) in img.p\"\n                            class=\"card-text\" > {{ p }}\n                        </p>\n                    </template>\n\n                </span>\n            </div>\n        </template>\n\n        <span v-if=\"isInContent('head')\" class=\"card-title\"> {{ card.head }} </span>\n\n        <template v-if=\"isInContent('divider')\">\n            <div class=\"divider\"></div>\n        </template>\n\n        <template v-if=\"isInContent('p')\">\n            <p\n                v-for=\"(p, i) in card.p\"\n                class=\"card-text\" > {{ p }}\n            </p>\n        </template>\n\n        <div v-if=\"isInContent('btn')\">\n            <a v-for=\"(btn,i) in card.btn\"\n                :key=\"'btn'+ i\"\n                class=\"btn btn-lg bg-goldenRod\" :href=\"btn.link\" role=\"button\">\n                {{ btn.text }}\n            </a>\n        </div>\n\n    </div>\n    "
}); // Footer

Vue.component("logo-vue", {
  props: {
    logo: {
      type: Object,
      required: true
    }
  },
  methods: {
    isInContent: function isInContent(tag) {
      return tag in this.logo;
    }
  },
  template: "\n\n    <div v-if=\"isInContent('img')\"\"\n        :href=\"logo.img.link\"\n        class=\"cont-img\" >\n\n        <img\n            :src=\"logo.img.src\"\n            :class=\"logo.class\" >\n    </div>\n    "
});
Vue.component("termsAndConditions", {
  props: {
    terms: {
      type: Object,
      required: true
    }
  },
  template: "\n    <span\n        v-html=\"terms.span\"\n        :class=\"terms.class\"></span>\n    "
}); // simple list

Vue.component("simple-list", {
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  template: "\n    <ul class=\"list-group\">\n        <li\n            v-for=\"(icon,i) in list.div\"\n            :key= \"'icon' + i\"\n            :class=\"'icon' + i\"\n            class=\"list-group-item\">\n                <a\n                    :class=\"icon.icon\"\n                    :href=\"icon.link\">\n                </a>\n        </li>\n    </ul>\n    "
});
Vue.component("col-vue", {
  props: {
    col: {
      type: Object,
      required: true
    }
  },
  computed: {// getColWidht(){
    //     return section.col.widht.xl;
    // }
  },
  template: "\n    <div>\n        <template v-if=\"col.content.type === 'card'\">\n            <card-vue\n                :card=\"col.content\"\n                :class=\"col.content.type\"\n\n            ></card-vue>\n        </template>\n\n        <template v-if=\"col.content.type === 'div-flex'\">\n            <item-flex\n                :items=\"col.content\"\n                :class=\"col.content.type\"\n            ></item-flex>\n        </template>\n\n        <template v-if=\"col.content.type === 'div-logo'\">\n            <logo-vue\n                :logo=\"col.content\"\n                :class=\"col.content.type\"\n            ></logo-vue>\n        </template>\n\n        <template v-if=\"col.content.type === 'link-footer'\">\n            <termsAndConditions\n                :terms = \"col.content\"\n                :class=\"col.content.type\">\n            </termsAndConditions>\n        </template>\n\n        <template v-if=\"col.content.type === 'div-icon-social'\">\n            <simple-list\n                :list = \"col.content\"\n                :class=\"col.content.type\">\n            </simple-list>\n        </template>\n    </div>\n    "
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
    },
    getSections: function getSections(whose) {
      if (whose === 'main') {
        return store.state.mainDate.sections;
      } else if (whose === 'footer') {
        return store.state.footerDate.sections;
      }
    },
    scrollToTop: function scrollToTop() {
      console.log();
      window.scrollTo(0, 0);
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