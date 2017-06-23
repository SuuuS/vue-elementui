import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes:[
		{
      name: 'sy',
      path: '/',
      component: require('../page/fipage/index.vue')
    },
    {
      name: 'navBar',
      path: '/navBar',
      component: require('../components/navBar.vue')
    },
    {
      name: 'sideBar',
      path: '/sideBar',
      component: require('../components/sideBar.vue')
    }
  ]
});


export default router;
