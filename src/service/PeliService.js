import axios from "axios"




export default{
    async getPelicula(){
        return await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO')
        .then(response =>{
            return response.data.genres
        })
        
        .catch(error =>{
            console.log (error)
        })
    },  
    async getGeneroPelicula(id){
        return await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=492d218f089fd8c20e9c3a945b482a9f&language=esCO&with_genres=${id}`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getCartelera(id){
        return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=${id}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getPopulares(id){
        return await axios.get(`https://api.themoviedb.org/3/movie/popular?page=${id}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })

    },
    async getMejorCalificados(id){
        return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=${id}&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getDetails(id) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`);
          return response.data;
        } catch (error) {
          console.error('Error al obtener los detalles de la película:', error);
          return null; // O devuelve algún otro valor predeterminado dependiendo de la lógica de tu aplicación
        }
      },
      

}
