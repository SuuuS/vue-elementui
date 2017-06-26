import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
      name: 'sy', // 首页
      path: '/',
      component: require('../page/fipage/index.vue')
    },
		{
      name: 'purchase', // 购买
      path: '/purchase',
      component: require('../page/fipage/purchase.vue')
    },
		{
      name: 'redemption', // 赎回
      path: '/redemption',
      component: require('../page/fipage/redemption.vue')
    },
		{
      name: 'riskAssessment', // 风险评估
      path: '/riskAssessment',
      component: require('../page/fipage/riskAssessment.vue')
    },
		{
      name: 'assetsCertification', // 资产证明
      path: '/assetsCertification',
      component: require('../page/fipage/assetsCertification.vue')
    },
		{
			name: 'help', // 帮助中心
      path: '/help',
      component: require('../page/fipage/help.vue')
		},
		{
      name: 'personalInformation', // 个人信息
      path: '/personalInformation',
      component: require('../page/fipage/personalInformation.vue')
    }
  ]
});


export default router;
