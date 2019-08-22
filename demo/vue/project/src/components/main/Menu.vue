<template>
    <section class="menu_page">
        <aside>
            <ul>
                <li><router-link to="/statistical">统计管理</router-link></li>
                <li><router-link to="/alarm">报警管理</router-link></li>
                <li><router-link to="/floor">楼层管理</router-link></li>
                <li><router-link to="/floor">预案管理</router-link></li>
            </ul>
        </aside>
    </section>
</template>

<script>
export default {
    name: "leftmenu",

    data() {
        return {
        };
    },

    // 解决路由跳转导航不高亮问题
    computed:{
    },
};
</script>

<style scoped>
.menu_page {
    background: #fff;
}
</style>
