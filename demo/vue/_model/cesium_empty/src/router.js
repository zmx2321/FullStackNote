import Vue from 'vue'
import Router from 'vue-router'

import md5 from 'js-md5';  //md5加密

// index
import Index from './views/Index'

// main
import Home from './views/main/Home'
import NotFound from './views/main/NotFound'

// admin
import Login from './views/admin/Login'
import ModifyPassword from './views/admin/ModifyPassword'

// test
import Test from './views/test/Test'

// manager
import AccountManager from './views/manager/AccountManager'

// cesiumDemo
import CesiumDemo1 from './views/cesiumDemo/CesiumDemo1'
import CesiumDemo2 from './views/cesiumDemo/CesiumDemo2'
import CesiumDemo3 from './views/cesiumDemo/CesiumDemo3'
import CesiumDemo4 from './views/cesiumDemo/CesiumDemo4'
import CesiumDemo5 from './views/cesiumDemo/CesiumDemo5'


Vue.use(Router);

const router = new Router({
    mode: 'history',
    // mode: 'hash',
    base: process.env.BASE_URL,

    routes: [
        // 如果是根路径的话，重定向到index路径
        {
            path: '/',
            redirect: '/index'
        },
        // 如果访问index则跳转到index路径
        {
            path: '/index',
            name: '',
            component: Index,
            children: [
                { path: '', component: Home },
                { path: '/home', component: Home, name: 'home' },

                // test
                { path: '/test', component: Test, name: 'test' },

                // manager
                { path: '/account_manager', component: AccountManager, name: 'account_manager' },

                // cesiumDemo
                { path: '/cesium_demo1', component: CesiumDemo1, name: 'cesium_demo1' },
                { path: '/cesium_demo2', component: CesiumDemo2, name: 'cesium_demo2' },
                { path: '/cesium_demo3', component: CesiumDemo3, name: 'cesium_demo3' },
                { path: '/cesium_demo4', component: CesiumDemo4, name: 'cesium_demo4' },
                { path: '/cesium_demo5', component: CesiumDemo5, name: 'cesium_demo5' },
            ]
        },
        // 登陆页面
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        // 修改密码
        {
            path: '/modify_password',
            name: 'modify_password',
            component: ModifyPassword
        },
        // 404
        {
            path: '*',
            name: '404',
            component: NotFound
        },
    ]
});

// 添加路由守卫
// router.beforeEach((to, from, next) => {
//     const isLogin = localStorage.code == md5("0") ? true : false;
//     if (to.path == "/login" || to.path == '/register') {
//         next();
//     } else {
//         isLogin ? next() : next("/login");
//     }
// });

export default router;
