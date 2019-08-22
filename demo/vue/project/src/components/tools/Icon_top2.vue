<template>
    <div id="icon_top2">
        <div></div>
        <div></div>
        <div></div>
        <div><router-link to='/watchman'></router-link></div>
        <div></div>
    </div>
</template>

<script>
export default {
    name:'IconTop',
    data(){
        return {          
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
#icon_top2{
    width:50px;
    height:200px;
    position: absolute;
    right:100px;
    top:166px;
}
#icon_top2>div{
    width: 60px;
    height:60px;
    background: url(../assets/images/head/icon2.png) no-repeat;
    cursor: pointer;
}
#icon_top2>div:nth-child(2){
    background-position:0 -65px;
}
#icon_top2>div:nth-child(3){
    background-position:0 -130px;
}
#icon_top2>div:nth-child(4){
    background-position:0 -195px;
}
#icon_top2>div:nth-child(5){
    background-position:0 -260px;
}
#icon_top2>div>a{
    height:50px;
    width:50px;
    display:block;
}
</style>
