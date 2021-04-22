Vue.config.devtools = true;

// Store
const store = new Vuex.Store({
    state: {
        event: false,
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
            logoUrl: './assets/img/avada-charity-logo-retina.png',
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
                    link: 'https://avada.theme-fusion.com/charity/causes/'
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
    }
})


// Header
// nav
Vue.component("navbar-vue", {
    // data: function() {
    //     scrollPosition: null
    // },
    computed: {
        navbarData(){
            return store.state.navbarData
            console.log(navbarData);
        }
    },

    methods: {
       //  updateScroll() {
       //     this.scrollPosition = window.scrollY
       // },
        checkType(type){
            return type;
        }
    },
    // mounted() {
    //     window.addEventListener('scroll', this.updateScroll);
    // },



    //Conditional construct for html element type, render the corresponding element
    // :class="{change_color: scrollPosition > 50}
    template: `
    <nav
        class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" :href="navbarData.linkHome">
            <img :src="navbarData.logoUrl" alt="logo">
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">

                <li v-for="(item,i) in navbarData.navItems"
                    :class="checkType(item.type)"
                    class="nav-item active">

                    <template v-if="item.type === 'link'">
                        <a  class="nav-link" :href="item.link"> {{ item.text }} <span class="sr-only"> {{item.text}} </span></a>
                    </template>


                    <template v-else-if="item.type === 'dropdown'">
                        <a  class="nav-link dropdown-toggle" :href="item.link" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {{ item.text }}
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </template>


                    <template v-else-if="item.type === 'btnLink'">
                        <a class="btn btn-lg" :href="item.link" role="button">
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

    // "inject" the store
    // into all child components from the root component
    store,
    data: {
    },

    mounted:function () {

    },

    methods: {

    },
})
