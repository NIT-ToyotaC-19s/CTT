import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Catalog from '@/components/Catalog'
import Question from '@/components/Question'
import Help from '@/components/Help'
import Score from '@/components/Score'
import Map from '@/components/Map'

// import store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: '/', component: Home, name: 'Home' },
      { path: '/catalog', component: Catalog, name: 'Catalog' },
      { path: '/question', component: Question, name: 'Question' },
      { path: '/help', component: Help, name: 'Help'},
      { path: '/score', component: Score, name: 'Score'},
      { path: '/map', component: Map, name: 'Map'},
    ]
})

export default router
