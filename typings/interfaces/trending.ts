import { TrendingListResultDetailsResponse} from "~/typings";

export interface TrendingSlice {
    trendingMovieData: TrendingListResultDetailsResponse[] | null;
    trendingMovieDataLoading: boolean;
}