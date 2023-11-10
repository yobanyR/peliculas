<template>
   <div class="card" style="width: 18rem;">
    <h4 class="text-aling">Productora</h4>
  <img src="https://e00-expansion.uecdn.es/imagenes/2012/06/12/tendencias/1339480350_0.jpg" class="card-img-top" alt="...">
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
      <h4>Productor</h4>
      <p v-if="movieDetails.production_companies">{{ movieDetails.production_companies.map(company => company.name).join(', ') }}</p>
    </div>
  </template>
  
  <script>
  import PeliService from '@/service/PeliService';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'ProductorView',
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
  