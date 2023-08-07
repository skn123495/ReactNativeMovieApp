import {createSlice} from '@reduxjs/toolkit';
import {StoreConstants} from '../../constants/appConst';
import {RootState} from '../store';
import {ILoaderStateType} from '@app/types/reducerTypes/loaderStoreType';

const initialState: ILoaderStateType = {
  loadingInitial: false,
};

const loaderSlice = createSlice({
  name: StoreConstants.LOADER_STORE,
  initialState,
  reducers: {
    onLoadingShow: (state, action) => {
      state.loadingInitial = action.payload;
    },
    onLoadingHide: (state, action) => {
      state.loadingInitial = action.payload;
    },
  },
});

export const {onLoadingShow, onLoadingHide} = loaderSlice.actions;
export default loaderSlice.reducer;
export const loaderState = (state: RootState) => state.loaderExp;
