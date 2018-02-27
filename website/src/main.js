// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueAxios, axios);
Vue.use(VueGoogleMaps, {
  load: {
    key:'AIzaSyBRqNNbnn1l7sYScroo53cvKhPqUna1-8g',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})


//import components
import FrontPage from './components/FrontPage'
import AboutPage from './components/AboutPage'
import OurTeam from './components/OurTeam'
import ContactPage from './components/ContactPage'
import EmailModal from './components/EmailModal'

Vue.config.productionTip = false

//routes
const routes = [
  {
    path: '/',
    component: FrontPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/team',
    component: OurTeam
  },
  {
    path: '/contact',
    component: ContactPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
