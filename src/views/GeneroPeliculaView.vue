<template>
  
  <div>
    <br>
    <br>
    <div style="position: absolute; top: 10px; left: 80px;">
      <router-link :to="{ path: '/' }">
        <button class="go-home-button">Ir a inicio</button>
      </router-link>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <CardView
          v-for="pelicula in page.results"
          :key="pelicula.id"
          :title="pelicula.title"
          :imageSrc="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path"
          :releaseDate="pelicula.release_date"
          :detailsLink="{ path: '/detalle/' + pelicula.id }"
        />
      </div>
    </div>
  </div>
</template>


<script>
import PeliService from '@/service/PeliService';
import DetailsView from './DetailsView.vue';
import CardView from './CardView.vue';


export default {
  components: {
    'DetailsView': DetailsView,
    'CardView': CardView,
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

</style>
