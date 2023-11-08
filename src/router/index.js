import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/VistaPrincipal.vue'
import GeneroPeliculaView from '../views/GeneroPeliculaView.vue'
import CarteleraView from '../views/CarteleraView.vue'
<<<<<<< HEAD
import DetailsView from '../views/DetailsView.vue'
=======
import MejorCalificadosView from '../views/MejorCalificadosView.vue'
>>>>>>> develop

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
<<<<<<< HEAD
    path: '/Detailsview',
    name: 'Detailsview',
    component: DetailsView

=======
    path: '/MejorCalificados/',
    name: 'MejorCalificados',
    component: MejorCalificadosView
>>>>>>> develop
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
