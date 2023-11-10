<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="(pelicula, index) in peliculas" :key="index">
        <div :class="['card', 'mb-3', 'custom-border', getCardColor(index)]">
          <div class="card-body">
            <h2 class="card-title">{{ pelicula.name }}</h2>
            <router-link :to="{ path: '/genero/' + pelicula.id}">
                <h2>Ir</h2>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-link :to="{ name: 'cartelera' }">
    <button class="btn btn-outline-primary">Ver Cartelera</button>
   </router-link>
  
  <router-link :to="{path: '/populares/'}">
    <button class="btn btn-outline-primary">Populares</button>
  </router-link>
 

   <router-link :to="{ path: '/MejorCalificados/'}">
    <button>Mejor Calificados</button>
  </router-link>

</template>

<script>
import PeliService from '@/service/PeliService'

export default {
  name: 'VistaPrincipal',
  data() {
    return {
      peliculas: []
    }
  },
  methods: {
    getCardColor(index) {
      const colors = [
        'border-custom-blue', 'border-custom-indigo', 'border-custom-purple', 'border-custom-pink',
        'border-custom-red', 'border-custom-orange', 'border-custom-yellow', 'border-custom-green',
        'border-custom-teal', 'border-custom-cyan', 'border-custom-gray'
      ];        
      return colors[index % colors.length];
    }
  },
  async created() {
    this.peliculas = await PeliService.getPelicula()
  }
}
</script>

<style scoped>
    body {
      background-color: rgba(151, 213, 227, 0.75);  
    }
    .custom-border {
      border-width: 3px;
    }
    .border-custom-blue {
      border-color: #007bff;
    }
    .border-custom-indigo {
      border-color: #6610f2;
    }
    .border-custom-purple {
      border-color: #6f42c1;
    }
    .border-custom-pink {
      border-color: #d63384;
    }
    .border-custom-red {
      border-color: #dc3545;
    }
    .border-custom-orange {
      border-color: #fd7e14;
    }
    .border-custom-yellow {
      border-color: #ffc107;
    }
    .border-custom-green {
      border-color: #198754;
    }
    .border-custom-teal {
      border-color: #20c997;
    }
    .border-custom-cyan {
      border-color: #0dcaf0;
    }
    .border-custom-gray {
      border-color: #6c757d;
    }
</style>
