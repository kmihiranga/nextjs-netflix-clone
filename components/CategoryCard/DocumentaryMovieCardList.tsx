import { FC } from 'react';
import DocumentaryMovieCard from "@components/CategoryCard/DocumentaryMovieCard";
import {DocumentaryMovieResultResponse} from "~/typings";

type Props = {
    baseUrl: string;
    title: string;
    movies: DocumentaryMovieResultResponse[];
}

const ComedyMovieCardList: FC<Props> = ({ baseUrl, title, movies }) => {
    return (
        <>
            <div className='toprated__card'>
                <h2>{title}</h2>
                <div className="toprated__posters">
                    {movies && movies.map((movie, index) => {
                        return <DocumentaryMovieCard key={index} baseUrl={baseUrl} movie={movie} />
                    })}
                </div>
            </div>
        </>
    );
}

export default ComedyMovieCardList;