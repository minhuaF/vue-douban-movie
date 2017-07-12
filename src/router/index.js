import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import NotFoundComponent from '@/components/NotFoundComponent'

// import Login from '@/components/Movie/Login'
// import MovieHome from '@/components/Movie/Home'
// import MovieDetail from '@/components/Movie/Detail'
// import MovieInfo from '@/components/Movie/components/MovieInfo'
// import MovieComment from '@/components/Movie/components/MovieComment'

Vue.use(Router)

export default new Router({
  // mode: 'history',   // 如果要设置这个属性的话，需要后台配置
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: 'hello',
      component: resolve => {
        require(['@/components/Hello'], resolve)
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['@/components/Movie/Login'], resolve)
      }
    },
    {
      path: '/movie',
      name: 'home',
      component: resolve => {
        require(['@/components/Movie/Home'], resolve)
      }
    },
    {
      path: '/movie/detail/:id',
      name: 'detail',
      component: resolve => {
        require(['@/components/Movie/Detail'], resolve)
      },
      meta: { requiresAuth: true },
      children: [
        {
          path: 'info',
          component: resolve => {
            require(['@/components/Movie/components/MovieInfo'])
          }
        },
        {
          path: 'comment',
          component: resolve => {
            require(['@/components/Movie/components/MovieComment'])
          }
        }
      ]
    },
    {
      path: '*',
      name: 'notFound',
      component: resolve => {
        require(['@/components/NotFoundComponent'])
      }
    }
  ]
})
