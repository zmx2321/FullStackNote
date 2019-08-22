<template>
    <div>
        <!-- 折线图 -->
        <div id="echarts" :style="{width: '300px', height: '300px'}"></div>
        <div id="echarts1" :style="{width: '300px', height: '300px'}"></div>
        <div id="echarts2" :style="{width: '300px', height: '300px'}"></div>
        <div id="echarts3" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>
<script>
import axios from 'axios'
var colors = ['#5793f3', '#d14a61', '#675bba'];
export default {
    name:'Statistical',
    data(){
        return {      
            in:[],
            out:[],
            index:[],
            person_name:[],
            count:[],
            floor:[],
            power:[]
        }
    },
    mounted(){
        this.get_person_distribution();
        this.get_car_flow();
        this.get_person_flow();
        this.get_green_flow();
    },
    methods:{
      get_person_distribution(){
            var dom = document.getElementById('echarts')
            var myChart = this.echarts.init(dom)
            myChart.setOption({
                color: "#404495",
                title: {
                },
                tooltip: {
                    trigger: 'axis',
                },
                legend: {
                    x: 'center',
                },
                radar: [
                    {
                        indicator: [
                            {text: '访客', max: 100},
                            {text: '领导', max: 100},
                            {text: '陌生人', max: 100},
                            {text: '临时停车', max: 100},
                            {text: '大楼员工', max: 100}
                        ],
                        radius: 80,
                        center: ['50%','60%'],
                    },

                ],
                series: [
                    {
                        type: 'radar',
                        tooltip: {
                            // trigger: 'item'
                        },
                        itemStyle: {normal: {areaStyle: {type: 'default'}}},
                        data: [
                            {
                                value: [60,73,80,40,90],
                            }
                        ]
                    },
                ]
            });
      },
      //人流量
      get_person_flow(){
        const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
        let url = API_PROXY + "http://mock-building.hytiot.com/api/person/info?building_no =0"
        axios.post(url).then((res)=>{
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
      //车流量
      get_car_flow(){
        const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
        let url = API_PROXY + "http://mock-building.hytiot.com/api/plate/info?building_no"
        axios.post(url).then((res)=>{
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
      //节能数
      get_green_flow(){
           const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
        let url = API_PROXY + "http://mock-building.hytiot.com/api/power/info?building_no"
        axios.post(url).then((res)=>{
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
*{margin:0;padding:0;}
#echarts1{
    position: absolute;
    top:160px;
    right:200px;
}
#echarts2{
    position: absolute;
    top:560px;

}
#echarts3{
    position: absolute;
    top:520px;
    right:210px;
}
</style>
