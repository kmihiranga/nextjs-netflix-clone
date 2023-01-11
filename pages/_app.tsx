import '@styles/globals.css'
import '@styles/HomeScreen.css'
import '@styles/Navbar.css'
import '@styles/Banner.css'
import "@styles/TopRatedCard.css";
import type { AppProps } from 'next/app'
import {wrapper} from "~/redux/store/store";
import {FC} from "react";
import {Provider} from "react-redux";

const MyApp: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
  );
};

export default wrapper.withRedux(MyApp);