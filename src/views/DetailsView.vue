<template>
        <div class="container">
        <div class="row d-flex justify-content-center">
            <div  class="col-sm-8 mt-3 pt-3 pb-3">
                <div class="card">
                    <div class="card-title">
                        <h3 class="text-center">
                            {{  }}
                        </h3>
                        <h3 class="text-center">
                            {{    }}
                        </h3>
                    </div>
                    <div class="card-body" >
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
import PeliService from '@/service/PeliService'
export default {
    components:{
        'PeliService':PeliService
    },
    name: 'DetailsView',
    data(){
        return {
            title:'',
            Date: {},
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