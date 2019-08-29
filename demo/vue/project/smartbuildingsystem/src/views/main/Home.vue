<template>
    <section class="home">
        <div class="container">
            <!-- <p class="lead">{{ this.$store.state.title }}</p> -->
            <Alarm></Alarm>
            <div id="c_div"> <!--流量 -->
                <div class="traffic">
                    <div class="traffic_pic"></div>
                    <div class="traffic_div">今日人流量</div>
                    <div class="traffic_div">523</div>
                </div>
                <div class="traffic">
                     <div class="traffic_pic"></div>
                    <div class="traffic_div">今日车流量</div>
                    <div class="traffic_div">62</div>
                </div>
                <div class="traffic_square">
                </div>
            </div>
            <Moinitor></Moinitor>
            
        </div>
    </section>
</template>

<script>
import Moinitor from '../../components/tools/Monitor'
import Alarm from '../../components/tools/Alarm'
    export default {
        name: "home",

        data () {
            return {

            }
        },
        components: {
            Moinitor,
            Alarm
        },
        created (){
            // console.log(aa);
        }
    };
</script>

<style scoped lang='less'>
    .home {
      padding: 0;
      width: 100%;
      height: 100%;
      background: url(../../assets/images/index/bg.jpg) top no-repeat;
      background-size: 100% 100%;
    }

    .container {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 100px;
        background-color: rgba(0, 0, 0, 0.1);
        text-align: center;
        color: white;

        #c_div{
            width:500px;
            height:250px;
            border:1px solid red;
            position: relative;
            .traffic{
                display: inline-block;
                position: relative;
                width:40%;
                height:90%;
                border:1px solid red;
                margin:12px;
                float:left;
                .traffic_pic {
                    width:100%;
                    height:60%;
                    border:1px solid red;

                }
               .traffic_div{
                   padding:10px;
                   font-size:18px;
               }
            }
            .traffic_square{
                width:100px;
                height:25px;
                background:lightblue;
                position: absolute;
                border:1px solid white;
                border-radius: 7px;
                left:50%;
                margin-left:-50px;
                top:210px;
            }
        }
    }

    .lead {
        font-size: 22px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
    }
</style>