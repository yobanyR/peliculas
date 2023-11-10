import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VistaPrincipal.vue'
import GeneroPeliculaView from '../views/GeneroPeliculaView.vue'
import CarteleraView from '../views/CarteleraView.vue'
import DetailsView from '../views/DetailsView.vue'
import MejorCalificadosView from '../views/MejorCalificadosView.vue'
import PopularesView from '../views/PopularesView.vue'
import GeneroView from '../views/GeneroView.vue'
import TrailerView from '../views/TrailerView.vue'
import ResumenView from '../views/ResumenView.vue'
import ProductorView from '../views/ProductorView.vue'




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
    path: '/populares',
    name: 'populares',
    component: PopularesView
  },

  {
    path: '/cartelera',
    name: 'cartelera',
    component: CarteleraView
  },

  {
    path: '/detalle/:id', 
    name: 'detalle',
    component: DetailsView,
    children:[
      {
        path:'resumen',
        name:'resumen',
        component: ResumenView
      },
      {
        path:'genero',
        name:'genero',
        component: GeneroView
      },
      {
        path:'productor',
        name:'productor',
        component: ProductorView
      },
      {
        path:'trailer',
        name:'trailer',
        component: TrailerView
      },
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
