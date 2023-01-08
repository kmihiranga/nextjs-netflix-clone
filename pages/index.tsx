/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import HomeScreen from '../components/Home/HomeScreen';

const App: FC = () => {
  return (
    <>
      <div className='app'>
        <HomeScreen />
      </div>
    </>
  );
}

export default App;