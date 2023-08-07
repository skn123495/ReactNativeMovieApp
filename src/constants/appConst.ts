export const StorageConstants = {
  ENVIRONMENT: 'environment',
  USER_APP_STATE: 'userAppState',
  USER_PROFILE_DATA: 'userProfileData',
  USER_TOKENS: 'userToken',
  SWITCH_USER_DETAIL: 'switchUserDetail',
  EXPO_TOKEN: 'expoToken',
};

export const ENVIRONMENT = {
  DEV: 'dev',
  STAGE: 'stage',
  QA: 'qa',
  PROD: 'prod',
};

export const StoreConstants = {
  AUTH_STORE: 'authStore',
  CHAT_STORE: 'chatStore',
  LOADER_STORE: 'loaderStore',
  CHECK_USERNAME: 'checkUsername',
  VERIFY_OTP_STORE: 'verifyOtp',
  CHECK_PARENT_USERNAME: 'parentUserName',
  RESET_PASSWORD: 'RESET_PASSWORD',
  RESEND_CODE_STORE: 'resendCode',
  FORGOT_PASSWORD: 'forgotPassword',
  CHANGE_PASSWORD: 'changePassword',
  LOGOUT: 'logOut',
  EDITOR: 'editorStore',
  SEARCH_TAB: 'searchTopStore',
  REGISTER: 'userRegister',
  CREATE_COLLECTION: 'createCollection',
  COLLECTION_TOP_LISTS: 'collectionTopLists',
  USER_PROFILE: 'userProfileStore',
};

export const HttpStatusCode = {
  UNAUTHORISED: 401,
  SUCCESS_REQUEST: 200,
  SUCCESS_CODE_202: 202,
  SUCCESS_CODE_201: 201,
  SUCCESS_CODE_204: 204,
  UNAUTHORISED_400: 400,
  UNAUTHORISED_409: 409,
  SUCCESS_CODE_205: 205,
  SERVER_CODE_502: 502,
  DELETE_ACCOUNT: 404,
};

export const TIMEOUT_MS = 300000;
export const FONT_B64_PRE = 'data:application/font-woff;charset=utf-8;base64,';
