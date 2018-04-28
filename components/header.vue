<template>
  <el-header class="header">
    <el-row align="middle" justify="space-around" type="flex">
      <el-col :span="16">
        <el-menu
          :default-active="$store.state.navIndex"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="jump"
        >
          <el-menu-item
            v-for="(item, index) in navItems"
            :index="item.link + ''"
            :key="index"
            @click="jump(item.link)"
            v-if="item.auth == undefined || ( item.auth && $store.state.token ) || ( !item.auth && !$store.state.token)"
          >{{item.name}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="2">
        <el-button round type="info" size="mini" v-if="!$store.state.token" @click="login">登录</el-button>
        <el-button round type="danger" size="mini" v-else @click="logout">退出</el-button>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
  import fetch from '../plugins/fetch'

  export default {
    created () {
      this.$store.commit('NAV_INDEX', `/${this.$route.path.split('/')[1]}`)
    },
    watch: {
      '$route' (newVal) {
        this.$store.commit('NAV_INDEX', `/${newVal.path.split('/')[1]}`)
      },
    },
    data () {
      return {
        navItems: [
          {name: '首页', link: '/'},
          // {name: '登录', link: '/login', isAuth: false},
          {name: '注册', link: '/reg', auth: false},
          {name: '发布', link: '/publish', auth: true},
        ],
      }
    },
    methods: {
      jump (index) {
        this.$store.commit('NAV_INDEX', index)
        this.$router.push(index)
      },
      logout () {
        fetch('/api/logout', {}, this.$store.state.token).then(res => {
          if (res.data.code === 0) {
            this.$store.commit('SET_TOKEN', '')
            this.$message({
              message: '退出成功',
              type: 'success',
            })
          } else if (res.data.code === 600) {
            this.$store.commit('SET_TOKEN', '')
          }
        })
      },
      login () {
        this.$router.push('/login')
      },
    },
  }
</script>

<style scoped>
  .header {
    background: #545c64;
    width: 100%;
  }
</style>
