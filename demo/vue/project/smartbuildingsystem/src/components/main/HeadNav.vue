<template>
    <header>
        <!-- header_l -->
        <section class="header_l f-oh f-pr">
            <div class="header_img f-oh">
                <img src="../../assets/images/header/header_bg.png" alt="header_img">
            </div>
            <span class="title">{{ this.$store.state.title }}</span>

            <div class="hdl_l f-oh">
                <span class="time">{{ getTime }}</span>

                <select name="" id="" class="sel_build">
                    <option value="">同心大厦</option>
                </select>
            </div>

            <div class="hdl_r f-oh f-cb">
                <ul class="f-fr">
                    <li><router-link to="/personnel_manager">人员管理</router-link></li>
                    <li><router-link to="/vehicle_manager">车辆管理</router-link></li>
                    <li><router-link to="/monitoring_manager">实时监控</router-link></li>
                </ul>
            </div>
        </section>

        <!-- header_r -->
        <section class="header_r">
            <div class="hdr_top f-cb f-oh">
                <img class="f-fr" src="../../assets/images/header/portrait.png" alt="portrait">
            </div>
            <div class="hdr_bot"></div>
        </section>
    </header>
</template>

<script>
import { DateTime } from '../../util/DataTime'

export default {
    name:'header_nav',

    data(){
        return {
            // 获取当前时间
            getTime: new DateTime().getDatetime(),
        }
    },

    mounted() {
        let that = this; // 声明一个变量指向Vue实例this，保证作用域一致

        // 计时器
        this.timer = setInterval(() => {
            that.getTime = new DateTime().getDatetime();
        }, 1000)
    },

    methods:{

    },

    created() {
        
    },

      beforeDestroy() {
        // 在Vue实例销毁前，清除定时器
        if (this.timer) {
            clearInterval(this.timer); 
        }
    }
}
</script>

<style lang="less" scoped>
@fontColor: #ffffff;

header {
    display: flex;
    width: 100%;
    height: 100%;

    .header_l {
        flex: 1.8;

        span {
            color: @fontColor;
        }

        .header_img, .title, .hdl_l,  .hdl_r{
            position: absolute;
        }

        .header_img {
            left: 85px;
            bottom: 30px;
            width: 95%;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .title {
            left: 53%;
            top: 45%;
            transform: translate(-50%, -50%);
            font-size: 30px;
        }

        .hdl_l {
            left: 0;
            min-width: 260px;
            height: 100%;

            .time {
                display: block;
                margin: 32px 0 0 36px;
                font-family: cursive;
                font-size: 18.6px;
            }

            .sel_build {
                margin: 20px 0 0 20px;
            }
        }

        .hdl_r {
            right: 0;
            min-width: 300px;
            height: 100%;

            ul {
                margin-top: 32px;

                li {
                    display: inline-block;
                    font-size: 18px;
                    
                    a {
                        color: @fontColor;
                    }
                }

                li:not(:first-child) {
                    margin-left: 22px;
                }
            }
        }
    }

    .header_r {
        flex: 0.2;

        .hdr_top {
            width: 100%;
            height: 60px;

            img {
                margin: 14px 14px 0 0;
            }
        }
    }

    .nav {
        margin-top: 30px;

        li {
            display: inline-block;
        }
    }
}
</style>
