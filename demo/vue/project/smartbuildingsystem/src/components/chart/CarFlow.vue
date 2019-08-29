<template>
    <div>
        <div id="echarts1" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>
<script>
import {
    get_car_flow
} from "../../api/statistical"
var colors = ['#5793f3', '#d14a61', '#675bba'];
export default {
    name:'CarFlow',
    data(){
        return {      
            in:[],
            out:[],
            index:[],
        }
    },
    mounted(){
        this.get_car_flow();
    },
    methods:{
      //车流量
       get_car_flow(){
        
        get_car_flow().then(res=>{
            for(var index in res.data.data.in){
                this.index.push(index)
                this.in.push(res.data.data.in[index])
            }
            for(var index in res.data.data.out){
                this.out.push(res.data.data.out[index])
            }
            // console.log(this.in)
            
            //车流量图
            var dom1 = document.getElementById('echarts1')
            var myChart1 = this.echarts.init(dom1)
            myChart1.setOption({
                color: ["#0080ff", "#4cd5ce"],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    },
                },
                legend: {
                },
                grid: {
                    top: 70,
                    bottom: 50
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(0,253,255,0.6)'
                            }
                        },
                        // axisLine: {
                        //     onZero: false,
                        //     lineStyle: {
                        //         color: colors[1]
                        //     }
                        // },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '进入辆  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data:this.index,
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                         axisLine: {
                             onZero: false,
                             lineStyle: {
                                 color: colors[0]
                             }
                         },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '出车辆  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                    }
                ],
                yAxis: [
                    {
                        name:'数量',
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(0,253,255,0.6)'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name:'进入辆',
                        type:'line',
                        // xAxisIndex: 1,
                        smooth: true,
                        data: this.in,
                        areaStyle: {
                            normal: {}
                        },
                    },
                    {
                        name:'出车辆',
                        type:'line',
                        smooth: true,
                        data: this.out,
                        areaStyle: {
                            normal: {}
                        },
                    }
                ]
            })

        }) 
      },
    }
}
</script>
<style scoped>
#echarts1{
    position: absolute;
    top:160px;
    right:200px;
}
</style>
