import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/home/Home')
const DefaultPage =()=>import('../views/home/DefaultPage')
const GetAddress=()=>import('../views/home/GetAddress')
const Movie =()=>import('../views/movie/Movie')
// const show =()=>import('../views/show/show')
// const mine =()=>import('../views/mine/mine')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
          {
              path: '/defaultPage',
              name: 'DefaultPage',
              component: DefaultPage
          },
          {
              path:'/getAddress',
              name:'GetAddress',
              component:GetAddress
          },
          {
              path: '/movie',
              name: 'Movie',
              component: Movie
          },
          // {
          //     path: '/show',
          //     name: 'show',
          //     component: show
          // },
          // {
          //     path: '/mine',
          //     name: 'mine',
          //     component: mine
          // },

      ]
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
