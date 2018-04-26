<template>
  <div>
    <el-input
      size="medium"
      class="margin-b-2"
      v-model="title"
      placeholder="请输入标题"
    ></el-input>
    <el-row type="flex" justify="center" class="margin-b-2">
      <el-col :span="12">
        <el-input
          type="textarea"
          :rows="20"
          placeholder="请输入内容"
          v-model="content"
          resize="none"
          class="markdown-area"
        ></el-input>
      </el-col>
      <el-col :span="12" >
        <el-card shadow="never" class="markdown-area scroll" :body-style="{padding: '10px'}">
          <div v-html="getHtml" class="markdown-body"></div>
        </el-card>
      </el-col>
    </el-row>
    <div class="align-center">
      <el-button type="primary" :loadiong="loading" @click="publish">提交</el-button>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'
  import fetch from '../plugins/fetch'

  export default {
    data(){
      return {
        content: '',
        loading: false,
        title: ''
      }
    },
    computed: {
      getHtml(){
        return marked(this.content)
      }
    },
    methods: {
      publish(){
        if(!this.title){
          return this.$message.error('请输入标题')
        }

        if(!this.content){
          return this.$message.error('请输入文章内容')
        }

        this.loading = true

        fetch('/api/publish', {
          title: this.title,
          content: this.content
        }, this.$store.state.token).then(res => {
          this.loading = false
          if(res.data.code === 0){
            this.$message({
              message: '文章提交成功， 等待审核',
              type: 'success'
            })
          }else{
            this.$message.error(res.data.msg)
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">
  .markdown-area{
    height: 432px;
    overflow: hidden;
  }

  .scroll{
    overflow-y: scroll;
  }
  
  .align-center{
    text-align: center;
  }

  .margin-b-2{
    margin-bottom: 20px;
  }
</style>