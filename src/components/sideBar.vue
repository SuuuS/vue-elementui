<template lang="html">
  <div id="sideBar">
    <el-menu default-active="2" theme="dark" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>快速通道</template>

        <el-menu-item index="1-1">购买</el-menu-item>
        <el-menu-item index="1-2">赎回</el-menu-item>
        <el-menu-item index="1-3">风险评估</el-menu-item>
        <el-menu-item index="1-4">资产证明</el-menu-item>
        <el-menu-item index="1-5">帮助中心</el-menu-item>
        <el-menu-item index="1-6">个人信息</el-menu-item>
        <el-menu-item index="1-7">密码修改</el-menu-item>

      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>在线交易</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>交易记录</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-setting"></i>个人中心</el-menu-item>
      <el-menu-item index="5"><i class="el-icon-setting"></i>帮助中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sideBar',
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="css">
</style>
