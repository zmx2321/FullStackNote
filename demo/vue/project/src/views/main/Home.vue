<template>
    <section class="home">
        <div class="container">
            <!-- <p class="lead">{{ this.$store.state.title }}</p> -->
            <div id="c_div"> <!--流量 -->
                <div class="traffic">
                    <div></div>
                    <!-- <span>今日人流量</span> -->
                    <!-- <span>523</span> -->
                </div>
                <div class="traffic">

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "home",

        data () {
            return {

            }
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
                div{
                    width:100%;
                    height:60%;
                    border:1px solid red;
                }
               
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