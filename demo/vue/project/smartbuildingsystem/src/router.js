import Vue from 'vue'
import Router from 'vue-router'

import md5 from 'js-md5';  //md5加密

// index
import Index from './views/Index'  // 首页

// main
import Home from './views/main/Home'  // 路由首页
import NotFound from './views/main/NotFound'

// admin
import Login from './views/admin/Login'  // 登录

// manager
import PersonnelManager from './views/manager/PersonnelManager'  // 人员管理
import VehicleManager from './views/manager/VehicleManager'  // 车辆管理
import MonitoringManager from './views/manager/MonitoringManager'  // 监控管理
import StatisticalManager from './views/manager/StatisticalManager'  // 统计管理
import AlarmManager from './views/manager/AlarmManager'  // 报警管理
import FloorManager from './views/manager/FloorManager'  // 楼层管理
import WatchmanManager from './views/manager/WatchmanManager'  // 巡更管理

// test
import Test from './views/test/Test'
import AccountManager from './views/test/AccountManager'

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
                // manager
                { path: '/personnel_manager', component: PersonnelManager, name: 'personnel_manager' },
                { path: '/vehicle_manager', component: VehicleManager, name: 'vehicle_manager' },
                { path: '/monitoring_manager', component: MonitoringManager, name: 'monitoring_manager' },
                { path: '/statistical_manager', component: StatisticalManager, name: 'statistical_manager' },
                { path: '/alarm_manager', component: AlarmManager, name: 'alarm_manager' },
                { path: '/floor_manager', component: FloorManager, name: 'floor_manager' },
                { path: '/watchman_manager', component: WatchmanManager, name: 'watchman_manager' },
                // test
                { path: '/test', component: Test, name: 'test' },
                { path: '/account_manager', component: AccountManager, name: 'account_manager' },
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
