import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryItem from '../views/CategoryItem'
import FlashcardItem from '../views/FlashcardItem.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: CategoryItem
  },
  {
    path: '/create-flashcards',
    name: 'create-flashcards',
    component: FlashcardItem
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
