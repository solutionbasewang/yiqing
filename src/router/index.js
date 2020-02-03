import Vue from 'vue'
import Router from 'vue-router'
import YiqingHome from '@/components/YiqingHome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'YiqingHome',
      component: YiqingHome
    }
  ]
})
