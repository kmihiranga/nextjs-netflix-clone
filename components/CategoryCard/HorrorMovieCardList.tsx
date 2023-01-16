import { FC } from "react";
import { HorrorMovieResultResponse } from "~/typings";
import HorrorMovieCard from "./HorrorMovieCard";

type Props = {
    baseUrl: string;
    title: string;
    movies: HorrorMovieResultResponse[],
};

const HorrorMovieCardList: FC<Props> = ({ baseUrl, title, movies }) => {
    return (
        <>
            <div className='toprated__card'>
                <h2>{title}</h2>
                <div className="toprated__posters">
                    {movies && movies.map((movie, index) => {
                        return <HorrorMovieCard key={index} baseUrl={baseUrl} movie={movie} />
                    })}
                </div>
            </div>
        </>
    );
}

export default HorrorMovieCardList;