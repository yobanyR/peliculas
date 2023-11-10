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
    },
    async created(){
        const route =useRoute()
        this.id = route.params.id
        this.movieDetails = await PeliService.getDetails(this.id)
    },
}
</script>