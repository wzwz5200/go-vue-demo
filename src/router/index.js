import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AboutView.vue'
// import storageservice from '@/storageservice';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'about',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    component: HomeView
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // 获取token
  const token = window.localStorage.getItem('jkdev_user_token');
  // 有token
  if (token) {
    // 直接放行
    next();
  } else {  // 否则是没有
    // 如果去的是登录页
    if (to.path === '/login') {
      // 直接放行
      next();
    } else {
      // 如果去的是其他页,跳转到登录页

      alert("您没有登录")
      // 跳转到登录页
      return next({ "path": "/login" })
    }
  }
})
export default router
