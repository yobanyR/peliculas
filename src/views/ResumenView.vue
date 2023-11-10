<template>
    <div>
      <h4>Resumen</h4>
      <p>{{ movieDetails.overview }}</p>
    </div>
  </template>
  
  <script>
  import PeliService from '@/service/PeliService';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'ResumenView',
    data() {
      return {
        id: '',
        movieDetails: {},
      };
    },
    async created() {
      const route = useRoute();
      this.id = route.params.id;
      this.movieDetails = await PeliService.getDetails(this.id);
    },
  };
  </script>
  