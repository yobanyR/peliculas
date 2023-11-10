<template>
    <div>
        <h4>Trailer</h4>
        <div v-if="movieTrailers.length > 0">
            <youtube :src="movieTrailers[0].key" :playerVars="{ autoplay: 1 }" width="600" height="400" />
        </div>
        <div v-else>
            <p>No hay trailers disponibles.</p>
        </div>
    </div>
</template>

<script>
import PeliService from '@/service/PeliService';
import { useRoute } from 'vue-router';
import Youtube from 'vue3-youtube';

export default {
    name: 'TrailerView',
    components: {
        youtube: Youtube,
    },
    data() {
        return {
            id: '',
            movieTrailers: [],
        };
    },
    async created() {
        const route = useRoute();
        this.id = route.params.id;
        this.movieTrailers = await PeliService.getTrailers(this.id);
        console.log(this.movieTrailers)
    },

};
</script>
