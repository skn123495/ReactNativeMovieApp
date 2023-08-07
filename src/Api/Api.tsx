import {API_URL} from '@app/constants/apiUrls';
import {apiCall} from '@app/utils/axiosHelper';

export const LoginApi = async (params: any) => {
  return await apiCall(API_URL.LOGIN_ACCOUNT, null, params);
};
