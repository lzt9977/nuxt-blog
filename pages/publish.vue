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
          v-model="source"
          resize="none"
          class="markdown-area"
        ></el-input>
      </el-col>
      <el-col :span="12" >
        <el-card class="markdown-area scroll" :body-style="{padding: 0}">
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
        source: '',
        loading: false,
        title: ''
      }
    },
    computed: {
      getHtml(){
        return marked(this.source)
      }
    },
    methods: {
      publish(){
        fetch('/api/publish', {}, this.$store.state.token).then(res => {

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