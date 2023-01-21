/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';
import HomeScreen from '../components/Home/HomeScreen';
import Login from "~/pages/login";

const App: FC = () => {
  const user = null;

  return (
    <>
        {!user ? (
            <Login />
        ) : (
            <div className='app'>
                <HomeScreen />
            </div>
        )}
    </>
  );
}

export default App;