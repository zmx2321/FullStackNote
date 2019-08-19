import Vue from 'vue'
import App from './App.vue'

import axios from "axios"

import i18n from './assets/i18n/i18n';  // 引入国际化组件

import md5 from 'js-md5';  //md5加密

import ElementUI from 'element-ui'  // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'

Vue.config.productionTip = false;

// 全局注册
Vue.use(ElementUI);
Vue.use(i18n);

//挂载（使其可以在各个组件使用）
Vue.prototype.axios = axios;
Vue.prototype.md5 = md5;  // 在main.js文件中将md5转换成vue原型

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
