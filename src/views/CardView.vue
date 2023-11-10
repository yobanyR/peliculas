<!-- CardView.vue -->
<template>
    <div class="col-md-4 mb-4">
      <div class="card border-primary cardt">
        <img :src="imageSrc" class="card-img-top" :alt="title" />
        <div class="card-body">
          <h5 class="card-title">{{ title }}</h5>
          <strong>Fecha de lanzamiento:</strong>
          <p class="card-text mt-3">{{ formatDate(releaseDate) }}</p>
          <div>
            <router-link :to="detailsLink">
              <button class="btn btn-primary">Ver detalle de película</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      imageSrc: String,
      releaseDate: String,
      detailsLink: String,
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(date).toLocaleDateString(undefined, options);
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid;
    border-color: #007bff;
  }
  
  .cardt {
    height: 100%; /* Ocupar toda la altura de la tarjeta */
  }
  
  /* Opcional: Agregar márgenes internos para mejorar el espaciado */
  .card-body {
    padding: 1.25rem;
  }
  </style>
  