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
        },


        mainDate:{
            sections : [
                {
                    id: 'section1',
                    columns:[
                        {
                            id: 'everyMomentCounts',
                            type: 'col',
                            mediaXl: 'col-8',
                            mediaSm: 'col-12',

                            content:{
                                type: 'card',
                                head: 'EVERY MOMENT COUNTS',
                                divider: true,
                                p: ['Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo vehicula, nisi est laoreet leo, ac convallis nisi nibh id velit. Aliquam mattis metus a nisi pretium.',
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh vestibulum, laoreet ipsum quis, vestibulum nisi. Curabitur non mi et turpis pharetra vulputate. Ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac nibh vestibulum, laoreet ipsum quis, vestibulum nisi.',
                                'Curabitur non mi et turpis pharetra vulputate. Cras consequat, risus nec commodo vehicula, nisi est laoreet leo, ac convallis nisi nibh id velit.'],
                                btn : [
                                    {
                                        text: 'our mission',
                                        link: 'https://avada.theme-fusion.com/charity/mission/'
                                    }
                                ]
                            }
                        },
                        {
                            id: 'numbersReached',
                            type: 'col',
                            mediaXl: 'col-4',
                            mediaSm: 'col-12',

                            content: {
                                type: 'div-flex',
                                class: 'world',

                                div: [
                                    {
                                        icon : 'far fa-heart',
                                        span : '2032',
                                        p : 'Volunteers worldwide'
                                    },
                                    {
                                        icon : 'fas fa-globe',
                                        span : '132',
                                        p : 'Volunteers worldwide'
                                    },
                                    {
                                        icon : 'fas fa-dollar-sign',
                                        span : '3.8M',
                                        p : 'Volunteers worldwide'
                                    }
                                ]
                            }
                        }
                    ]
                },




                {
                    id: 'section2',
                    columns:[
                        {
                            id: 'OUR_VALUES',
                            type: 'col',
                            mediaXl: 'col-12',
                            mediaSm: 'col-12',

                            content:{
                                type: 'card',
                                head: 'OUR VALUES',
                                divider: true,
                                p: ['Think Big. Act Bigger'],
                            }
                        },

                        {
                            id: 'CARD_OUR_VALUES',
                            type: 'col',
                            mediaXl: 'col-12',
                            mediaSm: 'col-12',
                            content: {
                                type: 'div-flex',
                                class: 'cardOurValues',
                                div: [
                                    {
                                        icon : 'fas fa-tint',
                                        span : 'Clean Water',
                                        p : 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
                                        btn : {
                                            text: 'LEARN MORE',
                                            link: 'https://avada.theme-fusion.com/charity/mission/'
                                        },
                                    },
                                    {
                                        icon : 'fas fa-stethoscope',
                                        span : 'Vaccinations',
                                        p : 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
                                        btn : {
                                            text: 'LEARN MORE',
                                            link: 'https://avada.theme-fusion.com/charity/mission/'
                                        },
                                    },
                                    {
                                        icon : 'fas fa-graduation-cap',
                                        span : 'Education',
                                        p : 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
                                        btn : {
                                            text: 'LEARN MORE',
                                            link: 'https://avada.theme-fusion.com/charity/mission/'
                                        },
                                    },
                                    {
                                        icon : 'fab fa-pagelines',
                                        span : 'Farming',
                                        p : 'Nullam convallis, orci in congue aliquet, diam mauris cursus urna, Id maximus lectus magna maximus.',
                                        btn : {
                                            text: 'LEARN MORE',
                                            link: 'https://avada.theme-fusion.com/charity/mission/'
                                        },
                                    }
                                ]
                            }
                        }
                    ]
                },


                {
                    id: 'section3',
                    columns:[
                        {
                            id: 'RECENT_CAUSES',
                            type: 'col',
                            mediaXl: 'col-12',
                            mediaSm: 'col-12',

                            content:{
                                type: 'card',
                                head: 'RECENT CAUSES',
                                divider: true,
                                p: ['We run projects in over 30 countries in 5 contintents'],
                            }
                        },

                        {
                            id: 'CARD_OUR_VALUES',
                            type: 'col',
                            mediaXl: 'col-12',
                            mediaSm: 'col-12',
                            content: {
                                type: 'card',
                                class: 'cardImgRecentCause',

                                img:[
                                    {
                                        head : 'FAIR TRADE',
                                        src: "./assets/img/avada-charity-fair-trade-featured-600x450.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/fair-trade/'
                                    },
                                    {
                                        head : 'SHELTER',
                                        src : "./assets/img/avada-charity-shelter-featured-600x450.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/shelter/'
                                    },
                                    {
                                        head : 'FARMING',
                                        src: "./assets/img/avada-charity-farming-featured-600x450.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/farming/'
                                    },
                                    {
                                        head : 'VACCINES',
                                        src: "./assets/img/avada-charity-vaccines-featured-600x450.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/'
                                    }
                                ]

                            }
                        }
                    ]
                },
                {
                    id: 'section4',
                    columns:[
                        {
                            id: 'VIEW_ALL_OUR_CAUSES',
                            type: 'col',
                            mediaXl: 'col-12',
                            mediaSm: 'col-12',

                            content:{
                                type: 'card',
                                btn : [
                                    {
                                        text: 'VIEW ALL OUR CAUSES',
                                        link: 'https://avada.theme-fusion.com/charity/causes/'
                                    }
                                ],
                            }
                        },
                    ]
                },
                {
                    id: 'section5',
                    columns:[
                        {
                            id: 'LATEST_ARTICLES',
                            type: 'col',
                            mediaXl: 'col-12',
                            mediaSm: 'col-12',

                            content:{
                                type: 'card',
                                head: 'LATEST ARTICLES',
                                divider: true,
                                p: ['Together we make all the difference'],
                            }
                        },

                        {
                            id: 'RECENT_CAUSES',
                            type: 'col',
                            mediaXl: 'col-4',
                            mediaSm: 'col-4',
                            content: {
                                type: 'card',
                                class: 'cardImgRecentCause',

                                img:[
                                    {
                                        headHover: 'Understanding community complexities',
                                        head : 'Understanding community complexities',
                                        src: "./assets/img/photo-1444213007800-cff19e1677ac-600x450.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/fair-trade/',
                                        p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
                                    },
                                ]
                            }
                        },
                        {
                            id: 'RECENT_CAUSES2',
                            type: 'col',
                            mediaXl: 'col-4',
                            mediaSm: 'col-4',
                            content: {
                                type: 'card',
                                class: 'cardImgRecentCause',

                                img: [
                                    {
                                        head : 'The human story of uniqueness',
                                        src : "./assets/img/photo-1444664597500-035db93e2323-177x142.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/shelter/',
                                        p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
                                    },
                                    {
                                        head : 'Sustainable trade tactics',
                                        src: "./assets/img/photo-1447430617419-95715602278e-177x142.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/farming/',
                                        p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
                                    },
                                    {
                                        head : 'Farmers making a difference',
                                        src: "./assets/img/photo-1460230525622-630fe3294cd7-177x142.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/',
                                        p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
                                    },
                                    {
                                        head : 'Meeting remote tribes in Peru',
                                        src: "./assets/img/photo-1460600421604-5e138c208b9c-177x142.jpg",
                                        link: 'https://avada.theme-fusion.com/charity/portfolio-items/vaccines/',
                                        p: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Prasent ac nibh vestibulum, laoreet ipsum.']
                                    }
                                ]
                            }

                        },
                        {
                            id: 'VIEW_ALL_OUR_CAUSES',
                            type: 'col',
                            mediaXl: 'col-8',
                            mediaSm: 'col-8',

                            content:{
                                type: 'card',
                                btn : [
                                    {
                                        text: 'VIEW ALL OUR ARTICLES',
                                        link: 'https://avada.theme-fusion.com/charity/journal/'
                                    }
                                ],
                            }
                        },
                    ]
                },
                {
                    id: 'section6',
                    columns:[
                        {
                            id: 'CHANGE_A_LIFE_TODAY',
                            type: 'col',
                            mediaXl: 'col-12',
                            mediaSm: 'col-12',

                            content:{
                                type: 'card',
                                head: 'CHANGE A LIFE TODAY',
                                divider: true,
                                p: ['As long as poverty, injustice & inequality persist, none of us can truly rest. It doesn’t take much to change a life, Get in touch today and start making the difference.'],
                                divider: true,
                                btn:[
                                    {
                                        text: 'VOLUNTEER',
                                        link: 'https://avada.theme-fusion.com/charity/causes/'
                                    },
                                    {
                                        text: 'DONATE NOW',
                                        link: 'https://avada.theme-fusion.com/charity/donate/'
                                    }
                                ]
                            }
                        },
                    ]
                },
                {
                    id: 'section7'
                },
                {
                    id: 'section8'
                }

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
        // getPageActive (state) {
        //     return state.pageActive
        // }
    },

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

        <div class="container animate__animated animate__fadeInUp animate__slow">
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



// -----------------------------MAIN
Vue.component("item-flex", {

    props: {
        items: {
            type: Object,
            required : true
        },
    },

    methods:{
        isInContent(tag){
            console.log("-------------");
            return tag in this.items;
        },

        divider(){
            let exists;
            if(this.items.content.divider){
                exists = true;
            }else
                exists = false;
            return exists;
        }
    },

    template: `
    <div
        v-if="isInContent('div')"
        :class="items.class">

        <div
            v-if="items.class === 'world'"
            class="cont-div-data">
            <div
                v-for="(div, i) in items.div"
                class="div-data">

                <i :class="div.icon"></i>
                <span class="data-numbers"> {{ div.span }} </span>

                <p class="head-data"> {{ div.p }} </p>

            </div>

        </div>

        <template v-else>
            <div v-for="(div, i) in items.div"
                class="div-data col-3">
                <i :class="div.icon"></i>
                <span class="head-card"> {{ div.span }} </span>

                <p class="text-card"> {{ div.p }} </p>

                <a
                    :href="div.btn.link"
                    class="btn btn-lg"  role="button">
                    {{ div.btn.text }}
                </a>
            </div>
        </template>
    </div>
    `
})



// single card
Vue.component("card-vue", {

    props: {
        card: {
            type: Object,
            required : true
        },
    },

    methods:{
        isInContent(tag){
            console.log("-------------");
            return tag in this.card;
        },

        // divider(){
        //     let exists;
        //     if(this.card.content.divider){
        //         exists = true;
        //     }else
        //         exists = false;
        //     return exists;
        // }
    },

    template: `
    <div class="my-card">


        <template v-if="isInContent('img')">
            <div v-for="(img,index) in card.img"
                :href="img.link"
                :key="index"
                class="cont-img" >

                <img
                    :src="img.src"
                    class="" >

                <span>
                    <span
                        v-if="'span' in img || 'head' in img"
                        class="card-title">
                        {{ img.head }}
                    </span>

                    <template v-if="'p' in img">
                        <p
                            v-for="(p, i) in img.p"
                            class="card-text" > {{ p }}
                        </p>
                    </template>
                </span>


            </div>
        </template>


        <span v-if="isInContent('head')" class="card-title"> {{ card.head }} </span>

        <template v-if="isInContent('divider')">
            <div class="divider"></div>
        </template>


        <template v-if="isInContent('p')">
            <p
                v-for="(p, i) in card.p"
                class="card-text" > {{ p }}
            </p>
        </template>




        <div v-if="isInContent('btn')">
            <a v-for="(btn,i) in card.btn"
                :key="'btn'+ i"
                class="btn btn-lg bg-goldenRod" :href="btn.link" role="button">
                {{ btn.text }}
            </a>
        </div>


    </div>
    `
})




//
Vue.component("col-vue", {

    props:{
        col: {
            type: Object,
            required : true
        },
    },
    computed:{
        // getColWidht(){
        //     return section.col.widht.xl;
        // }
    },

    template: `
    <div>
        <template v-if="col.content.type === 'card'">
            <card-vue
                :card="col.content"
                :class="col.content.type"

            ></card-vue>
        </template>

        <template v-if="col.content.type === 'div-flex'">
            <item-flex
                :items="col.content"
                :class="col.content.type"
            ></item-flex>
        </template>
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
        },

        getSections(){
            return store.state.mainDate.sections;
        },

        getCol(){
            return store.state.mainDate.sections;
        },



    },
})
