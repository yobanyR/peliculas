<template>
    <router-link :to="{path:'/'}">
  <button class="btn btn-primary aling-text-center">Ir a peliculas </button>
</router-link>
<hr>
<div class="container">
  <div class="row">
    <div class="col-sm-6">
        <h4 class="text-center text-primary">DETALLE</h4>
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-8" v-if="movieDetails">
            <img v-if="movieDetails.backdrop_path" :src="'https://image.tmdb.org/t/p/w300'+ movieDetails.backdrop_path" alt="...">
          </div>
          <div class="col-md-4">
            <div class="card-body">
              <h5 class="card-title">
                {{ movieDetails.title }}
              </h5>
              <p class="card-title">
                {{ movieDetails.release_date }}
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
    <div class="col-sm-6">
      <div class="row d-flex">
        <div class="col">
          <button @click="VerResumen()" class="btn btn-primary">Resumen</button>
        </div>
        <div class="col">
          <button @click="VerGenero()" class="btn btn-primary">Genero</button>
        </div>
        <div class="col">
          <button @click="VerProductor()" class="btn btn-primary">Productor</button>
        </div>
        <div class="col">
          <button @click="VerTrailer()" class="btn btn-primary">Trailer</button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
            <router-view/>
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
          console.log(this.movieDetails)
        },
        methods:{
            formatDate(date) {
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date(date).toLocaleDateString(undefined, options);
            },
            VerResumen(){
                this.$router.push({name:'resumen'})
            },
            VerProductor(){
                this.$router.push({name:'productor'})
            },
            VerGenero(){
                this.$router.push({name:'genero'})
            },
            VerTrailer(){
                this.$router.push({name:'trailer'})
            },
        },
};
</script>
  
    <style>
      .btn-success {
        float: left;
      }
    </style>
  