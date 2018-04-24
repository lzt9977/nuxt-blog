<template>
  <div>
    <ArticleTemplate :data="data"></ArticleTemplate>
  </div>
</template>

<script>
  import ArticleTemplate from '../../components/articleTemplate'
  import fetch from '~/plugins/fetch'
  export default {
    components: {
      ArticleTemplate
    },
    asyncData({ params }){
      return fetch('/api/getArticleDetail', {
        articleId: params.article
      }).then(res => {
        if(res.data.code === 0){
          return {
            data: res.data.data
          }
        }
      })
    }
  }
</script>

<style scoped lang="scss">
  .time {
    font-size: 12px;
    color: #999;

    span{
      display: inline-block;
      margin-right: 20px;
    }
  }

  .content{
    padding: 20px 0;
  }
</style>