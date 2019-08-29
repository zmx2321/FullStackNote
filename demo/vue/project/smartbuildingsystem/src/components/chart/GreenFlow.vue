<template>
    <div>
        <div id="echarts3" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>
<script>
import {
    get_green_flow
} from "../../api/statistical"
var colors = ['#5793f3', '#d14a61', '#675bba'];
export default {
    name:'GreenFlow',
    data(){
        return {      
            floor:[],
            power:[]
        }
    },
    mounted(){
        this.get_green_flow();
    },
    methods:{
      //节能数
      get_green_flow(){
        
        get_green_flow().then(res=>{
            console.log(res.data.data)
             for(var index in res.data.data){
                 this.floor.push(res.data.data[index].floor)
                 let n=res.data.data[index].power.indexOf('kwh')
                 var s=res.data.data[index].power.substring(0,n)
                 this.power.push(s)
             }
                var dom3 = document.getElementById('echarts3')
                var myChart3 = this.echarts.init(dom3)
                // 绘制图表
                myChart3.setOption({
                    color: ['#3398DB'],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : this.floor,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(0,253,255,0.6)'
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine: {
                            lineStyle: {
                                color: 'rgb(0,253,255,0.6)'
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'节能数',
                        type:'bar',
                        barWidth: '40%',
                        data:this.power,
                        itemStyle: {
                            normal: {
                                barBorderRadius: [30, 30, 0, 0],
                                shadowColor: 'rgba(0,255,225,1)',
                                shadowBlur: 4,
                            }
                        }
                    }
                ]
                
                })
        })
      }
    }
}
</script>
<style scoped>
#echarts3{
    position: absolute;
    top:520px;
    right:210px;
}
</style>
