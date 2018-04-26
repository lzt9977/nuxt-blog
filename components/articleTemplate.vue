<template>
  <el-card shadow="hover" class="list">
    <div slot="header">
      <h1 class="title">{{data.title}}</h1>
      <div class="time">
        创建时间：{{getTime}}
      </div>
    </div>

    <div class="markdown-body" v-html="getHtml"></div>
  </el-card>
</template>

<script>
  import marked from 'marked'
  import moment from 'moment'

  export default {
    props: ['data'],
    computed: {
      getHtml () {
        return marked(this.data.content, {sanitize: true})
      },
      getTime(){
        return moment(Number(this.data.createTime)).format('YYYY-MM-DD HH:mm:ss')
      }
    },
  }
</script>

<style scoped>
  .title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .time {
    font-size: 16px;
    color: #808080;
  }

  .list {
    margin-bottom: 20px;
  }
</style>