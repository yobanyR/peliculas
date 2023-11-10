<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-success mt-3" @click="$router.go(-1)">
                    Volver
                </button>
                <div class="card mt-3" v-if="movieDetails">
                    <img v-if="movieDetails.backdrop_path" class="card-img-top img-fluid" :src="'https://image.tmdb.org/t/p/w300' + movieDetails.backdrop_path" alt="Movie Image">
                    <div class="card-body">
                        <h5 class="card-title">{{ movieDetails.title }}</h5>
                        <p class="card-text">{{ movieDetails.release_date }}</p>
                        <p class="card-text">{{ movieDetails.overview }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PeliService from '@/service/PeliService'

export default {
    name: 'DetailsView',
    data() {
        return {
            movieDetails: null
        };
    },
    async created() {
        const peliculaId = this.$route.params.id;
        this.movieDetails = await PeliService.getDetails(peliculaId);
    }
};
</script>

<style>
.btn-success {
  float: left;
}
</style>
