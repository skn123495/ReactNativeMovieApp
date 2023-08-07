import * as yup from 'yup';
import {ERROR_MESSAGES} from './errorMessages';
// import Strings, {ValidationMessages} from './Strings';

export const Regx = {
  MOBILE_REGEX: /^[0]?[1-9]\d{9,10}$/,
  SPECIAL_CHAR: /[|#\\/~^:,;?!&%$@*+]/,
  ALPHA: /[a-zA-Z]/,
  ALPHA_START: /^[A-Z]/i,
  ALPHA_LOWER: /[a-z]/,
  ALPHA_CAP: /[A-Z]/,
  NUM: /[0-9]/,
  OTP: /[0-9]{6,}$/,
  FIRST_NAME: /^[a-zA-Z.]+( [A-Za-z]+)*$/,
  EMAIL:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const allMandatory = (value: any, ctx: any) => {
  console.info(value);
  const {parent} = ctx;
  let anyFilled = false;
  Object.values(parent).forEach(data => {
    if (Boolean(data)) {
      anyFilled = true;
    }
  });
  return anyFilled;
};

const REG_OBJ = {
  phone: yup
    .string()
    .required(ERROR_MESSAGES.MOBILE_REQUIRED)
    .matches(Regx.MOBILE_REGEX, {
      excludeEmptyString: true,
      message: ERROR_MESSAGES.INVALID_MOBILE,
    }),
};

export const mobileSchema = yup.object().shape(REG_OBJ);
export const otpSchema = yup.object().shape({
  otp: yup.string().required(ERROR_MESSAGES.OTP_REQUIRED),
});
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(ERROR_MESSAGES.REQUIRED_EMAIL)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: ERROR_MESSAGES.INVALID_EMAIL,
    }),
  password: yup.string().required(ERROR_MESSAGES.PASSWORD_REQUIRED),
});
