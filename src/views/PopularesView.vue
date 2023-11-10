<template>
  <div>
    <br>
    <br>
    <div>
      <h1>Populares</h1>
      <br>

      <div style="position: absolute; top: 10px;  left: 80px;">
        <router-link :to="{ path: '/' }">
          <button class="go-home-button">Ir a inicio</button>
        </router-link>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 my-6 cardt" v-for="pelicula in pageResults" :key="pelicula.id">
          <div class="card col-md my-4">
            <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" class="card-img-top"
              :alt="pelicula.title" /> <!-- Muestra la imagen de la película -->
            <div class="card-body">
              <!-- Muestra el título de la película y su fecha de lanzamiento -->
              <h5 class="card-title">{{ pelicula.title }}</h5>
              <h6><strong> Fecha de lanzamiento:</strong></h6>
              <p class="card-text">{{ formatDate(pelicula.release_date) }}</p>

            </div>
          </div>
        </div>
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

export default {
  name: 'PopularesView',
  data() {
    return {
      page: 1,
      totalPages: 1,
      itemsPerPage: 10, // Número de elementos por página
      pageResults: [],
    };
  },
  async created() {
    await this.fetchData(this.page);  // Llama a la función fetchData() al inicio del ciclo de vida del componente
  },
  methods: {
    async fetchData(page) {// Define una función asincrónica llamada fetchData que toma un parámetro 'page'.
      try { 
        const response = await PeliService.getPopulares(page); // Intenta realizar una solicitud para obtener datos populares de PeliService para la página especificada.
        this.pageResults = response.results;  // Calcula el número total de páginas y lo limita a un máximo de 10 páginas.
        this.totalPages = response.total_pages > 10 ? 10 : response.total_pages; // Limita a un máximo de 10 páginas
      } catch (error) {// En caso de error, imprime el error en la consola.
        console.error(error);
      }
    },
    formatDate(date) {// Definición de una función llamada formatDate que toma una fecha y devuelve una cadena de texto con el formato deseado.
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' }; // Opciones de formato para la fecha, indicando el año en formato numérico, el mes en formato de dos dígitos y el día en formato de dos dígitos.
      return new Date(date).toLocaleDateString(undefined, options); // Creación de un nuevo objeto de fecha a partit de fecha y formateo de la fecha según las opciones definidas.
    },
    async changePage(page) {// Definición de una función asíncrona llamada changePage que toma un número de página como argumento.
      this.page = page;// Establecimiento de la propiedad 'page' en el objeto actual con el valor proporcionad
      await this.fetchData(this.page); // Llamada a la función fetchData con el número de página como argumento después de establecer la propiedad 'page'.
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
  

