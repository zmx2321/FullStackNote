<template>
    <div class="personnel">
        <div class="internal">
            <div class="header">
                <div class="location">            
                    <ul>
                        <span>出入位置:</span>
                        <li>同心大厦东门</li>
                        <li>同心大厦西门</li>
                        <li>同心大厦南门</li>
                        <li>同心大厦北门</li>
                    </ul>
                </div>
                <div class="type">            
                    <ul>
                        <span>人员类型:</span>
                        <li>大楼员工</li>
                        <li>访客</li>
                        <li>陌生人</li>
                    </ul>
                </div>
                <div class="date">
                    <ul>
                        <span>时间选择:</span>
                        <el-form :model="filterData" status-icon ref="filterRiderForm" label-width="100px">
                            <el-form-item  prop="date" class="intxt">
                                <!--:default-time="['12:00:00', '08:00:00']"-->
                                <el-date-picker
                                        v-model="filterData.timeArray"
                                        type="datetimerange"
                                        :picker-options="pickerOptions"
                                        :default-time="['00:00:00', '00:00:00']"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        format="yyyy-MM-dd HH:mm:ss"
                                        value-format="yyyy-MM-dd HH:mm:ss"
                                        @change="getSTime"
                                        align="right">
                                </el-date-picker>
                            </el-form-item>
                        </el-form>
                    </ul>
                </div>
                <div class="search">
                    <input type="text" placeholder="输入人员姓名">
                    <button>搜索</button>
                </div>
            </div>
            <div class="body">
                <div class="body_div">
                    <div class="body_img">
                        <img src="../../assets/logo.png" alt="">
                    </div>
                    <div class="body_block">
                        <div>
                            <span>浙A26472</span>
                        </div>
                    </div>
                    <div class="body_font">
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            2019.08.11 8:34
                        </div>
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            同心大厦东门
                            <img src="../../assets/logo.png" alt="">
                        </div>
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            大楼员工
                        </div>
                    </div>
                </div>   
                <div class="body_div">
                    <div class="body_img">
                        <img src="../../assets/logo.png" alt="">
                    </div>
                    <div class="body_block">
                        <div>
                            <span>浙A26472</span>
                        </div>
                    </div>
                    <div class="body_font">
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            2019.08.11 8:34
                        </div>
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            同心大厦东门
                            <img src="../../assets/logo.png" alt="">
                        </div>
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            大楼员工
                        </div>
                    </div>
                </div>
                <div class="body_div">
                    <div class="body_img">
                        <img src="../../assets/logo.png" alt="">
                    </div>
                    <div class="body_block">
                        <div>
                            <span>浙A26472</span>
                        </div>
                    </div>
                    <div class="body_font">
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            2019.08.11 8:34
                        </div>
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            同心大厦东门
                            <img src="../../assets/logo.png" alt="">
                        </div>
                        <div>
                            <img src="../../assets/logo.png" alt=""> 
                            大楼员工
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="paging">
                    <ul>
                        <li :class="{active:page==1}" @click="pages(1)">1</li>
                        <li :class="{active:page==2}" @click="pages(2)">2</li>
                        <li>...</li>
                        <li :class="{active:page==20288}" @click="pages(20288)">20288</li>
                        <li>></li>
                        <li>到<div>1</div>页</li>
                        <li><div style="width:60px;">跳转</div></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
      export default {
        name: "Vehicle",
        data(){
            return{
                // 日期筛选器
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                // 筛选器
                filterData: {
                    timeArray: '',  // 起止时间集合
                    startTime: "",  // 开始时间
                    endTime: "",  // 结束时间
                    mobile: ""  // 手机号
                },
                page:1,
            }
        },
        components: {
           
        },
        created: function(){
            // console.log(this.md5("admin"));
        },
        methods:{
            // 时间戳
            formatDate (now) {
                let year = now.getFullYear();
                var month = now.getMonth() + 1;
                var date = now.getDate();

                return `${year}-${month}-${date}`;
            },

            /**
             * 日期筛选器
             */
            getSTime (val) {
                if(val){
                    // 为起止时间赋值
                    this.filterData.startTime = val[0];
                    this.filterData.endTime = val[1];

                    // console.log(val);
                    // console.log(this.filterData);
                }

                return false;
            },
            pages(a){
                this.page=a;
            }
        }
    }
</script>
<style scoped lang="less">
.personnel{
    width:70%;
    height:800px;
    border:1px solid red;
    color:white;
    .internal{
        width:95%;
        height:90%;
        border:1px solid red;
        margin:20px auto;
        .header{
            width:100%;
            height:30%;
            .location{
                ul{
                    display: flex;
                    span{
                        border:1px solid red;
                        padding:7px;
                        font-size:14px;
                    }
                    li{
                        border:1px solid red;
                        padding:7px;
                        font-size:14px;
                        margin-left:15px;
                    }
                }
            }
            .type{
                ul{
                    margin-top:20px;
                    display: flex;
                    span{
                        border:1px solid red;
                        padding:7px;
                        font-size:14px;
                    }
                    li{
                        border:1px solid red;
                        padding:7px;
                        font-size:14px;
                        margin-left:15px;
                    }
                }
            }
            .date{
                ul{
                    margin-top:20px;
                    display: flex;
                    span{
                        border:1px solid red;
                        padding:7px;
                        font-size:14px;
                    }
                }
            }
            .search{
                input{
                    margin-top:20px;
                    width:350px;
                    height:30px;
                    background: skyblue;     
                    border:1px solid grey;
                }
                button{
                    padding:6px;
                    background: #20bddd;
                    color:white;
                    border:1px solid grey;   
                    outline: none; 
                    border-radius:5px;
                    margin-left:5px;
                }
            }
        }
        .body{
            width:100%;
            height:60%;
            display: flex;
            .body_div{
                width:15%;
                height:80%;
                border:1px solid red;
                margin-right:25px;
                .body_img{
                    width:100%;
                    height:55%;      
                    border:1px solid red;       
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .body_block{
                    width:100%;
                    height:10%;   
                    div{
                        position: relative;
                        top:3px;
                        text-align: center;
                        width:80%;
                        height:80%;
                        background:#20bddd;
                        margin:0 auto;
                        color:yellow;
                        span{
                            position: relative;
                            top:6px;
                        }
                    }
                }
                .body_font{
                    width:100%;
                    height:35%; 
                    border:1px solid red;   
                    div{
                        padding:2px;
                        font-size:14px;
                        margin-top:5px;
                        img{
                            width:20px;
                            height:20px;
                        }
                    }
                }
            }
        }
        .footer{
            width:100%;
            height:10%;
            .paging{
                width:100%;
                height:100%;
                ul{
                    li{
                        padding:8px;
                        border:1px solid red;
                        border-radius: 50%;
                        float:left;
                        div{
                            display: inline-block;
                            width:40px;
                            height:20px;
                            border:1px solid red;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
}
.active{
    background: orangered
}
</style>
