import { FC } from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const HomeScreen: FC = () => {
    return (
        <>
            <div className='homeScreen'>
                <Navbar />
                
                <Banner />

                {/** Row */}
            </div>
        </>
    );
}

export default HomeScreen;
