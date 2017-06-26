<!-- 购买 -->
<template lang="html">
  <el-card class="box-card">
    <div class="list">
      <ul>
        <!-- <li v-for="list in lists">{{list.text}}</li> -->
        <!-- <li v-for="article in articles">{{article.title}}</li> -->
      </ul>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'purchase',
  data () {
    return {
      // lists: [
      //   {text: '全部'},
      //   {text: '股票型'},
      //   {text: '固定收益'},
      //   {text: '量化产品'},
      //   {text: '新三板产品'},
      //   {text: '混合型'},
      //   {text: 'FOF'},
      //   {text: '股票投资'},
      //   {text: '股票定增'}
      // ]
    }
  },
  methods: {
    fetchData(){
      var _this=this;
      this.$http.get("../../data/data.json").then((res)=>{
          console.log(res)
      }).catch(function(err){
        console.log(err);
      });
    }
  },
  mounted() {
    //页面加载时执行
    this.fetchData();
  }

}
</script>

<style lang="css">
.list li {
  list-style: none;
  float: left;
  margin: 0 10px;
  cursor: pointer;
}
</style>
