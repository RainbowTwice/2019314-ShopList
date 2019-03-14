//入口js

import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    router
})