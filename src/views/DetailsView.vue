<template>
        <div class="container">
        <div class="row d-flex justify-content-center">
            <div  class="col-sm-8 mt-3 pt-3 pb-3">
                <div class="card">
                    <div class="card-title">
                        <h3 class="text-center">
                            {{ pelicula.title }}
                        </h3>
                    </div>
                    <div class="card-body">
                        <img v-if="image" :src="image" alt="" width="200" height="200">
                        <div class="d-flex aligm-items-bottom">
                            <p> <stong>Tipo: </stong></p>
                            <p style="margin-right: 5px; margin-left: 2px;" v-for="(type, index) in types" :key="index">
                                {{ type.type.title }}
                            </p>
                        </div>
                        <div class="d-flex">
                            <button @click="goToDetails()" class="btn btn-primary m-3">
                                Ver Detalles
                            </button>
                            <button @click="goToTrailer()" class="btn btn-warning m-3">
                                Ver Trailer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div  class="col-sm-8 mt-3 pt-3 pb-3">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import PeliService from '@/services/PeliService'
export default {
    name: 'DetailsView',
    data(){
        return {
            title:'',
            overview: {},
            yearsold: [],
            image: null,
            
        }
    },
    async created() {
        const route = useRoute()
        this.title = route.params.title
        this.DetailsView = await DetailService.getDetailView(this.name)
        this.overview = this.details.overview
        this.image = this.details.sprites.other.dream_world.front_default
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

<style lang="scss">

</style>