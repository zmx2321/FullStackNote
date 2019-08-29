<template>
    <div class="container f-oh">
        <!-- header -->
        <div class="header">
            <HeadNav></HeadNav>
        </div>

        <!-- maincont -->
        <div class="maincont">
            <!-- main -->
            <div class="main">
                <router-view></router-view>
            </div>

            <!-- menu -->
            <div class="menu">
                <Menu></Menu>
            </div>
       </div>
    </div>
</template>

<script>
    import HeadNav from '../components/main/HeadNav'
    import Menu from '../components/main/Menu'
    
    export default {
        name: "index",

        components: {
            HeadNav,
            Menu,
        },
        created: function(){
            // console.log(this.md5("admin"));
        },
    }
</script>

<style lang="less" scoped>
    .container {
        position: fixed;
        width: 100%;
        height: 100%;
        background: url(../assets/images/index/bg.jpg) no-repeat center center;

        .header {
            width: 100%;
            height: @HeaderHeight;
        }

        .maincont {
            display: flex;
            width: 100%;
            height: calc(100vh - @HeaderHeight);

            .main {
                flex: 1.8;
                border:1px solid red;
            }

            .menu {
                flex: 0.2;
                height: 100px;
                background: #fff;
                
            }
        }
    }
</style>