import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: '',
    component: () => import("../components/pagination/index.vue")
  },

]

const router = new VueRouter({
  routes
})

export default router