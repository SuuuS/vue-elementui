<template lang="html">
  <div class="sy">
    <el-card class="box-card">
      <div class="assessment section" style="height:auto;padding: 20px;">
        <div class="hello">
          您好,<span style="color:#ff9900;">客户346</span>
          <p class="smcp"><span id="cplxId"><!-- 平衡型 --></span><a href="http://111.207.179.11/fi/zhgl/fxcp_list">(风险测评结果查询&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)</a></p>
        </div>
        <p class="money">份额总额:<span class="feze">1,937,571.58</span>
        </p><p class="money">资产总额:<span class="zcze">2,418,089.33</span><!-- <span class="eye"></span> --></p>
      </div>
    </el-card>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
export default {
  name:'sy',
  data() {
    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  }
}
</script>

<style lang="css">
</style>
