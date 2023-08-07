export interface IApiInfo {
  name: string;
  type: string;
  contType?: string;
}

export interface IActionType {
  type?: string;
  payload?: any;
}

export interface IErrorObject {
  msg?: string;
  code?: string;
  rejectedValue?: object;
  stackTrace?: string;
}

export interface IErrorResponse {
  data?: string;
  errors?: IErrorObject[];
  error?: boolean;
}