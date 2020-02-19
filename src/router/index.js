import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestPage from '@/pages/test/TestPage'
import PlacePage from '@/pages/PlacePage'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      component: TestPage
    },
    {
      path: '/place',
      component: PlacePage
    }

  ]
})
