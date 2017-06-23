<template>
  <div id="app">
    <!-- <el-row> -->
      <el-col :span="4">
        <!-- 侧边栏 -->
        <sideBar></sideBar>
      </el-col>
      <el-col :span="20">
        <!-- 头部导航 -->
        <navBar></navBar>
        <!-- 主界面 -->
        <router-view></router-view>
      </el-col>
    <!-- </el-row> -->
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import sideBar from './components/sideBar.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
      navBar,
      sideBar
  }
}
</script>

<style>
/*#sideBar .el-menu {
  min-height:500px;
}*/
*{
  font-family:"Microsoft YaHei"
}
</style>
