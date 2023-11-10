<template>
    <div>
      <h4>Género</h4>
      <p v-if="movieDetails.genres">{{ movieDetails.genres.map(genre => genre.name).join(', ') }}</p>
    </div>
  </template>
  
  <script>
  import PeliService from '@/service/PeliService';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'GeneroView',
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
  