import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../components/homePage.vue'
import repoPage from '../components/repoPage.vue'
import navBar from '../components/navBar.vue'
// import footerPage from '../components/footerPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'navBar',
    component: navBar,
    children: [
      {
        path: '/',
        name: 'homePage',
        component: homePage
      },
      {
        path: '/repo',
        name: 'repoPage',
        component: repoPage
      },
      // {
      //   path: '/footer',
      //   name: 'footerPage',
      //   component: footerPage
      // },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
