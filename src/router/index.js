import Vue from 'vue'
import VueRouter from 'vue-router'
//首页路由
import index from '../views/index.vue'
//书籍搜索查找页路由
import search from '../views/books_search.vue'
// 详情页路由
import details from '../views/details.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '/', component: index },
    { path: '/search', component: search },
    { path: '/details/:bid', component: details ,props:true}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
