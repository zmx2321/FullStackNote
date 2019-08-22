<template>
    <div>
        <el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current='true'  :props="defaultProps" style="width:250px;height:400px;position:absolute;"></el-tree>
        <div id="square">
            <div id="header">
                <div @click="two_screen">双屏</div>
                <div @click="four_screen">四屏</div>
            </div>
            <div id="body">
                <div id="two_screen" v-if="active">
                    <div></div>
                    <div></div>
                </div>
                <div id="four_screen"  v-if="!active">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "monitoring",
        data(){
            return{
            data: [{
                id: 1,
                label: '同心大厦',
                children: [{
                    id: 4,
                    label: '室外',
                    children: [{
                        id: 9,
                        label: '1F',
                        children:[{
                            id:5,
                            label:'1号摄像头',
                        },{
                            id:6,
                            label:'2号摄像头', 
                        }]
                    }, {
                    id: 10,
                    label: '2F'
                    }]
                }]
                }],
                defaultProps: {
                children: 'children',
                label: 'label'
                },
                active:true
            }
        },
        components: {

        },
        created: function(){

        },
        methods:{
            two_screen(){
                this.active=true;
            },
            four_screen(){
                this.active=false;
            }
        }
    }
</script>

<style scoped lang="less">
#square{
    width:600px;
    height:500px;
    border:1px solid red;
    position: absolute;
    left:50%;
    top:50%;
    margin-top:-250px;
    margin-left:-300px;

    #header{
        width:100%;
        height:40px;
        background:yellow;
        display: flex;

        div{
            position: relative;
            margin-left:20px;
            left:80%;
            cursor: pointer;
        }
    }

    #body{
        width:100%;
        height:460px;
        background: lightblue;

         #two_screen{
             width:100%;
             height:100%;
             border:1px solid red;
             display: flex;
             justify-content: space-around;
      
             div{
                 width:40%;
                 height:80%;
                 border:1px solid red;
                 margin-top:40px;
             }
         }

        #four_screen{
            width:100%;
            height:100%;
            border:1px solid red;
            display: flex;
            flex-wrap:wrap;
            div{
               margin:20px;
               margin-left:30px;
               border:1px solid red;
               width:41%;
               height:40%;
            }
        }
    }
}
</style>