<template>
  <div>
    <Articles :data="data"></Articles>
  </div>
</template>

<script>
  import fetch from '../plugins/fetch'
  import Articles from '../components/articles'

  export default {
    asyncData() {
      return fetch('/api/getArticlesList', {
        page: 1,
        pageSize: 10
      }).then(res => {
        return {
          data: res.data
        }
      })
    },
    components: {
      Articles
    }
  }
</script>
