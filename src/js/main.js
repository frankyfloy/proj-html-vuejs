Vue.config.devtools = true;


// Store
const store = new Vuex.Store({
    state: {
        event: false,

        //Updated with the updateScroll() method in $app.methods.updateScroll()
        headerData:{
            background: './assets/img/home-page-slider.jpg',
            title: 'make a difference',
            lead: ['as long as poverty, injustice & inequality persist, none of us can truly rest'],
            buttons:[
                btn1 = {
                    text: 'our mission',
                    link: 'https://avada.theme-fusion.com/charity/mission/'
                },
                btn2 = {
                    text: 'donate now',
                    link: 'https://avada.theme-fusion.com/charity/donate/'
                }
            ]
        },
        navbarData:{
            logos: {
                desktop:{
                    white: './assets/img/avada-charity-logo-retina.png',
                    colorated: './assets/img/avada-charity-mobile-logo-retina.png',
                },
                mobile: {
                    white: './assets/img/avada-charity-mobile-logo-low.png',
                    colorated: './assets/img/avada-charity-mobile-logo-retina.png',
                }
            },
            linkHome:'https://avada.theme-fusion.com/charity/',
            navItems:[
                {
                    type: 'link',
                    text: 'home',
                    link: 'https://avada.theme-fusion.com/charity/'
                },
                {
                    type: 'link',
                    text: 'mission',
                    link: 'https://avada.theme-fusion.com/charity/mission/'
                },
                {
                    type: 'dropdown',
                    text: 'causes',
                    link: 'https://avada.theme-fusion.com/charity/causes/',
                    dropdownItems: [
                        {
                            text :'FAIR TRADE',
                            link: 'https://avada.theme-fusion.com/charity/portfolio-items/fair-trade/',
                        },
                        {
                            text :'VACCINES',
                            link: 'https://avada.theme-fusion.com/charity/portfolio-items/farming/',
                        },
                        {
                            text :'VACCINES',
                            link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/',
                        },
                        {
                            text :'EDUCATION',
                            link: 'https://avada.theme-fusion.com/charity/portfolio-items/education/',
                        },
                        {
                            text :'CLEAN WATER',
                            link: 'https://avada.theme-fusion.com/charity/portfolio-items/clean-water/',
                        },
                        {
                            text :'SHELTER',
                            link: 'https://avada.theme-fusion.com/charity/portfolio-items/shelter/',
                        }
                    ]
                },
                {
                    type: 'link',
                    text: 'journal',
                    link: 'https://avada.theme-fusion.com/charity/journal/'
                },
                {
                    type: 'btnLink',
                    text: 'donate',
                    link: 'https://avada.theme-fusion.com/charity/donate/'
                },
            ]
        }
    },

    mutations: {
        toggleEvent (state,id) {
            if (id === 'toggle') {
                state.event = !state.event;
            }else {
                state.event = false;
            }
        },
        PAGE_ACTIVE(state, item) {
            state.pageActive = item;
        },
    },

    actions: {
        pageActive({ commit }, page) {
            commit('PAGE_ACTIVE', page);
        },
    },

    getters: {
        getPageActive (state) {
            return state.pageActive
        }
    }
})


// ------------ HEADER

// nav
Vue.component("navbar-vue", {

    props:{
        scroll_event: {
            type: Number,
            required : true
        },
        page_active: {
            type: Object,
            required : true
        },
        widht_screen:{
            type: Number,
            required : true
        }
    },

    computed: {
        navbarData(){
            return store.state.navbarData
            console.log(navbarData);
        },
        getPageActive(){
            return store.state.pageActive
        },
    },

    methods: {
        checkType(type){
            return type;
        },

        pageActive(item){
            this.$store.dispatch('pageActive', item);

            if(item.text.toLowerCase() === this.page_active.text.toLowerCase()){
                return 'text-gold'
            }
        },

        bgColorScrollY(){
            let nav;
            if(this.scroll_event > 50){
                nav = 'navbar-light bg-light';
            }else
                nav = 'navbar-dark';

            this.mediaQueryLogo();
            return nav
        },

        // Mediaquery
        mediaQueryLogo(){
            let logo;
            if(this.scroll_event > 50){
                logo =store.state.navbarData.logos.mobile.colorated;
            }else
                logo = store.state.navbarData.logos.desktop.white;
            return logo;
        },
    },


    // navbarData.logos
    template: `
    <nav
        :class="bgColorScrollY()"
        class="navbar navbar-expand-lg">

        <a class="navbar-brand" :href="navbarData.linkHome">
            <img
                :src="mediaQueryLogo()" alt="logo">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                <li
                    v-for="(item,i) in navbarData.navItems"
                    :class="checkType(item.type)"
                    class="nav-item active">

                    <template v-if="item.type === 'link'">
                        <a
                            class="nav-link" :href="item.link">
                            <span
                                @click:="pageActive(item)"
                                :class="pageActive(item)">
                                {{ item.text }}
                            </span>
                            <span class="sr-only"> {{item.text}} </span>
                        </a>
                    </template>

                    <template v-else-if="item.type === 'dropdown'">
                        <a
                            @click:="pageActive(item)"
                            :class="pageActive(item)"
                            :href="item.link"
                            class="nav-link dropdown-toggle"
                            id="navbarDropdown"
                            role="button" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="true">
                        {{ item.text }}
                        </a>

                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <template v-for="(dropdownItem, i) in item.dropdownItems">
                                <a
                                    @click:="pageActive(item)"
                                    :href="dropdownItem.link"
                                    class="dropdown-item" > {{dropdownItem.text}} </a>
                                <div class="dropdown-divider"></div>
                            </template>
                        </div>
                    </template>

                    <template v-else-if="item.type === 'btnLink'">
                        <a
                            @click:="pageActive(item)"
                            :class="pageActive(item)"
                            class="btn btn-lg" :href="item.link" role="button">
                            {{ item.text }}
                        </a>
                    </template>
                </li>
            </ul>
        </div>
    </nav>
    `
})


// Jumbotron
Vue.component("jumbo-vue", {

    computed: {
        headerData(){
            return store.state.headerData
            console.log(headerData);
        },
    },

    template: `
    <div class="jumbotron jumbotron-fluid">

        <img :src="headerData.background" alt="background-image">

        <div class="container">
            <h1 class="title"> {{ headerData.title }} </h1>
            <p v-for="(lead,i) in headerData.lead"
                :key="'lead' + i"
                :class="'lead'+ (i + 1)">
                {{ lead }}
            </p>
            <div class="btn-group mt-3" role="group" aria-label="donare">
                <div v-for="(btn,i) in headerData.buttons"
                    :key="'btn'+ i"
                    class="cont-btn">
                    <a :class="'btn'+ (i + 1)"
                        class="btn btn-lg" :href="btn.link" role="button">
                        {{ btn.text }}
                    </a>
                </div>
            </div>
        </div>
    </div>
    `
})


// ****** ROOT *********
var app = new Vue({

    el: '#root',
    vuetify: new Vuetify(),
    // "inject" the store
    // into all child components from the root component
    store,
    data: {
        widhtScreen: 0,
        scrollWindow: 0,
        widthWindow: 0,
        pageActive: null
    },
    created() {
        this.pageActive = store.state.navbarData.navItems[0];
        console.log(this.pageActive);
    },

    mounted() {
        window.addEventListener('scroll', this.updateScroll);
        this.widhtScreen = this.$vuetify.breakpoint.width;
        console.log(this.widhtScreen)
    },

    computed: {
        // TODO: RECUPERARE LA LARGHEZZA AGGIORNATA
        // get_widthWindow(){
        //     console.log(this.widhtScreen)
        //     this.widhtScreen = this.vuetify.breakpoint.width;
        //     return this.widhtScreen;
        // }

    },
    methods: {
        updateScroll() {
           this.scrollWindow = window.scrollY;
           console.log(event);
        }
    },
})
