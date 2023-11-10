<template>
    <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Resumen</h5>
    <p class="card-text">{{ movieDetails.overview }}</p>
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
            movieDetails:{}
        }
    <div>
      <h4>Resumen</h4>
      <p>{{ movieDetails.overview }}</p>
    </div>
  </template>
  
  <script>
  import PeliService from '@/service/PeliService';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'ResumenView',
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
  