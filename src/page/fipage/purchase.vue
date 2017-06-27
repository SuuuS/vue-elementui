<!-- 购买 -->
<template lang="html">
  <el-card class="box-card">
    <div class="list">
      <ul>
        <li v-for="a in text">{{a.text}}</li>
      </ul>
      <hr>
      <p>{{list.description}}</p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'purchase',
  data () {
    return {
    text : '',
    list : ''
    }
  },
  methods: {
    fetchData(){
      // this.$http.get("http://localhost:8080/src/data.json").then((res)=>{ // 方法一
      //   console.log(res)
      //   this.list = res.data.seller
      //   this.text = res.data.ratings
      // }).catch(function(err){
      //   console.log(err);
      // });
      this.axios.get("http://localhost:8080/src/data.json").then((res) => { // 方法二
        this.list = res.data.seller
        this.text = res.data.ratings
        console.log(res.data)
      }).catch(function(err){
        console.log(err);
      });
    }
  },
  mounted() {
    // 页面加载时执行
    this.fetchData();
  }
}
</script>

<style lang="css">
/*.list li {
  list-style: none;
  float: left;
  margin: 0 10px;
  cursor: pointer;
}*/
</style>
