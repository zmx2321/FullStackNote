<template>
    <div>
        <section class="menu_page">
            <aside>
                <ul>
                    <!-- <li><router-link to="/index">首页</router-link></li>
                    <li><router-link to="/statistical_manager">统计管理</router-link></li>
                    <li><router-link to="/alarm_manager">报警管理</router-link></li>
                    <li  @click="floor()"><router-link to="/floor_manager">楼层管理</router-link></li>
                    <li><router-link to="/watchman_manager">巡更管理</router-link></li> -->
                    <li><router-link to="/index">首页</router-link></li>

                    <li><router-link to="/personnel_manager">人员管理</router-link></li>
                    <li><router-link to="/vehicle_manager">车辆管理</router-link></li>
                    <li><router-link to="/monitoring_manager">实时监控</router-link></li>

                    
                    <li><router-link to="/statistical_manager">统计管理</router-link></li>
                    <li><router-link to="/alarm_manager">报警管理</router-link></li>
                    <li ><router-link to="/floor_manager">楼层管理</router-link></li> 
                    <li><router-link to="/watchman_manager">巡更管理</router-link></li>
                </ul>
            </aside>
        </section>
        <div class="floor" v-show="floor_active">
            <ul>
                <li :class="{active:floor_id==1}" @mouseover="floorId(1)">1F</li>  <!-- id-->
                <li :class="{active:floor_id==2}" @mouseover="floorId(2)">2F</li>
                <li :class="{active:floor_id==3}" @mouseover="floorId(3)">3F</li>
                <li :class="{active:floor_id==4}" @mouseover="floorId(4)">4F</li>
                <li :class="{active:floor_id==5}" @mouseover="floorId(5)">5F</li>
                <li :class="{active:floor_id==6}" @mouseover="floorId(6)">6F</li>
                <li :class="{active:floor_id==7}" @mouseover="floorId(7)">7F</li>
                <li :class="{active:floor_id==8}" @mouseover="floorId(8)">8F</li>
                <li :class="{active:floor_id==9}" @mouseover="floorId(9)">9F</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "leftmenu",

    data() {
        return {
            floor_id:null,
            floor_active:false
        };
    },

    // 解决路由跳转导航不高亮问题
    computed:{
    },
    methods:{
        floorId(a){
            this.floor_id=a
        },
        floor(){
            if(this.floor_active==false){
                this.floor_active=true;
            }else{
                this.floor_active=false;
            }
        },
    },
};
</script>

<style lang="less" scoped>
.menu_page {
    background: #fff;
}
.floor{
    position: absolute;
    right:100px;
    top:200px;
}
.floor>ul>li{
    color:white;
    width:70px;
    height:40px;
    background: skyblue;
    border:0.5px solid black;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
}
.active{
    background:orangered !important;
}
</style>
