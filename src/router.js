import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Catalog from '@/components/Catalog'
import Question from '@/components/Question'
import Help from '@/components/Help'

// import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: Home, name: 'Home' },
      { path: '/catalog', component: Catalog, name: 'Catalog' },
      { path: '/question', component: Question, name: 'Question' },
      { path: '/help', component: Help, name: 'Help'},
    ]
})

export default router
