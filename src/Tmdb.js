const API_KEY = '4129d584e43990c371a1b651d6e26e8d';
const API_BASE = 'https://api.themoviedb.org/3';



const basicFetch = async (endpoint) => {
    const req = await fetch (`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?witch_network=213&languague=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'treding',
                title: 'Recomendados para você',
                items: await basicFetch(`/treding/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?witch_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'Comedy',
                title: 'Comedia',
                items: await basicFetch(`/discover/movie?witch_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?witch_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            { 
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?witch_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentarios',
                items: await basicFetch(`/discover/movie?witch_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ];
    }
}