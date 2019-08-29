<template>
    <div id="slider">
        <!-- 滑块 -->
        <span :class="{top_slider1:active==1}" @click="top_slider1()" style="color:#20bddd;">夜光</span>
        <span :class="{top_slider1:active==2}" @click="top_slider2()" class="top_slider2">实景</span>
    </div>
</template>

<script>
export default {
    name:'Night',
    data(){
        return {      
             active:1,
        }
    },
    mounted(){
    },
    methods:{
         top_slider1(){
            this.active=1;
        },
        top_slider2(){
            this.active=2;
        }
    }
}
</script>
<style scoped>
*{margin:0;padding:0;}
#slider{
    position: absolute;
    width:80px;
    height:25px;
    border:2px solid #20bddd;
    border-radius: 10px;
    right:320px;
    top:70px;
    font-size:14px;
}
#slider>span{
    display: inline-block;
    position: absolute;
    width:33px;
    line-height: 20px;
    text-align: center;
    padding:2px;
    cursor: pointer;
}
.top_slider1{
    border:1px solid #20bddd;
    border-radius: 7px;
    background: #20bddd;
    color:white !important;
}
.top_slider2{
    /* border:2px solid #20bddd;
    border-radius: 7px;
    background: #20bddd; */
    color:#20bddd;
    margin-left:41px;
}
</style>
