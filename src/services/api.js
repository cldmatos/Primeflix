import axios from 'axios';

//https://api.themoviedb.org/3/movie/now_playing?api_key=4a615de38411a38df42aca4de010b4d2&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default api;