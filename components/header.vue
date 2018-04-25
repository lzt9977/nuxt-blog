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
      <el-menu-item v-for="(item, index) in navItems" :index="item.link + ''" :key="index" @click="jump(item.link)">{{item.name}}</el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
  export default {
    created(){
      this.$store.commit('NAV_INDEX', `/${this.$route.path.split('/')[1]}`)
    },
    watch: {
      '$route'(newVal){
        this.$store.commit('NAV_INDEX', `/${newVal.path.split('/')[1]}`)
      }
    },
    data(){
      return {
        navItems: [
          {name: '首页', link: '/'},
          {name: '登录', link: '/login'},
          {name: '注册', link: '/reg'},
          {name: '发布', link: '/publish'},
        ],
      }
    },
    methods: {
      jump(index){
        this.$store.commit('NAV_INDEX', index)
        this.$router.push(index)
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
