import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VistaPrincipal.vue'
import GeneroPeliculaView from '../views/GeneroPeliculaView.vue'
import CarteleraView from '../views/CarteleraView.vue'
import DetailsView from '../views/DetailsView.vue'
import MejorCalificadosView from '../views/MejorCalificadosView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/genero/:id',
    name: 'genero',
    component: GeneroPeliculaView
  },
  {
    path: '/cartelera',
    name: 'cartelera',
    component: CarteleraView
  },

  {
    path: '/Detailsview:id',
    name: 'Detailsview',
    component: DetailsView,
    children:[
      {
        path:'summary',
        name:'summary',
        component
      },
      {
        path: 'generos',
        name:'generos',
        component
      },
      {
        path:'company',
        name:'company',
        component 
      },
      {
        path:'trailer',
        name:'trailer',
        component
      }
    ]
  },
  {
    path: '/MejorCalificados/',
    name: 'MejorCalificados',
    component: MejorCalificadosView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
