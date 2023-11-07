<template>
    <div style="position: absolute; top: 0; left: 0;">
  <button style="border: none;">
    <router-link :to="{path: '/'}">Ir a inicio</router-link>
  </button>
</div>
   <div class="container">
     <div class="row">
       <div class="col-md-4" v-for="pelicula in page.results" :key="pelicula.id">
         <div class="card">
           <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" class="card-img-top" :alt="pelicula.title" />
           <div class="card-body">
             <h5 class="card-title">{{ pelicula.title }}</h5>
             <p class="card-text">{{ pelicula.overview }}</p>
           </div>
         </div>
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
        page: {
          results: [],
        },
      };
    },
    async created() {
     
      this.page = await PeliService.getPopulares();
      console.log(this.page);
    },
  };
  </script>
  

