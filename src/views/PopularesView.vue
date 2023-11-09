<template>
    <br>
    <br>
    <div>
        <h1>Populares</h1>
        <br>
   
   <div style="position: absolute; top: 10px;  left: 80px;">
   
    <router-link :to="{path: '/'}">
    <button class="go-home-button">Ir a inicio</button>
    </router-link>
</div>
</div>
  
   <div class="container">
     <!-- Itera sobre la lista de películas en la página actual -->
     <div class="row">
       <div class="col-md-4 my-6 cardt" v-for="pelicula in page.results" :key="pelicula.id">
         <div class="card col-md my-4">
           <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" class="card-img-top" :alt="pelicula.title" /> <!-- Muestra la imagen de la película -->
           <div class="card-body">
              <!-- Muestra el título de la película y su fecha de lanzamiento -->
             <h5 class="card-title">{{ pelicula.title }}</h5>
             <h6><strong> Fecha de lanzamiento:</strong></h6>
             <p class="card-text">{{ formatDate(pelicula.release_date) }}</p>

           </div>
         </div>
       </div>
      </div>
      <div>
      <div class="pagination"><!-- Sección de paginación -->
      <button @click="previousPage" :disabled="selected_page === 1"> anterior</button> <!-- Botones para las páginas -->
      <button @click="previousPage" :disabled="selected_page === 2"> 2</button>
      <button @click="previousPage" :disabled="selected_page === 3"> 3</button>
      <button @click="previousPage" :disabled="selected_page === 4"> 4</button>
      <button @click="previousPage" :disabled="selected_page === 5"> 5</button>
      <button @click="nextPage" :disabled="selected_page === page.length"> siguiente</button>
    </div>
    </div>
  </div>
  </template>
  
  <script>
import PeliService from '@/service/PeliService'
  
  export default {
    name: 'PopularesView',
    data() {
    return {
        type:'',
        filter:'',
        genres:[],
        peliculas:[],
        baseURL: "http://localhost:3000",
        page:[
            {page: 1},
            {page: 2},
            {page: 3},
            {page: 4},
            {page: 5},
        ],
        selected_page:1,
      
      
    }
  },
 

    async created() {// Cuando el componente se crea, obtiene las películas populares
     
      this.page = await PeliService.getPopulares();
      console.log(this.page);
    },
    methods: {
    formatDate(date) { // Formatea la fecha en un formato legible
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };//se crea un objeto llamado optionsque contiene las opciones de formato para la fecha,para incluir el año , el mes y el día 
      return new Date(date).toLocaleDateString(undefined, options);//para formatear options
    },
  },
  previousPage() {// Navega a la página anterior si es posible
      if (this.selected_page > 1) {
        this.selected_page--;
      }
    },
    nextPage() {// Navega a la página siguiente si es posible
      if (this.selected_page < this.page.length) {
        this.selected_page++;
      }
    },
  
    goToPage(pageNum) { // Navega a una página específica
      this.selected_page = pageNum;
    }
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
  border: 1px solid #121010; /* Agrega un borde para resaltar los cuadros */
  text-align: center;
  display: flex;
}
.go-home-button {
  background-color: #8be0f7; /* Color de fondo del botón */
  color: #0e0505; /* Color del texto del botón */
  border: 2px solid #007bff; /* Borde del botón */
  padding: 10px 20px; /* Espaciado dentro del botón */
  border-radius: 5px; /* Bordes redondeados */
  font-size: 1rem; /* Tamaño de la fuente del botón */

  
}
  
</style>
  

