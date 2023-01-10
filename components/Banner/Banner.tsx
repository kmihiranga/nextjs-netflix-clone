import {FC, useEffect, useState} from 'react';
import {useAppDispatch} from "~/redux/hooks";
import {getNetflixOriginalsList} from "~/redux/features/netflix_originals/netflixOriginalsThunk";
import { NetflixOriginalsResponse, NetflixOriginalsResultResponse } from '~/typings/interfaces/api/response/NetflixOriginals';

const Banner: FC = () => {
    const [movie, setMovie] = useState<NetflixOriginalsResultResponse>();
    // const originals = useAppSelector((state) => state.netflixOriginals.netflixOriginalsMovieData);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getNetflixOriginalsList()).then((res) => {
            if(getNetflixOriginalsList.fulfilled.type === res.type) {
                const payloadRes = res.payload as NetflixOriginalsResponse;
                setMovie(payloadRes.results[Math.floor(Math.random() * payloadRes.results.length - 1)]);
            }
        });
    }, [dispatch]);

    const truncate = (text: string, n: number) => {
        return text?.length > n ? text.substring(0, n-1) + '...' : text;
    }

    return (
        <>
            {movie && <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie && movie?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}>
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie?.name || movie?.original_name }
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>

                <div className="banner--fadeBottom" />
            </header>}
        </>
    );
}

export default Banner;