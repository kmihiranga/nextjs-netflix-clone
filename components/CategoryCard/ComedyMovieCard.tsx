/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';
import {ComedyMovieResultResponse} from "~/typings";

type Props = {
    baseUrl: string;
    isLargeRow?: boolean;
    movie: ComedyMovieResultResponse;
};

const ComedyMovieCard: FC<Props> = ({ baseUrl, isLargeRow = false, movie}) => {
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

export default ComedyMovieCard;