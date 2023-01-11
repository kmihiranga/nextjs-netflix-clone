import { FC } from 'react';
import TopRatedMovieCard from './TopRatedMovieCard';
import { TopRatedResultDetailsResponse } from '~/typings';

type Props = {
    baseUrl: string;
    title: string;
    movies: TopRatedResultDetailsResponse[],
}

const TopRatedMovieCardList: FC<Props> = ({baseUrl, title, movies}) => {
    return (
        <>
            <div className='toprated__card'>
                <h2>{title}</h2>
                <div className="toprated__posters">
                    {movies && movies.map((movie, index) => {
                        return <TopRatedMovieCard key={index} baseUrl={baseUrl} movie={movie} />
                    })}
                </div>
            </div>
        </>
    );
}

export default TopRatedMovieCardList;