<template>
    <div id="monitor">
        <div id="monitor_type">
            <div @click="double">双屏</div>
            <div @click="four">四屏</div>
        </div>
        <div id="monitor_body">
            <div id="double_screen" v-if="screen_show">
                <div></div>
                <div></div>
            </div>
            <div id="four_screen" v-if="!screen_show">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div id="monitor_footer">
            <div>
                <div class="m_footer">
                    <div class="m_top">
                        <div class="img_header"></div>
                        <div class="font_header" style="margin-top:20px;">14:05:00</div>
                        <div class="font_header">十二楼N3</div>
                    </div>
                </div>
                <div class="m_footer">
                    <div class="m_top">
                        <div class="img_header"></div>
                        <div class="font_header" style="margin-top:20px;">14:05:00</div>
                        <div class="font_header">十二楼N3</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'myHeader',
    data(){
        return {
            screen_show:true,         
        }
    },
    mounted(){
    },
    methods:{
        double(){
            this.screen_show=true;
        },
        four(){
            this.screen_show=false;
        }
    }
}
</script>
<style scoped>
*{margin:0;padding:0;}
#monitor{
    width:600px;
    height:500px;
    border:1px solid red;
}
#monitor_type{
    width:100%;
    height:40px;
    border:1px solid red;
    display: flex;
}
#monitor_type>:first-child,#monitor_type>:last-child{
    width:30px;
    height:30px;
    border:1px solid blue;
    position: relative;
    top:50%;
    margin-top:-15px;
    margin-left:10px;
    left:480px;
    cursor: pointer;
}
#monitor_body{
    width:100%;
    height:200px;
    border:1px solid red;
}
#monitor_body>#double_screen{
    width:100%;
    height:100%;
    border:1px solid blue; 
    display: flex;
}
#double_screen>div{
    width:50%;
    height:100%;
    border:1px solid yellow;
}
#monitor_body>#four_screen{
    width:100%;
    height:100%;
    border:1px solid blue; 
    display: flex;
}
#four_screen>div{
    width:25%;
    height:100%;
    border:1px solid yellow;
}
#monitor_footer{
    width:100%;
    height:260px;
    border:1px solid blue; 
    display: flex;
}
#monitor_footer>div{
    width:90%;
    height:180px;
    border:1px solid blue; 
    margin:0 auto;
    position: relative;
    top:50%;
    margin-top:-90px;
    display: flex;
    justify-content: space-between;
}
.m_footer{
    width:50%;
    height:100%;
    border:1px solid red;
    
}
.m_footer>.m_top{
    width:100%;
    height:50%;
    border:1px solid red;
}
.m_footer>.m_top>.img_header{
    width:80px;
    height:100%;
    border:1px solid red;
    border-radius: 50%;
    float: left;
}
.m_footer>.m_top>.font_header{
    margin:10px;
}
</style>
