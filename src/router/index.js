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
      name: 'root',
      component: HelloWorld,
      children: [
        {
          path: 'img',
          name: 'main_img',
          component: HelloMain
        }
      ]
    },
    {
      path: '/dash_board',
      name: 'dash_board',
      component: DashBoard
    }
  ]
})
