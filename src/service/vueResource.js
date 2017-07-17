/**
 * Author Miwa
 * Created at 20170713
 */

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

/**
 * get 请求
 * options = {
 *  url    : XXX,
 *  params : {},
 *  success: () => {},
 *  fail   : () => {},
 *  error  : () => {}
 * }
 */
export const callApi = (options) => {
  Vue.http.get(options.url).then(response => {
    // success callback && fail callback
    options.success()
  }, response => {
    // error callback
    options.error()
  })
}

/**
 * Post 请求
 */
export const callApiPost = (options) => {
  Vue.http.post(options.url).then(response => {
    // success callback && fail callback
    options.success()
  }, response => {
    // error callback
    options.error()
  })
}



