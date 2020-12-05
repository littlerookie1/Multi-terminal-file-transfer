import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home')
const Product = () => import('../views/Product')
const Help = () => import('../views/Help')
const Download = () => import('../views/Download')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
	  path:'/home',
	  component: Home
  },
  {
    path:'/product',
    component:Product
  },
  {
    path:'/help',
    component:Help
  },
  {
    path:'/download',
    component:Download
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
