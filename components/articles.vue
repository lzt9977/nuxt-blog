<template>
  <div>
    <ArticleTemplate v-for="(item, index) in dataList.list" :key="index" :data="item"></ArticleTemplate>

    <el-pagination
      v-if="dataList.total > 10"
      @current-change="jump"
      :current-page="currentPage"
      :total="data.total"
      :page-size="data.pageSize"
    ></el-pagination>
  </div>
</template>

<script>
  import fetch from '../plugins/fetch'
  import ArticleTemplate from './articleTemplate'
  import moment from 'moment'

  export default {
    components: {
      ArticleTemplate
    },
    props: ['data'],
    data () {
      return {
        currentPage: 1,
        dataList: this.data,
      }
    },
    methods: {
      jump (current) {
        fetch('/api/getArticlesList', {
          page: current,
          pageSize: 10,
        }).then(res => {
          this.dataList = res.data.data
        })
      },
    },
  }
</script>

<style scoped>

</style>
