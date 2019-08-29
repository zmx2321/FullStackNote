<template>
    <section class="main_cont">
        楼层管理
        <el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="tree"   :props="defaultProps" style="width:250px;position:absolute;background-color:skyblue" ></el-tree>
    </section>
</template>

<script>
    export default {
        name: "floor_manager",

        components: {

        },

        data(){
            return{
               data: [{
                id: 1,
                label: '同心大厦',
                children: [{
                     id: 4,
                    label: '1F',
                },
                {
                     id: 42,
                    label: '2F',
                },
                {
                     id: 43,
                    label: '3F',
                },
                {
                     id: 44,
                    label: '4F',
                },
                {
                     id: 45,
                    label: '5F',
                },
                {
                    id: 46,
                    label: '6F',
                    children: [{
                        id: 9,
                        label: '人脸闸机',
                        children:[{
                            id:5,
                            label:'1号闸机',
                        }]
                    }, {
                    id: 10,
                    label: '车辆闸机',
                    children:[{
                            id:5,
                            label:'2号闸机',
                    }]
                    },
                    {
                    id: 20,
                    label: '车辆闸机',
                    },
                    {
                    id: 30,
                    label: '水压监测仪',
                    },
                    { id: 40,
                    label: '摄像头',}
                    ]
                },
                {
                     id: 47,
                    label: '7F',
                },
                {
                     id: 48,
                    label: '8F',
                },
                ]
                }],
                defaultProps: {
                children: 'children',
                label: 'label'
                },
            }
        },

        methods:{
           
        },

        created: function(){

        },
    }
</script>

<style scoped lang="less">
</style>