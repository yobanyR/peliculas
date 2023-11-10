<template>
  <div>
    <nav class="navbar navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link :to="{ path: '/genero' }" class="navbar-brand">Género de películas</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>

    <div class="offcanvas offcanvas-end text-white" tabindex="-1" id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header-custom">
        <h5 class="offcanvas-title font-weight-bold display-4" id="offcanvasDarkNavbarLabel">Menú</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body bg-dark pb-5">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'cartelera' }" class="nav-link active">Ver Cartelera</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/populares/' }" class="nav-link">Populares</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ path: '/MejorCalificados/' }" class="nav-link">Mejor Calificados</router-link>
          </li>
        </ul>
        <form class="d-flex mt-3" role="search" @submit.prevent="searchByGenre">
          <input v-model="searchInput" class="form-control me-2" type="search" placeholder="Buscar por género"
            aria-label="Search">
          <button class="btn btn-success" type="submit">Buscar</button>
        </form>
      </div>
    </div>

    <div class="main-container mt-5">
      <div class="border-top border-bottom border-dark py-4">
        <div class="container">
          <div class="row">
            <div class="col-md-4" v-for="(pelicula, index) in peliculas" :key="index">
              <router-link :to="{ path: '/genero/' + pelicula.id }" class="genero-link">
                <div class="card mb-3 custom-border red-border" style="background-color: black">
                  <div class="card-body">
                    <h2 class="card-title" style="color: white">{{ pelicula.name }}</h2>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PeliService from '@/service/PeliService';

export default {
  name: 'VistaPrincipal',
  data() {
    return {
      peliculas: [],
      searchInput: '',
    };
  },
  async created() {
    this.peliculas = await PeliService.getPelicula();
  },
  methods: {
    searchByGenre() {
      if (this.searchInput) {
        const searchQuery = this.searchInput.toLowerCase();
        // Filtrar películas por género que coincidan con la consulta de búsqueda
        this.peliculas = this.peliculas.filter(pelicula =>
          pelicula.genre.toLowerCase().includes(searchQuery)
        );
      } else {
        // Si la consulta está vacía, restaurar todas las películas
        this.getPeliculas();
      }
    },
    async getPeliculas() {
      this.peliculas = await PeliService.getPelicula();
    },
  },
};
</script>

<style scoped>
.red-border {
  border-width: 2px;
  border-color: black;
}

body {
  background-color: black;
}

.main-container {
  border-left: 2px solid black;
  border-right: 2px solid black;
  margin-top: 70px;
}

.offcanvas-header-custom {
  padding: 0.5rem 1rem;
  /* Ajusta el relleno según sea necesario */
  background-color: rgba(0, 0, 0, 0.745);
  /* Fondo negro */
}

.custom-border {
  border-width: 4px;
  border-color: black;
}

.card-title,
h2 {
  color: white;
}
</style>
