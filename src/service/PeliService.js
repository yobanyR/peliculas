import axios from "axios"

const BASE_URL= "https://api.themoviedb.org/3/"
const BASE_IMG = "https://image.tmdb.org/t/p/w500/"
const APIKEY = "492d218f089fd8c20e9c3a945b482a9f"
const LANGUAGE = "es-CO"


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
    async getCartelera(){
        return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
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
        return await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=3&api_key=492d218f089fd8c20e9c3a945b482a9f&language=es-CO`)
        .then(response =>{
            return response.data
        })
        .catch(error =>{
            console.log (error)
        })
    },
    async getDetails(id){
        return await axios.get('${BASE_URL}pelicula/${id}?api_key=${APIKEY}&language=${LANGUAGE}')
        .then(response=>{
            let pelicula=response.data
            pelicula.relase_date = formatRelaseDate(pelicula.relase_date)
            return pelicula
        })
        .catch(error=>{
            console.log(error)
        })
    },

}
