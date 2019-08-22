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

// test
import Test from './views/test/Test'
import AccountManager from './views/test/AccountManager'

// manager
// import Monitor from './views/manager/Monitor'
import Watchman from './views/manager/Watchman'
import Personnel from './views/manager/Personnel'
import Vehicle from './views/manager/Vehicle'
import Monitoring from './views/manager/Monitoring'
import Statistical from './views/manager/Statistical'
import Alarm from './views/manager/Alarm'
import Floor from './views/manager/Floor'
import Plan from './views/manager/Plan'

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
                { path: '/account_manager', component: AccountManager, name: 'account_manager' },

                // manager
                // { path: '/monitor', component: Monitor, name: 'monitor' },
                { path: '/watchman', component: Watchman, name: 'watchman' },
                { path: '/personnel', component: Personnel, name: 'personnel' },
                { path: '/vehicle', component: Vehicle, name: 'vehicle' },
                { path: '/monitoring', component: Monitoring, name: 'monitoring' },
                { path: '/statistical', component: Statistical, name: 'statistical' },
                { path: '/alarm', component: Alarm, name: 'alarm' },
                { path: '/floor', component: Floor, name: 'floor' },
                { path: '/plan', component: Plan, name: 'plan' },
            ]
        },
        // 登陆页面
        {
            path: '/login',
            name: 'login',
            component: Login
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
