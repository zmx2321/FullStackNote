<template>
    <section class="main_cont">
        巡更管理
        <div>
        <!--  -->
        <div class="watchman">
            <div class="watchman_header">
                <div class="watchman_font">
                    <span @click="Watchman">巡更路线</span>
                    <span @click="Prepare">预案</span>
                </div>
                <div class="watchman_img">
                    <div>x</div>
                    <div>图片</div>
                </div>
            </div>
            <div class="watchman_body" v-show="active_watchman">
                <div class="met">
                    <div class="met_div" v-show="active">

                    </div>
                    <div class="met_div" v-show="active">

                    </div>
                </div>
                <div class="met">
                    <div class="met_div">

                    </div>
                    <div class="met_div">

                    </div>
                </div>
            </div>
            <div class="watchman_footer" v-show="active_watchman">
                <div class="ov">
                    <table class="watchman_table">
                        <tr>
                            <th>序号</th>
                            <th>巡更路线名称</th>
                            <th>巡更时间</th>
                            <th>巡更次数</th>
                            <th>巡更人员</th>
                            <th>巡更日志</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;" @click="watchman()"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                    </table>
                </div>
            </div>
            <!-- 预案 -->
            <div class="watchman_body" v-show="!active_watchman">
                <div class="met">
                    <div class="met_div" v-show="active">

                    </div>
                    <div class="met_div" v-show="active">

                    </div>
                </div>
                <div class="met">
                    <div class="met_div">

                    </div>
                    <div class="met_div">

                    </div>
                </div>
            </div>
            <div class="watchman_footer" v-show="!active_watchman">
                <div class="ov">
                    <table class="watchman_table">
                        <tr>
                            <th>序号</th>
                            <th>预案名称</th>
                            <th>预案制定人</th>
                            <th>预案日志</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;" @click="watchman()"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>巡更路线1<img src="../../assets/logo.png" alt="" style="width:15px;height:15px;"></td>
                            <td>2019-8-26 15:13</td>
                            <td>1</td>
                            <td>王介宝</td>
                            <td>原地转圈</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
    export default {
        name: "watchman_manager",

        components: {

        },

        data(){
            return{
                active:false,
                active_watchman:true
            }
        },
        
        methods:{
            watchman(){
                if(this.active==false){
                    this.active=true
                }else{
                    this.active=false
                }
            },
            Watchman(){
                this.active_watchman=true;
            },//巡查
            Prepare(){
                this.active_watchman=false;
            },//预案
        },

        created: function(){

        },
    }
</script>

<style scoped lang="less">
*{margin:0;padding:0;}
.watchman{
    width:600px;
    height:750px;
    border:1px solid red;
    .watchman_header{
        width:100%;
        height:10%;
        background:yellow;
        .watchman_font{
            width:200px;
            position: relative;
            margin:0 auto;
            text-align: center;
            line-height:50px;
            span{
                display: inline-block;
                font-size:15px;
                width:60px;
                height:30px;
                line-height: 30px;
                text-align: center;
            }
        }
        .watchman_img{
            position: absolute;
            left:556px;
            top:88px;
            border:1px solid red;
        }
    }
    .watchman_body{
        width:100%;
        height:70%;
        border:1px solid red;
        .met{
            width:90%;
            height: 45%;
            border:1px solid red;
            margin:0 auto;
            margin-top:20px;
            display: flex;
            .met_div{
                width:40%;
                height:90%;
                border:1px solid red;
                margin:10px auto;
            }
        }
    }
    .watchman_footer{
        width:100%;
        height:20%;
        border:1px solid red;
        .ov{
            overflow-y:scroll;
            width:97%;
            height:80%;
            margin-top:15px;
            .watchman_table{
                width:90%;
                height:80px;
                background:grey;
                font-size:12px;
                color:white;
                margin:15px auto;
            }
            .watchman_table>tr>th{
                padding:7px;
                text-align:center;
                vertical-align:middle;
                border:1px solid white;
                border-bottom:0;
            }
            .watchman_table>tr>td{
                padding:3px;
                text-align:center;
                vertical-align:middle;
                border:1px solid white;
                cursor: pointer;
            }
        }      
    }
}
</style>
