<template>
    <br>
    <div style="position: absolute; top: 10px;  left: 80px;">
        <router-link :to="{ path: '/' }">
            <button class="go-home-button">Ir a inicio</button>
        </router-link>
    </div>

    <div class="col-sm-6">
      <div class="row d-flex">
        <div class="col">
          <button @click="VerResumen()" class="btn btn-primary">Resumen</button>
        </div>
        <div class="col">
          <button @click="VerGenero()" class="btn btn-warning">Genero</button>
        </div>
        <div class="col">
          <button @click="VerProductor()" class="btn btn-success">Productor</button>
        </div>
        <div class="col">
          <button @click="VerTrailer()" class="btn btn-danger">Trailer</button>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
            <router-view/>
        </div>
    <br>
    <br>
    <div>

        <hr>
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <h4 class="text-center text-primary">DETALLE</h4>
                    <div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-12" v-if="movieDetails">
                                <img v-if="movieDetails.backdrop_path"
                                    :src="'https://image.tmdb.org/t/p/w500' + movieDetails.backdrop_path" alt="..."
                                    class="img-fluid" />
                            </div>
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title" v-if="movieDetails">{{ movieDetails.title }}</h5>
                            <p class="card-text" v-if="movieDetails">{{ formatDate(movieDetails.release_date) }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="row d-flex">
                        <div class="col">
                            <button @click="VerResumen()" class="btn btn-primary btn-custom">Resumen</button>
                        </div>
                        <div class="col">
                            <button @click="VerGenero()" class="btn btn-primary btn-custom">Género</button>
                        </div>
                        <div class="col">
                            <button @click="VerProductor()" class="btn btn-primary btn-custom">Productor</button>
                        </div>
                        <div class="col">
                            <button @click="VerTrailer()" class="btn btn-primary btn-custom">Tráiler</button>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col">
                            <router-view />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import PeliService from '@/service/PeliService';

export default {
    name: 'DetailsView',
    data() {
        return {
            movieDetails: null,
        };
    },
    async created() {
        const peliculaId = this.$route.params.id;
        this.movieDetails = await PeliService.getDetails(peliculaId);

    },
    methods: {
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
                this.$router.push({name:'generos'})
            },
            VerTrailer(){
                this.$router.push({name:'trailer'})
            },

        },
        VerResumen() {
            this.$router.push({ name: 'resumen' });
        },
        VerProductor() {
            this.$router.push({ name: 'productor' });
        },
        VerGenero() {
            this.$router.push({ name: 'generos' });
        },
        VerTrailer() {
            this.$router.push({ name: 'trailer' });
        },
    },
};
</script>
  
<style>
.btn-custom {
    background-color: #fff;
    /* Fondo blanco */
    color: #000;
    /* Texto negro */
}

.card {
    background-color: #fff;
    /* Fondo blanco */
    color: #000;
    /* Texto negro */
}

.go-home-button {
    background-color: #8be0f7;
    /* Color de fondo del botón */
    color: #0e0505;
    /* Color del texto del botón */
    border: 2px solid #007bff;
    /* Borde del botón */
    padding: 10px 20px;
    /* Espaciado dentro del botón */
    border-radius: 5px;
    /* Bordes redondeados */
    font-size: 1rem;
    /* Tamaño de la fuente del botón */


}

.img-fluid {
    width: 100%;
    height: auto;
}
</style>
  