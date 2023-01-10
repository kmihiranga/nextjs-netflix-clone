import { FC } from 'react';
import Navbar from '@components/Navbar/Navbar';
import Banner from '@components/Banner/Banner';
import CategoryCard from '@components/CategoryCard/CategoryCard';
import {getNetflixOriginalsList} from '~/redux/features/netflix_originals/netflixOriginalsThunk';
import { getTopRatedList } from '~/redux/features/top_rated/topRatedThunk';

const HomeScreen: FC = () => {
    return (
        <>
            <div className='homeScreen'>
                <Navbar />
                
                <Banner />

                <CategoryCard title='NETFLIX ORIGINALS' fetchUrl={getNetflixOriginalsList} isLargeRow/>
                <CategoryCard title='Trending Now' fetchUrl={getTopRatedList} isLargeRow />
            </div>
        </>
    );
}

export default HomeScreen;
