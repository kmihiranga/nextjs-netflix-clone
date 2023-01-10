import { configureStore } from '@reduxjs/toolkit';
import {createWrapper} from 'next-redux-wrapper';
import MasterSlice from "~/redux/features/master/masterSlice";
import TrendingSlice from "~/redux/features/trending/trendingSlice";
import NetflixOriginalsSlice from "~/redux/features/netflix_originals/netflixOriginalsSlice";
import TopRatedSlice from "~/redux/features/top_rated/topRatedSlice";

const store = () => configureStore({
   reducer: {
      master: MasterSlice,
      trending: TrendingSlice,
      netflixOriginals: NetflixOriginalsSlice,
      toprated: TopRatedSlice
   }
});

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
export const wrapper = createWrapper<AppStore>(store);