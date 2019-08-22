<template>
    <div class="myHeader">
        <div id="top">
            {{ this.$store.state.title }}
            <div><router-link to="/personnel">人员管理</router-link></div>
                <div><router-link to="/vehicle">车辆管理</router-link></div>
                <div><router-link to="/monitoring">实时监控</router-link></div>
            <!-- <span>智慧楼宇可视化集成管理运营系统</span>
            {{ this.$store.state.title }}
            <div id="time"><router-link to="/login"><img src="../assets/images/head/person.png" alt="ren" style="position:relative;top:2px;"></router-link></div>
            <div id="button_">
                <div><router-link to="/personnel">人员管理</router-link></div>
                <div><router-link to="/vehicle">车辆管理</router-link></div>
                <div><router-link to="/monitoring">实时监控</router-link></div>
            </div> -->
            <!-- <night></night>    -->
            <!-- <div id="icon_top1">
                <div><router-link to="/index"></router-link></div>
                <div></div>
                <div></div>
            </div> -->
            <!-- <div id="icon_top2">
            </div> -->
        </div>
    </div>
</template>

<script>
// import Night from '../components/Night'

export default {
    name:'myHeader',
    components: {
        // Night
    },
    data(){
        return {
            active:1,
        }
    },
    mounted(){
    },
    methods:{
    }
}
</script>

<style scoped>
*{margin:0;padding:0;}
.myHeader{
    width:100%;
    /* height:130px; */
}
#top{
    width:100%;
    height:100%;
    /* background: url(../assets/images/head/top.png) no-repeat ; */
    background-position:center;
}
#top>span{
    display: inline-block;
    position: relative;
    width:560px;
    height:60px;
    color:white;
    font-size:36px;
    left:52%;
    top:15px;
    margin-left:-280px;
    line-height:60px;
}
#time{
  text-align:center;
    color:white;
    width:330px;
    height:30px;
    position:absolute;
    right:10px;
    top:8px;
    font-size:20px;
}
#icon_top1{
    width:200px;
    height:40px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    right:100px;
    top:66px;
}
#icon_top1>div{
    width: 35px;
    height: 35px;
    /* background: url(../assets/images/head/icon.png) no-repeat; */
    cursor: pointer;
}
#icon_top1>div:nth-child(2){
    background-position: -64px
}
#icon_top1>div:nth-child(3){
    background-position: -128px
}
#icon_top1>div>a{
    height:40px;
    width:40px;
    display:block;
}
#button_{
    display: flex;
    width:200px;
    height:25px;
    justify-content: space-around;
    position: absolute;
    right:300px;
    top:10px;
}
#button_>div{
    width:60px;
    height:25px;
    background:lightskyblue;
    border-radius: 4px;
    font-size:12px;
    text-align: center;
    line-height: 25px;
    cursor: pointer;
}
#button_>div>a{
    color:black;
}
</style>
