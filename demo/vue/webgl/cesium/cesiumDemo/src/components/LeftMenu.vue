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

                    <!-- cesiumDemo -->
                    <router-link to="/cesium_demo1">
                        <el-menu-item index="1">
                            <i class="fa fa-user"></i>
                            <span slot="title">cesiumDemo1</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/cesium_demo2">
                        <el-menu-item index="2">
                            <i class="fa fa-user"></i>
                            <span slot="title">cesiumDemo2</span>
                        </el-menu-item>
                    </router-link>
                    <router-link to="/cesium_demo3">
                        <el-menu-item index="3">
                            <i class="fa fa-user"></i>
                            <span slot="title">cesiumDemo3</span>
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
                /*{
                    icon: "fa fa-paragraph",
                    name: "test",
                    path: "infoshow",
                    children: [
                        { path: "/test", name: "test" },
                    ]
                }*/
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
                case "cesium_demo1":
                    return "1";
                    break;
                case "cesium_demo2":
                    return "2";
                    break;
                case "cesium_demo3":
                    return "3";
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
