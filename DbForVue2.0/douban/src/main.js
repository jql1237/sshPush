import VueRouter from 'vue-router'
import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import store from './store/store'
import VueResource from 'vue-resource'
import Home from './components/Home.vue'
import Hot from './components/Hot'

import Detail from './components/Detail.vue'

import Top from './components/Top.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueResource);
Vue.use(VueRouter)
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/in_theaters', component: Hot },
    { path: '/top250', component: Top },
    { path: '/detail/:id', name: "Detail", component: Detail }

];
const router = new VueRouter({
    routes
});
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    axios,
    store,
    render: h => h(App)
}).$mount('#app');