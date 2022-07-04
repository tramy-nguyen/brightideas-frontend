import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryItem from '../views/CategoryItem'
import FlashcardItem from '../views/FlashcardItem.vue'
import SetItem from '@/views/SetItem'
import AllFlashcards from '@/views/AllFlashcards'

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
  },
  {
    path: '/sets',
    name: 'sets',
    component: SetItem
  },
  {
    path: '/all-flashcards',
    name: 'all-flashcards',
    component: AllFlashcards
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
