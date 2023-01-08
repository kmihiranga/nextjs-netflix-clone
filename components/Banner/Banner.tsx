import { FC } from 'react';

const Banner: FC = () => {
    return (
        <>
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg')`,
                backgroundPosition: "center center"
            }}>
                <div className="banner__contents">
                    <h1 className="banner__title">
                        Movie Name
                    </h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        This is a test description
                    </h1>
                </div>

                <div className="banner--fadeBottom" />
            </header>
        </>
    );
}

export default Banner;