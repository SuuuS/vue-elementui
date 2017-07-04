<!-- 风险评估 -->
<template lang="html">
  <div class="riskAssessment">
    风险评估
    <div id="mount-point"></div>

  </div>
</template>

<script>
var Profile = Vue.extend({
  template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  }
})
// 创建 Profile 实例，并挂载到一个元素上。
new Profile().$mount('#mount-point');
</script>

<style lang="css">
</style>
