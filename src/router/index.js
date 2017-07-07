import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import MovieHome from '@/components/Movie/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/movie',
      name: 'Home',
      component: MovieHome
    }
  ]
})
