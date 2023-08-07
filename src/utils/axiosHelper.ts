import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import NetInfo from '@react-native-community/netinfo';
import {getBaseUrl} from '@app/constants/environment';

interface IApiInfo {
  name: string;
  type: string;
  contType?: string;
}

const createAxiosConfig = async (apiInfo: IApiInfo, data: object | null) => {
  /** Get token from Asyncstorage */
  const idToken = 0;
  let contType = 'application/json;charset=utf-8';
  let obj: any = {};
  if (apiInfo.contType) {
    contType = apiInfo.contType;
  }
  const configObj = {
    method: apiInfo.type,
    baseURL: getBaseUrl,
    url: apiInfo.name,
    timeout: 30000,
    headers: {
      'Content-Type': contType,
      // "Authorization":""
    },
  };
  if (apiInfo.type !== 'GET') {
    obj = {...configObj, data};
  } else {
    obj = {...configObj};
  }
  if (idToken) {
    obj.headers.Authorization = 'Bearer ' + idToken;
  }
  return obj;
};

export const apiCall = async (
  apiInfo: IApiInfo,
  data: object | null,
  params: any | null,
): Promise<unknown> => {
  return new Promise(async (resolve, reject) => {
    const axiosObj: AxiosRequestConfig = await createAxiosConfig(apiInfo, data);
    if (params) {
      const queryStringArr = [];
      for (const key of Object.keys(params)) {
        queryStringArr.push(`${key}=${params[key]}`);
      }
      axiosObj.url = `${axiosObj.url}?${queryStringArr.join('&')}`;
    }
    const {isConnected} = await NetInfo.fetch();
    if (isConnected) {
      axios(axiosObj)
        .then((res: AxiosResponse) => {
          const base = res?.config?.baseURL;
          console.log('Axios url=', `${base}${res?.config?.url}`);
          resolve(res.data);
        })
        .catch(async (error: AxiosError) => {
          reject(error?.response?.data);
        });
    } else reject('No internet');
  });
};
