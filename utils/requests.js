const API_KEY='aaaedb82ded8a7be31a36c4c3a72686c';
export default {
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  fetchUpcoming: {
    title: "Upcoming Movies",
    url: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  },
  fetchPopular: {
    title: "Popular",
    url: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  },
  fetchHorrorMovies: {
    title: "Horor",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  fetchScifi: {
    title: "Sci-fi",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=878`,
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=37`,
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=16`,
  },
  fetchTV: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_generes=770`,
  },
};
