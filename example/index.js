import Vue from 'vue'
import VueAntiscroll from '../dist/vue-antiscroll'
import App from './app.vue'
Vue.component('vue-antiscroll', VueAntiscroll)
new Vue({
	el: '#app',
	template: '<App />',
	components: { App }
})