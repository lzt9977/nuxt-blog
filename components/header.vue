<template>
  <el-header class="header">
    <el-menu
      :default-active="$store.state.navIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="jump"
    >
      <el-menu-item v-for="(item, index) in navItems" :index="index + ''" :key="index" >
        <router-link :to="{path: item.link}" active-class="active">{{item.name}}</router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
  export default {
    data(){
      return {
        navItems: [
          {name: '首页', link: '/'},
          {name: '登录', link: '/login'},
        ],
      }
    },
    methods: {
      jump(index){
        this.$store.commit('NAV_INDEX', index)
      }
    }
  }
</script>

<style scoped>
  .header{
    background: #545c64;
    width: 100%;
  }
</style>
