import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
   {
     path:'',
     redirect:'/home'
   },{
     path:'/home',
     component:()=>import('@/views/home/home.vue')
   },{
    path:'/category',
    component:()=>import('@/views/category/category.vue')
   },{
    path:'/profile',
    component:()=>import('@/views/profile/profile.vue')
   },{
    path:'/cart',
    component:()=>import('@/views/cart/cart.vue')
   },
   {
     path:'/detail/:iid',
     component:()=>import('@/views/detail/detail.vue')
   }
  ],
  mode:'history'
})
