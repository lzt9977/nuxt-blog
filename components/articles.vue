<template>
  <div>
    <router-link v-for="(item, index) in dataList.list" :key="index" :to="`/${item.id}`">
      <el-card shadow="hover" class="list">
        <div slot="header">
          <span>{{item.title}}</span>
          <div class="time">{{item.createTime}}</div>
        </div>

        <div>
          <p class="text">{{item.content}}</p>
        </div>
      </el-card>
    </router-link>

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
  export default {
    props: ['data'],
    data(){
      return {
        currentPage: 1,
        dataList: this.data
      }
    },
    methods: {
      jump(current) {
        fetch('/api/getArticlesList', {
          page: current,
          pageSize: 10
        }).then(res => {
          this.dataList = res.data.data
        })
      }
    }
  }
</script>

<style scoped>
  .time{
    font-size: 12px;
    color: #999;
  }

  .list{
    margin-bottom: 20px;
  }
</style>
