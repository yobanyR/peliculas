<template>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">GENERO</h5>
    <p class="card-text">{{ movieDetails.genres }}</p>
  </div>
</div>
</template> 
<script>
import PeliService from '@/service/PeliService';
import { useRoute } from 'vue-router';
export default{
    name:'ResumenView',
    data (){
        return {
            id:'',
            movieDetails:{},
            genres:{}

        }
    <div>
      <h4>Género</h4>
      <p v-if="movieDetails.genres">{{ movieDetails.genres.map(genre => genre.name).join(', ') }}</p>
    </div>
  </template>
  
  <script>
  import PeliService from '@/service/PeliService';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'GeneroView',
    data() {
      return {
        id: '',
        movieDetails: {},
      };
    },
    async created() {
      const route = useRoute();
      this.id = route.params.id;
      this.movieDetails = await PeliService.getDetails(this.id);
    },
  };
  </script>
  