import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddProductView from '@/views/AddProductView.vue'
import PresentationView from '@/views/PresentationView'
import ProductEdit from '@/views/ProductEdit'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/présentation',
    name: 'présentation',
    component: PresentationView
  },
  {
    path: '/product-add',
    name: 'product-add',
    component: AddProductView
  },
  {
    path: '/product-edit/:id',
    name: 'product-edit',
    component: ProductEdit
    }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
