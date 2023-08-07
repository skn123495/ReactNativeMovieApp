// import {ISignUpResult} from 'amazon-cognito-identity-js';
// import {SignUpFields} from '../../hooks/componentHooks/useSignUpHooks';

export interface SuccessType {
  config: object;
  data: object;
  headers: object;
  request: object;
  status: number;
  statusText?: string;
}
export interface IProductListing {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
export interface ParentInfoEmail {
  email: string;
}
export interface IAvailable {
  available: boolean;
}
export interface SuccessDataType {
  available: IAvailable;
}

export interface ISuccessType {
  products: IProductListing[] | null;
  total: number;
  skip: number;
  limit: number;
}

export interface ILoginErrorResponse {
  name: string;
  code: string;
}

export interface IAuthStateType {
  userLogin: {
    isLoading: boolean;
    success: ILoginResponse | null;
    failed: string | null;
    status: string;
    userTokens: string | null;
  };
}

export interface ILoginResponse {
  Session: null;
  attributes: {
    birthdate: string;
    email: string;
    email_verified: boolean;
    phone_number: string;
    phone_number_verified: boolean;
    sub: string;
  };
  keyPrefix: string;
  userDataKey: string;
  username: string;
}

export interface ICountryType {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
}
export interface IAuthSignUp {
  // values: SignUpFields;
  selectedCountry: ICountryType;
  userAge: number;
  havePersonalEmail: boolean;
}

export interface ICheckUserNameResponse {
  data: {
    available: boolean;
  };
}

export interface IParentUsernameResponse {
  data: {
    userId: number;
    email: string;
  };
}
export interface SignUpAuthStateType {
  userSignUp: {
    isLoading: boolean;
    success: ISuccessType | null;
    failed: string | null;
    status: string;
  };
}
export interface VerifyOtpState {
  verifyOtp: {
    isLoading: boolean;
    success: ISuccessType | null;
    failed: string | null;
    status: string;
  };
  resendCode: {
    isLoading: boolean;
    success: ISuccessType | null;
    failed: string | null;
    status: string;
  };
  isLoaderMoving: boolean;
}

export interface IResetPasswordStateType {
  resetPassword: {
    isLoading: boolean;
    success: object | null;
    failed: string | null;
    status: string;
  };
  changePassword: {
    isLoading: boolean;
    success: object | null;
    failed: string | null;
    status: string;
  };
}
export interface ForgotPasswordState {
  forgotPassword: {
    isLoading: boolean;
    success: object | null;
    failed: string | null;
    status: string;
  };
}

export interface LogOutStateType {
  logout: {
    isLoading: boolean;
    success: ISuccessType | null;
    failed: string | null;
    status: string;
  };
  deleteAccount: {
    isLoading: boolean;
    status: string;
  };
}

export type IRegisterRequest = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  dob: string;
  countryCode: string;
  mobile: string;
  parentEmail: string;
  parentUsername: string;
};

export type IRegisterResponse = {
  data: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    dob: string;
    countryCode: string;
    mobile: string;
    role: string;
  };
};

export interface IResendResponse {
  CodeDeliveryDetails: {
    AttributeName: string;
    DeliveryMedium: string;
    Destination: string;
  };
}
