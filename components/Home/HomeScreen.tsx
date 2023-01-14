import { FC, useEffect } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';
import TopRatedMovieCardList from '@components/CategoryCard/TopRatedMovieCardList';
import {getNetflixOriginalsList} from '~/redux/features/netflix_originals/netflixOriginalsThunk';
import { getTopRatedList } from '~/redux/features/top_rated/topRatedThunk';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import ActionMovieCardList from "@components/CategoryCard/ActionMovieCardList";
import {getActionMoviesList} from "~/redux/features/action_movies/actionMoviesThunk";

const HomeScreen: FC = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";
    const dispatch = useAppDispatch();
    const topRated = useAppSelector((state) => state.toprated.topRatedMovieData);
    const actionMovies = useAppSelector((state) => state.actions.actionMoviesData);

    useEffect(() => {
        dispatch(getTopRatedList());
        dispatch(getActionMoviesList());
    }, [dispatch]);

    return (
        <>
            <div className='homeScreen'>
                <Navbar />
                
                <Banner />

                <TopRatedMovieCardList baseUrl={BASE_URL} title='Top Rated Movies' movies={topRated} />
                <ActionMovieCardList baseUrl={BASE_URL} title='Action Movies' movies={actionMovies} />
            </div>
        </>
    );
}

export default HomeScreen;
