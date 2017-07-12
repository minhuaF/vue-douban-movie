// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/base.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  watch: {
    '$route' (to, from) {
      console.log('==== 路由参数变化 ====')
      console.log('from ==>>', from)
      console.log('to ====>>', to)
    }
  }
})

/**
 * 导航钩子
 * TODO 登录拦截
 */
router.beforeEach((to, from, next) => {
  console.log('=== 导航钩子处理 ===')
  console.log('from ==>>', from)
  console.log('to ===>>', to)
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!auth.LoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/**
 * 模拟登录信息
 */
const auth = {
  LoggedIn: () => false
}
