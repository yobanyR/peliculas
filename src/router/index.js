import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VistaPrincipal.vue'
import GeneroPeliculaView from '../views/GeneroPeliculaView.vue'
import CarteleraView from '../views/CarteleraView.vue'
import DetailsView from '../views/DetailsView.vue'
import MejorCalificadosView from '../views/MejorCalificadosView.vue'
import PopularesView from '../views/PopularesView.vue'



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
    path: '/Detailsview/:id', // Asegúrate de agregar el carácter "/" antes de ":id"
    name: 'Detailsview',
    component: DetailsView,
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
