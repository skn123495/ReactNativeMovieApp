import {createAction, createSlice} from '@reduxjs/toolkit';
import {StoreConstants} from '../../constants/appConst';
import {RootState} from '../store';
import {RESET_STORE, USER_LOGIN} from '@app/constants/actionTypes';
import {IAuthStateType} from '@app/types/reducerTypes/authStoreTypes';

const initialState: IAuthStateType = {
  userLogin: {
    isLoading: false,
    success: null,
    failed: null,
    status: USER_LOGIN.END,
    userTokens: null,
  },
};

/**
 * call this action while logout or unauthorized User state.
 * Revert all state to initial level.
 */
export const ResetAllState = createAction(RESET_STORE);

const AuthSlice = createSlice({
  name: StoreConstants.AUTH_STORE,
  initialState,
  reducers: {
    onLoginStart: state => {
      state.userLogin.isLoading = true;
      state.userLogin.status = USER_LOGIN.START;
    },
    onLoginSuccess: (state, action) => {
      state.userLogin.success = action.payload;
      state.userLogin.status = USER_LOGIN.SUCCESS;
    },
    onLoginFailed: (state, action) => {
      state.userLogin.failed = action.payload;
      state.userLogin.status = USER_LOGIN.FAILED;
    },
    onLoginEnd: state => {
      state.userLogin.isLoading = false;
      state.userLogin.status = USER_LOGIN.END;
    },
    getUserTokens: (state, action) => {
      state.userLogin.userTokens = action.payload;
    },
  },
  extraReducers: builder => builder.addCase(ResetAllState, () => initialState),
});

export const {onLoginStart, onLoginSuccess, onLoginFailed, onLoginEnd} =
  AuthSlice.actions;
export default AuthSlice.reducer;
export const authState = (state: RootState) => state.auth;
