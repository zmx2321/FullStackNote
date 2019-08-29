<template>
    <div>
        <div class="alarm">
            <div class="alarm_header">
            <div>设备报警</div>   
            </div>
            <div class="alarm_body">
                <div class="alarm_title">
                    <div>设备标识</div>
                    <div>设备总数</div>
                    <div>在线报警数量</div>
                </div>
                <div class="alarm_">
                    <div>
                        <div @click="alarmActive">图片</div>
                        <div>100</div>
                        <div>25</div>
                    </div>
                    <div>
                        <div>图片</div>
                        <div>100</div>
                        <div>25</div>
                    </div>
                    <div>
                        <div>图片</div>
                        <div>100</div>
                        <div>25</div>
                    </div>
                    <div>
                        <div>图片</div>
                        <div>100</div>
                        <div>25</div>
                    </div>
                    <div>
                        <div>图片</div>
                        <div>100</div>
                        <div>25</div>
                    </div>
                    <div>
                        <div>图片</div>
                        <div>100</div>
                        <div>25</div>
                    </div>
                </div>
            </div> 
        </div>
        <table class="alarm_table" v-show="active">
            <tr>
                <th>位置</th>
                <th>类型</th>
                <th>时间</th>
                <th>操作</th>
            </tr>
            <tr>
                <td>同心大厦25-201</td>
                <td>火情报警</td>
                <td>2019-7-17 12:30:32</td>
                <td>
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                </td>
            </tr>
            <tr>
                <td>同心大厦25-201</td>
                <td>火情报警</td>
                <td>2019-7-17 12:30:32</td>
                <td>
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                </td>
            </tr>
            <tr>
                <td>同心大厦25-201</td>
                <td>火情报警</td>
                <td>2019-7-17 12:30:32</td>
                <td>
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                </td>
            </tr>
            <tr>
                <td>同心大厦25-201</td>
                <td>火情报警</td>
                <td>2019-7-17 12:30:32</td>
                <td>
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                    <img src="../../assets/logo.png" alt="" style="width:25px;height:25px;">
                </td>
            </tr>
        </table>
   </div>
</template>

<script>
export default {
    name:'Alarm',
    data(){
        return {      
           active:false
        }
    },
    mounted(){
    },
    methods:{
        alarmActive(){
            if(this.active==false){
                this.active=true;
            }else{
                this.active=false;
            }
        }
    }
}
</script>
<style scoped lang='less'>
*{margin:0;padding:0;}
.alarm{
    width:350px;
    height:600px;
    border:1px solid red;
    position: absolute;
    right:200px;
    color: white;
    text-align: center;
    .alarm_header{
        height:10%;
        width:100%;
        border:1px solid red;
        div{
            width:100px;
            height:20px;
            margin:0 auto;
            border:1px solid red;
            margin-top:20px;
        }
    }
    .alarm_body{
        height:90%;
        width:100%;
        border:1px solid red;
        .alarm_title{
            display: flex;
            justify-content: space-around;
            margin-top:15px;
            div{
                width:100px;
                height:25px;
                line-height: 25px;
                border:1px solid red;
            }
        }
        .alarm_{
            width:100%;
            height:85%;
            margin-top:15px;
            border:1px solid red;
            div{
                display: flex;
                justify-content: space-around;
                margin-top:10px;
            }
        }
    }
    
}
.alarm_table{
    width:450px;
    height:80px;
    position: absolute;
    right: 200px;
    top:800px;
    background:rgb(46, 101, 122);
    font-size:12px;
}
.alarm_table>tr>th{
    padding:7px;
    text-align:center;
    vertical-align:middle;
    border:1px solid white;
    border-bottom:0;
}
.alarm_table>tr>td{
    padding:3px;
    text-align:center;
    vertical-align:middle;
    border:1px solid white;
    cursor: pointer;
}
</style>
