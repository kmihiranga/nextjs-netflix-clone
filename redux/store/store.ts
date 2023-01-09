import { configureStore } from '@reduxjs/toolkit';
import MasterSlice from "~/redux/features/master/masterSlice";
import TrendingSlice from "~/redux/features/trending/trendingSlice";
import {createWrapper} from 'next-redux-wrapper';

const store = () => configureStore({
   reducer: {
      master: MasterSlice,
      trending: TrendingSlice
   }
});

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default store;
export const wrapper = createWrapper<AppStore>(store);