<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">{{ this.$store.state.title }}</span>
            </div>
            <el-form :model="loginUser" @keyup.enter.native="submitForm('loginForm')" status-icon :rules="rules" ref="loginForm" class="loginForm" label-width="80px">
                <el-form-item label="账号" prop="loginName">
                    <el-input v-model="loginUser.loginName" placeholder="请输入账号" clearable></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginUser.password" placeholder="请输入密码" clearable></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登  录</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>

<script>
    import {
        Login  // 登录
    } from "../../api/api"

    export default {
        name: "login",

        data() {
            return {
                loginUser: {
                    loginName: "admin",
                    password: "123"
                },
                rules: {
                    loginName: [
                        { required: true, message: "用户名不能为空", trigger: "blur" },
                        // { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
                    ],
                    password: [
                        { required: true, message: "密码不能为空", trigger: "blur" },
                        // { min: 5, message: "长度不小于 5 个字符", trigger: "blur" }
                    ]
                }
            };
        },

        methods: {
            // 提交表单
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        let params = {
                            loginName: this.loginUser.loginName,
                            password: this.loginUser.password
                        }

                        // http://mock-building.hytiot.com/user/login?loginName=admin&password=123
                        // this.axios()
                        const API_PROXY = 'https://bird.ioliu.cn/v1/?url='
                        let url = API_PROXY + "http://mock-building.hytiot.com/user/login"
                        this.axios.post(url).then((res)=>{
                            // console.log(res.data.data.id)
                            // sessionStorage.setItem('name', JSON.stringify(res.data.data))

                            console.log(res.data.data.code);

                            if (res.data.code != 100){
                                this.$message.warning(res.data.detail);
                            }

                            if (res.data.code == 100) {
                                this.$message.success("登录成功！");

                                // 登陆状态记录
                                localStorage.setItem('code', this.md5((res.data.code).toString()));

                                this.$router.push("/index");
                            }
                        })
                        // Login(qs.stringify(this.loginUser)).then(res => {
                        // Login(params).then(res => {
                        //     // if (res.data.code == 1){
                        //     //     this.$message.warning(res.data.detail);
                        //     // }

                        //     // if (res.data.code == 0) {
                        //     //     this.$message.success("登录成功！");

                        //     //     // 登陆状态记录
                        //     //     localStorage.setItem('code', this.md5((res.data.code).toString()));

                        //     //     this.$router.push("/index");
                        //     // }
                        // }).catch(err => {
                        //     this.$message.error(err);
                        // });
                        
                    } else {
                        this.$message.error("err submmit!");
                    }
                });
            },
        },
        // 预处理
        created: function(){

        },
    };
</script>

<style scoped>
    .login {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../../assets/images/bg.jpg) no-repeat center center;
        background-size: 100% 100%;
    }

    .form_container {
        position: absolute;
        top: 20%;
        left: 34%;
        width: 405px;
        padding: 25px;
        text-align: center;
        border-radius: 5px;
    }

    .form_container .manage_tip .title {
        font-weight: bold;
        font-size: 26px;
        color: #fff;
    }

    .loginForm {
        margin-top: 20px;
        background-color: #fff;
        padding: 20px 40px 20px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 10px #cccc;
    }

    .submit_btn {
        width: 100%;
    }

    .tiparea p a {
        color: #409eff;
    }
</style>