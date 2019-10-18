<template>
    <div class="login">
        <section class="form_container">
            <div class="manage_tip">
                <span class="title">{{ this.$store.state.title }}</span>
            </div>
            <el-form :model="loginUser" @keyup.enter.native="submitForm('loginForm')" status-icon :rules="rules" ref="loginForm" class="loginForm" label-width="80px">
                <el-form-item label="手机号" prop="mobile">
                    <el-input v-model="loginUser.mobile" placeholder="请输入手机号" clearable></el-input>
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
                    mobile: "15888888888",
                    password: "123456"
                },
                rules: {
                    mobile: [
                        { required: true, message: "用户名不能为空", trigger: "blur" },
                        { min: 2, max: 30, message: "长度在 2 到 30 个字符", trigger: "blur" }
                    ],
                    password: [
                        { required: true, message: "密码不能为空", trigger: "blur" },
                        { min: 5, message: "长度不小于 5 个字符", trigger: "blur" }
                    ]
                }
            };
        },

        methods: {
            // 提交表单
            submitForm(formName) {
                this.$refs[formName].validate(valid => {
                    if (valid) {
                        Login(qs.stringify(this.loginUser)).then(res => {
                            if (res.data.code == 1){
                                this.$message.warning(res.data.detail);
                            }

                            if (res.data.code == 0) {
                                this.$message.success("登录成功！");

                                // 登陆状态记录
                                localStorage.setItem('code', this.md5((res.data.code).toString()));

                                this.$router.push("/index");
                            }
                        }).catch(err => {
                            console.log(err);
                        });
                    } else {
                        console.log("error submit!!");
                        return false;
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
        width: 370px;
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