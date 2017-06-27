<!-- 风险评估 -->
<template lang="html">
  <div class="riskAssessment">
    风险评估
    <ul>
      <li>
        <el-card :body-style="{ padding: '0px' }">
          <img src="" class="image">
          <div style="padding: 14px;">
            <span>{{ }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    getData(){
      // this.$http.get("http://localhost:8080/src/data.json").then((response) => {
      //   console.log(response)
      //   //this.
      //
      // }).catch(function(err){
      //   console.log(err);
      // })
      this.axios.get("http://localhost:8080/src/data.json").then((res) => { // 方法二
        // this.list = res.data.seller
        // this.text = res.data.ratings
        console.log(res.data)
      }).catch(function(err){
        console.log(err);
      });
    }
  },
  mounted(){
      this.getData();
  }
}
</script>

<style lang="css">
</style>
