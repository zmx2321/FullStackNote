<template>
    <div>
        <div id="echarts2" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>
<script>
import {
    get_person_distribution
} from "../../api/statistical"

var colors = ['#5793f3', '#d14a61', '#675bba'];
export default {
    name:'PersonFlow',
    data(){
        return {      
            person_name:[],
            count:[],
        }
    },
    mounted(){
        this.get_person_distribution();
    },
    methods:{
      //人流量
      get_person_distribution(){
        
        get_person_distribution().then(res=>{
            // console.log(res.data.data)
            for(var index in res.data.data){
                this.person_name.push(res.data.data[index].desc)
                this.count.push(res.data.data[index].count)
            }
            // this.person_name=
                var dom2 = document.getElementById('echarts2')
                var myChart2 = this.echarts.init(dom2)
                // 绘制图表
                myChart2.setOption({
                color: ['#3398DB'],
                
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: this.person_name
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
                            data : this.person_name,
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
                            name:'直接访问',
                            type:'bar',
                            barWidth: '50%',
                            data:this.count,
                            itemStyle:{
                                normal:{
                                    color:function(params){
                                        var colorList = ['#52908b','#802f79','#23408f','#a49d7a'];
                                        return colorList[params.dataIndex]
                                    }
                                }
                            }
                        }
                    ]
                })

        })
      },
    }
}
</script>
<style scoped>
#echarts2{
    position: absolute;
    top:560px;

}
</style>
