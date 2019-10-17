import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home'
import Bar from '@/view/bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
