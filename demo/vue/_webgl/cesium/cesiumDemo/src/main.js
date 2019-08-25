import Vue from 'vue'
import App from './App.vue'

import axios from "axios"

import i18n from './assets/i18n/i18n';  // 引入国际化组件

import md5 from 'js-md5';  //md5加密

import VueCesium from 'vue-cesium'

import ElementUI from 'element-ui'  // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './store'

Vue.config.productionTip = false;

// 全局注册
Vue.use(ElementUI);
Vue.use(i18n);

// 使用Cesium
// Vue-Cesium默认加载`https://unpkg.com/cesium/Build/Cesium/Cesium.js`
// Vue.use(VueCesium)

Vue.use(VueCesium, {
    // cesiumPath 是指引用的Cesium.js路径，如
    // 项目本地的Cesium Build包，vue项目需要将Cesium Build包放static目录：
    // cesiumPath: /static/Cesium/Cesium.js
    // 个人在线Cesium Build包：
    // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/Cesium/Cesium.js'
    // 个人在线SuperMap Cesium Build包（在官方基础上二次开发出来的）：
    // cesiumPath: 'https://zouyaoji.top/vue-cesium/statics/SuperMapCesium/Cesium.js'
    // 官方在线Cesium Build包，有CDN加速，推荐用这个：
    cesiumPath: 'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
    // 指定Cesium.Ion.defaultAccessToken，使用Cesium ion的数据源需要到https://cesium.com/ion/申请一个账户，获取Access Token。不指定的话可能导致Cesium在线影像加载不了
    accessToken: ''
  })

//挂载（使其可以在各个组件使用）
Vue.prototype.axios = axios;
Vue.prototype.md5 = md5;  // 在main.js文件中将md5转换成vue原型

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');