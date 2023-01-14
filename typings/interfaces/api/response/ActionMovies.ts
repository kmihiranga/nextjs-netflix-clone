export interface ActionMovieResultResponse {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    title: string;
}

export interface ActionMovieResponse {
    page: number;
    results: ActionMovieResultResponse[];
    total_pages: number;
    total_results: number;
}