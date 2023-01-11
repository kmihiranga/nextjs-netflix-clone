/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import { TopRatedResultDetailsResponse } from '~/typings';

type Props = {
    baseUrl: string;
    isLargeRow?: boolean;
    movie: TopRatedResultDetailsResponse
}

const TopRatedMovieCard: FC<Props> = ({baseUrl, isLargeRow = true, movie}) => {
    return (
        <>
            <img 
                className={`toprated__poster ${isLargeRow && "toprated__posterLarge"}`}
                src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} alt={movie.title} />
        </>
    );
}

export default TopRatedMovieCard;