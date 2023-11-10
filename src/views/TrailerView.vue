<template>  
<h4>Trailer</h4>
<YouTube
    v-if="trailer"
    :src="`https://www.youtube.com/watch?v=${trailer}`"
    @ready="onReady"
    ref="youtube"/>
</template>
<script>
import PeliService from '@/service/PeliService';
import { useRoute } from 'vue-router';
import YouTube from 'vue3-youtube'
export default{
    name:"GeneroView",
    components: {YouTube},
    data (){
        return{
            id:'',
            pelicula:{},
            videos:[],
            trailer:false
        }
    },
    async created(){
        const route = useRoute()
        this.id = route.params.id
        this.pelicula = await PeliService.getDetails(this.id)
        this.videos = await PeliService.getMovieTrailer(this.id)
        if(this.videos>0){
            this.trailer = this.videos[0].key
        }
        console.log(this.trailer)
    },
    methods:{
        onReady(){
            this.$refs.youtube.playvideo()
        },
    },
};
</script>