<template>
  <br>
    <br>
  <div style="position: absolute; top: 10px;  left: 80px;">
    <router-link :to="{ path: '/' }">
      <button class="go-home-button">Ir a inicio</button>
    </router-link>
  </div>
  <br>
  <br>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="pelicula in page.results" :key="pelicula.id">
        <div class="card border-primary mb-3 cardt">
          <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" class="card-img-top"
            :alt="pelicula.title" />
          <div class="card-body">
            <h5 class="card-title">{{ pelicula.title }}</h5>
            <strong>Fecha de lanzamiento:</strong>
            <p class="card-text mt-3"> {{ formatDate(pelicula.release_date) }}</p>
            <div>
              <router-link :to="{ path: '/Detailsview/' + pelicula.id }">
                <button class="btn btn-primary">Ver detalle de película</button>
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
import DetailsView from './DetailsView.vue';

export default {
  components: {
    'DetailsView': DetailsView
  },
  name: 'GeneroPeliculaView',
  data() {
    return {
      page: {
        results: [],
      },
    };
  },
  async created() {
    const peliculaId = this.$route.params.id;
    this.page = await PeliService.getGeneroPelicula(peliculaId);
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped>
.card {
  border: 1px solid;
  border-color: #007bff;
  /* Cambia el color según tus preferencias */
}
.go-home-button {
  background-color: #8be0f7;
  /* Color de fondo del botón */
  color: #0e0505;
  /* Color del texto del botón */
  border: 2px solid #007bff;
  /* Borde del botón */
  padding: 10px 20px;
  /* Espaciado dentro del botón */
  border-radius: 5px;
  /* Bordes redondeados */
  font-size: 1rem;
  /* Tamaño de la fuente del botón */


}

.cardt {
  height: 400px;
  /* Ajusta la altura según tus necesidades */
}</style>
