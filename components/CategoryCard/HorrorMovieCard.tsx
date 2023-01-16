/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { HorrorMovieResultResponse } from "~/typings";

type Props = {
    baseUrl: string;
    isLargeRow?: boolean;
    movie: HorrorMovieResultResponse;
};

const HorrorMovieCard: FC<Props> = ({ baseUrl, isLargeRow, movie }) => {
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

export default HorrorMovieCard;