import Vue from 'vue';
import VueRouter from 'vue-router';

/* 导入需要渲染的组件 */
import Home from "../views/Home.vue";
import Model from "../views/Model.vue";
import Vote from "../views/Vote.vue";

Vue.use(VueRouter);
const router = new VueRouter({
	mode: 'hash',
	routes: [{
		path: '/',
		component: Home
	}, {
		path: '/model',
		component: Model
	}, {
		path: '/vote',
		component: Vote
	}]
});
export default router;