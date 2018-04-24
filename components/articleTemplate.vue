<template>
  <router-link :to="`/articles/${data.articleId}`">
    <el-card shadow="hover" class="list">
      <div slot="header">
        <h1 class="title">{{data.title}}</h1>
        <div class="time">{{data.createTime}}</div>
      </div>

      <div>
        <p class="text">{{data.content}}</p>
      </div>
    </el-card>
  </router-link>
</template>

<script>
  export default {
    props: ['data']
  }
</script>

<style scoped>
  .title{
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