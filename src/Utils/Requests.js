const apiKey = "08d05be211b7ba2cc39b2d4556b16422";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchDrama: `/discover/movie?api_key=${apiKey}&with_genres=18`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
  //fetchLatest: `movie/latest?api_key=${apiKey}&language=en-US`,
  fetchNowPlaying: `movie/now_playing?api_key=${apiKey}&language=en-US`,
  fetchPopular: `movie/popular?api_key=${apiKey}&language=en-US`,
};

export default requests;

//https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}
// https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false
