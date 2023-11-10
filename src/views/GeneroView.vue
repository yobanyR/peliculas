<template>
    <h4>Genero</h4>
    <p>{{ movieDetails.genres }}</p>
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