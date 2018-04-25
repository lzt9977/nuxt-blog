<template>
  <el-row type="flex" justify="center">
    <el-col :span="8">
      <el-card>
        <div slot="header">
          <span>注册</span>
        </div>
        <el-form :model="loginForm" ref="loginForm" status-icon :rules="rules">
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入账号"
              prefix-icon=""
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="loginForm.password"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="reg" :loading="loading">注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import fetch from '../plugins/fetch'
  export default {
    data(){
      return {
        loginForm: {
          username: '',
          password: '',
        },

        loading: false,

        rules: {
          username: [
            {
              validator: (rule, value, cb) => {
                console.log(value)
                if(value === ''){
                  cb(new Error('账户不能为空'))
                }else if(value.length > 16 || value.length < 6){
                  cb(new Error('账号为6-16位字符'))
                }else{
                  cb()
                }
              },
              trigger: 'blur'
            }
          ],
          password: [
            {
              validator: (rule, value, cb) => {
                if(value === ''){
                  cb(new Error('密码不能为空'))
                }else if(value.length > 16 || value.length < 6){
                  cb(new Error('密码为6-16为字符'))
                }else{
                  cb()
                }
              },
              trigger: 'blur'
            }
          ]
        }
      }
    },
    methods: {
      reg(){
        this.$refs['loginForm'].validate(valid => {
          if(valid){
            this.loading = true
            fetch('/api/reg', this.loginForm).then(res => {
              this.loading = false
              if(res.data.code === 0){
                this.$message({
                  message: '注册成功',
                  type: 'success'
                })
              }else{
                this.$message.error(res.data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
