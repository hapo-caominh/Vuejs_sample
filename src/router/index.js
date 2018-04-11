import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/components/dash_board/dashboard'
import HelloMain from '@/components/root/root_main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/main',
          component: HelloMain
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: DashBoard
    }
  ]
})
