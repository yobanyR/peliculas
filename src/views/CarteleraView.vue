<template>
  <div>
    <br>
    <br>
    <div>
      <h1>Cartelera</h1>
      <br>

      <div style="position: absolute; top: 10px;  left: 80px;">
        <router-link :to="{ path: '/' }">
          <button class="go-home-button">Ir a inicio</button>
        </router-link>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <CardView
          v-for="pelicula in pageResults"
          :key="pelicula.id"
          :title="pelicula.title"
          :imageSrc="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path"
          :releaseDate="pelicula.release_date"
          :detailsLink="{ path: '/detalle/' + pelicula.id }"
        />

      </div>

      <!-- Paginación con Bootstrap -->
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item" :class="{ disabled: page === 1 }">
            <a class="page-link" @click="changePage(page - 1)" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="pageNumber in totalPages" :key="pageNumber" class="page-item" :class="{ active: page === pageNumber }">
            <a class="page-link" @click="changePage(pageNumber)" href="#">{{ pageNumber }}</a>
          </li>
          <li class="page-item" :class="{ disabled: page === totalPages }">
            <a class="page-link" @click="changePage(page + 1)" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import PeliService from '@/service/PeliService';
import CardView from './CardView.vue';

export default {
  name: 'CarteleraView',
  components: {
    'CardView': CardView,
  },
  data() {
    return {
      page: 1,
      totalPages: 1,
      itemsPerPage: 10, // Número de elementos por página
      pageResults: [],
    };
  },
  async created() {
    await this.fetchData(this.page);
  },
  methods: {
    async fetchData(page) {
      try {
        const response = await PeliService.getCartelera(page);
        this.pageResults = response.results;
        this.totalPages = response.total_pages > 10 ? 10 : response.total_pages; // Limita a un máximo de 10 páginas
      } catch (error) {
        console.error(error);
      }
    },
    formatDate(date) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    async changePage(page) {
      this.page = page;
      await this.fetchData(this.page);
    },
  },
};
</script> 

<style scoped>
.card {
  /* Ajusta el tamaño de los cuadros según tus necesidades */
  width: 350px;
  height: 320px;
  /* Opcional: Puedes agregar márgenes o espaciado interno */
  margin: 10px;
  padding: 10px;
  border: 1px solid #121010;
  /* Agrega un borde para resaltar los cuadros */
  text-align: center;
  display: flex;
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
</style>
  

