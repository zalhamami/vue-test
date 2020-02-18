import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestPage from '@/pages/test/TestPage'
import testlah from '@/pages/gold/testlah'

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
      name: 'Page.Test',
      component: TestPage
    },
    {
      path: '/job-search',
      name: 'Page.Gold',
      component: testlah
    }
  ]
})
