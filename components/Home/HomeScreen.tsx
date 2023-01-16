import { FC, useEffect } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';
import TopRatedMovieCardList from '@components/CategoryCard/TopRatedMovieCardList';
import { getTopRatedList } from '~/redux/features/top_rated/topRatedThunk';
import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import ActionMovieCardList from "@components/CategoryCard/ActionMovieCardList";
import {getActionMoviesList} from "~/redux/features/action_movies/actionMoviesThunk";
import ComedyMovieCardList from "@components/CategoryCard/ComedyMovieCardList";
import {getComedyMoviesList} from "~/redux/features/comedy/comedyMoviesThunk";
import { getHorrorMoviesList } from '~/redux/features/horror/horrorMoviesThunk';
import HorrorMovieCardList from '@components/CategoryCard/HorrorMovieCardList';
import {getDocumentaryMovieList} from "~/redux/features/documentary/documentaryThunk";
import DocumentaryMovieCardList from "@components/CategoryCard/DocumentaryMovieCardList";

const HomeScreen: FC = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "";
    const dispatch = useAppDispatch();
    const topRated = useAppSelector((state) => state.toprated.topRatedMovieData);
    const actionMovies = useAppSelector((state) => state.actions.actionMoviesData);
    const comedyMovies = useAppSelector(state => state.comedy.comedyMovieData);
    const horrorMovies = useAppSelector((state) => state.horror.horrorMovieData);
    const documentaryMovies = useAppSelector((state) => state.documentary.documentaryMovieData);

    useEffect(() => {
        dispatch(getTopRatedList());
        dispatch(getActionMoviesList());
        dispatch(getComedyMoviesList());
        dispatch(getHorrorMoviesList());
        dispatch(getDocumentaryMovieList());
    }, [dispatch]);

    return (
        <>
            <div className='homeScreen'>
                <Navbar />
                
                <Banner />

                <TopRatedMovieCardList baseUrl={BASE_URL} title='Top Rated Movies' movies={topRated} />
                <ActionMovieCardList baseUrl={BASE_URL} title='Action Movies' movies={actionMovies} />
                <ComedyMovieCardList baseUrl={BASE_URL} title='Comedy Movies' movies={comedyMovies} />
                <HorrorMovieCardList baseUrl={BASE_URL} title='Horror Movies' movies={horrorMovies} /> 
                <DocumentaryMovieCardList baseUrl={BASE_URL} title='Documentary Movies' movies={documentaryMovies} />
            </div>
        </>
    );
}

export default HomeScreen;
