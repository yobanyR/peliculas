<template>
    <div class="container">
      <div class="row">
        <div
          class="col-md-4"
          v-for="(pelicula, index) in page.results"
          :key="index"
        >
          <div class="card mb-3">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + pelicula.backdrop_path"
              class="card-img-top"
              :alt="pelicula.title"
            />
            <div class="card-body">
              <h5 class="card-title">{{ pelicula.title }}</h5>
              <p class="card-text">{{ pelicula.release_date  }}</p>
            </div>
            <router-link :to="{name:'detalle',params:{id:pelicula.id}}">
                <button class="btn btn-primary">Ver detalle de película</button>
              </router-link>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import PeliService from '@/service/PeliService'
  
export default {
  name: 'CarteleraView',
  data() {
    return {
        page: {
          results: [],
        },
      };
      
  },
  async created() {
    this.page = await PeliService.getCartelera();
    console.log("esto es", this.page);
  },
};
</script>
