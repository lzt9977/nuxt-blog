<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="16">
      <Articles :data="data" class="articles-list"></Articles>
    </el-col>
    <el-col :span="7">
      <el-card :body-style="{ padding: '0px' }">
        <img src="~/assets/img/head.jpeg" class="head-img">

      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import fetch from '../plugins/fetch'
  import Articles from '../components/articles'

  export default {
    asyncData({ store }) {
      return fetch('/api/getArticlesList', {
        page: 1,
        pageSize: 10
      }, store.state.token).then(res => {
        return {
          data: res.data.data,
        }
      })
    },
    components: {
      Articles
    }
  }
</script>

<style scoped lang="scss">
  .head-img{
    display: block;
    width: 100%;
  }
</style>