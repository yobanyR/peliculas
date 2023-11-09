<template>
    <div class="container">
        <button class="btn btn-primary">
        <router-link :to="{path: '/'}">Ir a inicio</router-link>
        </button>
        <div class="row">
            <div class="col">
                <h4 class="text-center">
                    Detalle pelicula
                </h4>
                <hr>
            </div>
        </div>
        <div class="row mt-1 p-3 d-flex justify-content-center">
            <div class="col-sm-6 mt-1" style="max-height: 300px;">
                <img :src="'${BASE_IMG}${pelicula.poster_path}'" alt="" style="max-height: 500px;">
                <h4 class="text-success mt-2">
                    {{ pelicula.title }}
                </h4>
                <p>{{ pelicula.release_date }}</p>
            </div>
            <div class="col-sm-6">
                <div class="row d-flex">
                    <div>
                        
                    </div>

                </div>

            </div>
        </div>
    </div>
        
</template>

<script>
import { useRoute } from 'vue-router'
import PeliService from '@/service/PeliService'
export default {
    components:{
        'PeliService':PeliService
    },
    name: 'DetailsView',
    data(){
        return {
            title:'',
            relase_date: {},
        }
    },
    async created() {
        
    },
    methods: {
        goToDetails() {
            this.$router.push({
                name:'details'
            })
        },
        goToTrailer() {
            this.$router.push({
                name:'Trailers'
            })
        }
    }
}
</script>