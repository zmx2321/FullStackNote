<template>
    <div>
        <div id="echarts" :style="{width: '300px', height: '300px'}"></div>
    </div>
</template>
<script>
import axios from 'axios'
var colors = ['#5793f3', '#d14a61', '#675bba'];
export default {
    name:'Building',
    data(){
        return {      
        }
    },
    mounted(){
        this.get_person_distribution();
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
    }
}
</script>
<style scoped>

</style>
