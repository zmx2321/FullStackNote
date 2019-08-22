<template>
    <section class="menu_page">
        <el-row>
             <el-col>
                 <el-menu :default-active="activeIndex" mode="vertical" background-color="#324057" text-color="#fff" active-text-color="#409eff" class="menu">
                    <!-- 首页 -->
                    <router-link to="/home">
                        <el-menu-item index="0">
                            <i class="fa fa-server"></i>
                            <span slot="title">首页</span>
                        </el-menu-item>
                    </router-link>

                    <router-link to="/cesium_model">
                        <el-menu-item index="1">
                            <i class="fa fa-user"></i>
                            <span slot="title">模板</span>
                        </el-menu-item>
                    </router-link>

                    <!-- 二级菜单 -->
                    <template  v-for="item in items" >
                        <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                            <template slot="title">
                                <i :class="'fa fa-margin '+item.icon"></i>
                                <span slot="title">{{item.name}}</span>
                            </template>
                            <router-link v-for="(citem,cindex) in item.children"
                                :to="citem.path" :key="cindex" class="menu_child">
                                <el-menu-item
                                    :index='citem.path'>
                                    <span slot="title">{{citem.name}}</span>
                                </el-menu-item>
                            </router-link>
                        </el-submenu>
                    </template>
                 </el-menu>
             </el-col>
        </el-row>
    </section>
</template>

<script>
export default {
    name: "leftmenu",

    data() {
        return {
            items: [
                {
                    icon: "fa fa-paragraph",
                    name: "开始",
                    path: "开始",
                    children: [
                        { path: "/cesium_demo1", name: "快速上手" },
                        { path: "/cesium_demo2", name: "基础" },
                        { path: "/cesium_demo3", name: "HelloWorld" },
                    ]
                },
                {
                    icon: "fa fa-paragraph",
                    name: "场景",
                    path: "场景",
                    children: [
                        { path: "/cesium_demo4", name: "场景" },
                    ]
                },
                {
                    icon: "fa fa-paragraph",
                    name: "工具",
                    path: "工具",
                    children: [
                        { path: "/cesium_demo5", name: "绘制" },
                        { path: "/cesium_demo6", name: "量算" },
                        { path: "/cesium_demo7", name: "导航罗盘" },
                    ]
                },
            ]
        };
    },

    // 解决路由跳转导航不高亮问题
    computed:{
        activeIndex(){
            let pathName = this.$route.path.replace('/','');

            switch (pathName) {
                case "home":
                    return "0";
                    break;
                case "cesium_model":
                    return "1";
                    break;
            }
        },
    },
};
</script>

<style scoped>
    .menu_page {
        width: 100%;
        height: 100%;
    }

    .menu{
        border: none;
    }

    .menu span{
        margin-left: 8px;
    }
</style>
