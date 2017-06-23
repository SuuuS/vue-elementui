<template lang="html">
  <div id="navBar">
    <el-menu theme="light" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">用户</template>
        <el-menu-item index="2-1" >登录</el-menu-item>
        <el-menu-item index="2-2">注册</el-menu-item>
        <el-menu-item index="2-3">退出</el-menu-item>
      </el-submenu>
      <el-menu-item index="3"><a href="javascript:;" target="_blank">ummmm</a></el-menu-item>
    </el-menu>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
     return {
       activeIndex: '1',
       activeIndex2: '1'

     }
   },
   methods: {
     handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
   }
}
</script>

<style lang="css">

</style>
