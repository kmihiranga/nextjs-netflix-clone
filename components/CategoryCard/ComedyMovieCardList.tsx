import { FC } from 'react';
import ComedyMovieCard from "@components/CategoryCard/ComedyMovieCard";
import {ComedyMovieResultResponse} from "~/typings";

type Props = {
    baseUrl: string;
    title: string;
    movies: ComedyMovieResultResponse[];
}

const ComedyMovieCardList: FC<Props> = ({ baseUrl, title, movies }) => {
    return (
        <>
            <div className='toprated__card'>
                <h2>{title}</h2>
                <div className="toprated__posters">
                    {movies && movies.map((movie, index) => {
                        return <ComedyMovieCard key={index} baseUrl={baseUrl} movie={movie} />
                    })}
                </div>
            </div>
        </>
    );
}

export default ComedyMovieCardList;