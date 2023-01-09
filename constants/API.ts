export const TrendingList = (apiKey: string) => `/trending/all/week?api_key=${apiKey}&language=en-US`;

export const NetflixOriginals = (apiKey: string) => `/discover/tv?api_key=${apiKey}&with_networks=213`;

export const TopRated = (apiKey: string) => `/movie/top_rated?api_key=${apiKey}&language=en-US`;

export const ActionMovies = (apiKey: string) => `/discover/movie?api_key=${apiKey}&with_genres=28`;

export const ComedyMovies = (apiKey: string) => `/discover/movie?api_key=${apiKey}&with_genres=35`;

export const HorrorMovies = (apiKey: string) => `/discover/movie?api_key=${apiKey}&with_genres=27`;

export const RomanceMovies = (apiKey: string) => `/discover/movie?api_key=${apiKey}&with_genres=10749`;

export const Documentaries = (apiKey: string) => `/discover/movie?api_key=${apiKey}&with_genres=99`;