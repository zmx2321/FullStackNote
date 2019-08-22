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


     <!-- <HeadNav></HeadNav> -->
        <!-- <IconTop></IconTop> -->
        
        <!-- <Statistical></Statistical> -->

        <!-- <router-view></router-view> -->

    <!-- <el-container class="container f-pr">
        <el-header class="header f-oh">
            <HeadNav></HeadNav>
        </el-header>
        <el-container>
            <el-aside class="aside f-oh">
                <LeftMenu></LeftMenu>
            </el-aside>
            <el-main class="main f-oh">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container> -->
</template>

<script>
    import HeadNav from '../components/main/HeadNav'
    import Menu from '../components/main/Menu'

    // import IconTop from '../components/Icon_top2'
    // import Statistical from '../components/Statistical'

    export default {
        name: "index",

        components: {
            HeadNav,
            Menu,

            // IconTop,
            // Statistical
        },
        created: function(){
            // console.log(this.md5("admin"));
        },
    }
</script>

<style lang="less" scoped>
    @HeaderHeight: 63px;

    .container {
        width: 100%;
        height: 100vh;
        background: url(../assets/images/index/bg.jpg) no-repeat center center;

        .header {
            height: @HeaderHeight;
            width: 80%;
            margin: 0 auto;
        }

        .maincont {
            display: flex;
            width: 100%;
            height: calc(100vh - @HeaderHeight);

            .main {
                flex: 1.9;
                border:1px solid red;
            }

            .menu {
                flex: 0.1;
                height: 100px;
                background: #fff;
                
            }
        }
    }
</style>