import { FC } from 'react';
import ActionMovieCard from "@components/CategoryCard/ActionMovieCard";
import {ActionMovieResultResponse} from "~/typings";

type Props = {
    baseUrl: string;
    title: string;
    movies: ActionMovieResultResponse[];
}

const ActionMovieCardList: FC<Props> = ({ baseUrl, title, movies}) => {
    return (
        <>
            <div className='toprated__card'>
                <h2>{title}</h2>
                <div className="toprated__posters">
                    {movies && movies.map((movie, index) => {
                        return <ActionMovieCard key={index} baseUrl={baseUrl} movie={movie} />
                    })}
                </div>
            </div>
        </>
    );
}

export default ActionMovieCardList;