import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/menu',
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../views/Menu.vue')
  },
  {
    path: '/tinymce-demo',
    name: 'TinymceDemo',
    component: () => import('../views/tinymceDemo')
  },
  {
    path: '/quill-demo',
    name: 'QuillDemo',
    component: () => import('../views/quillDemo')
  },
]

const router = new VueRouter({
  routes
})

export default router
