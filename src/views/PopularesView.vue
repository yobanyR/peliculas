<template>
    <br>
    <br>
    <div>
        <h1>Populares</h1>
        <br>
   
   <div style="position: absolute; top: 10px;  left: 80px;">
  <button >
    <router-link :to="{path: '/'}">Ir a inicio</router-link>
  </button>
</div>
</div>
  
   <div class="container">
    
     <div class="row">
       <div class="col-md-4 my-6" v-for="pelicula in page.results" :key="pelicula.id">
         <div class="card col-md my-4">
           <img :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path" class="card-img-top" :alt="pelicula.title" />
           <div class="card-body">
             <h5 class="card-title">{{ pelicula.title }}</h5>
             <p class="card-text">{{ pelicula.release_date }}</p>

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
      articles: [],
      baseURL: "http://localhost:3000",
      page: 1,
      perPage: 9,
      pages: []
    };
  },
    async created() {
     
      this.page = await PeliService.getPopulares();
      console.log(this.page);
    },
  };
  </script>
  

