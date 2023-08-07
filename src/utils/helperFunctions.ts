import {KeyboardTypeOptions, Linking, Platform} from 'react-native';
import moment from 'moment-timezone';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ILoginResponse} from '../types/reducerTypes/authStoreTypes';
import {COLORS, GlobalVal, ROUTE_NAME} from '@app/constants';
import {FixedValue, IconType, appStateName} from '@app/constants/enum';
import {normalizeFont, scaleHeight} from './responsive';
import {StorageConstants} from '@app/constants/appConst';
import {reset} from '@app/services/navigationService';

export const handleOpenSettings = () => {
  Linking.openSettings();
};

// export const getUserTokenFromUserObj = (
//   userObject: ILoginResponse,
// ): IUserToken => {
//   return {
//     CognitoUser: userObject,
//     accessToken: userObject?.signInUserSession?.accessToken?.jwtToken,
//     idToken: userObject?.signInUserSession?.idToken?.jwtToken,
//     refreshToken: userObject?.signInUserSession?.refreshToken?.token,
//   };
// };

export const _InputType = {
  email: 'email',
  password: 'password',
  phoneNumber: 'phoneNumber',
};
export const numberToArray = (value?: number): number[] =>
  value ? [value] : [0];

export const allMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getNumericKeyPad = () =>
  Platform.OS === 'ios' ? 'number-pad' : 'numeric';

export const getKeyboardType = (inputType: string): KeyboardTypeOptions => {
  switch (inputType) {
    case _InputType.email:
      return 'email-address';
    case _InputType.phoneNumber:
      return getNumericKeyPad();
    case _InputType.password:
      return 'default';
    default:
      return 'email-address';
  }
};

export const storeDataLocally = async (
  key: string,
  value: object | string,
): Promise<void> => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getDataLocally = async (key: string) => {
  const result = await AsyncStorage.getItem(key);
  return result != null ? JSON.parse(result) : null;
};

export const removeDataFromLocally = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

export const calculateAgeFromDate = (dateString: string): number => {
  const today = new Date();
  const birthDateObj = new Date(dateString);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDiff = today.getMonth() - birthDateObj.getMonth();
  if (
    monthDiff < FixedValue.CONST_VAL_0 ||
    (monthDiff === FixedValue.CONST_VAL_0 &&
      today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }
  return age;
};

// export const saveAllUserDataWhileLogin = async (
//   userProfileData: IUserProfileData
// ): Promise<void> => {
//   await storeDataLocally(StorageConstants.USER_PROFILE_DATA, userProfileData);
//   await storeDataLocally(StorageConstants.SWITCH_USER_DETAIL, userProfileData);
//   await storeDataLocally(
//     StorageConstants.USER_APP_STATE,
//     appStateName.INSIDE_APP
//   );
// };

export const convertUTCToLocalTime = (dateString: string) => {
  let date = new Date(dateString);
  const milliseconds = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );
  return new Date(milliseconds);
};

//Format date
export const getDateTimeUtil = (date: string) => {
  return moment(new Date(date)).format('MMM DD, YYYY');
};
export const getDateTimeUtil2 = (date: string) => {
  return moment(new Date(date)).format('DD MMM, YYYY');
};
//format UTC time To LocalTime
export const formatUTCTimeToLocalTime = (
  date: string | Date,
  format: string,
) => {
  const givenDate = moment.utc(date);
  const userTimezone = moment.tz.guess();
  // convert the given date to the user's timezone
  const givenDateInUserTz = givenDate.tz(userTimezone);
  return givenDateInUserTz.format(format);
};

export const extractUrlPath = (str: string | undefined | null): string => {
  if (!str) {
    return '';
  }
  const match = str.split('.com/')[1].split('?')[0];
  return match ? match : '';
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const getFirstLetterOfString = (str: string): string => {
  return str.charAt(0).toUpperCase();
};

export const getInitials = (fullName: string): string => {
  const names = fullName.split(' ');
  const firstNameInitial = names[0].charAt(0);
  const lastNameInitial = names[names.length - 1].charAt(0);
  return `${firstNameInitial}${lastNameInitial}`;
};

// //check it is uncategorised top or not
// export const isUncategorizedOrNot = (name: string): boolean => {
//   return name?.toLocaleLowerCase() === TEXT.UNCATEGORIZED.toLocaleLowerCase();
// };

//show add collection Button if any top is selected
export const isAnyTopSelected = (element: any): boolean => {
  return element?.isSelected;
};

//show right side header button name on behalf of top select
export const getRightSideHeaderName = (element: any): boolean => {
  return element?.isSelected;
};

//seeAll button disabled if data is less than 10
export const seeAllButtonDisabled = (data: number): boolean => {
  return data < FixedValue.CONST_VAL_2;
};

//get colorstyle for see all
export const seeAllTextColor = (data: number): string => {
  return data > FixedValue.CONST_VAL_1
    ? COLORS.PRIMARY_BLUE
    : COLORS.LGHT_BLUE_01;
};

export const removeAllData = async (isNotNavigate?: boolean): Promise<void> => {
  const allKeys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(allKeys);
  await storeDataLocally(
    StorageConstants.USER_APP_STATE,
    appStateName.AUTHENTICATION,
  );
  if (!isNotNavigate) {
    reset(ROUTE_NAME.LOGIN_PAGE);
  }
};

//get days ago if creation date is more than 2 days ago
//otherwise show today or yesterday
export const getDaysAgo = (date: string) => {
  const now = moment.utc();
  const givenDate = moment.utc(date);
  const userTimezone = moment.tz.guess();
  // convert the given date to the user's timezone
  const givenDateInUserTz = givenDate.tz(userTimezone);
  if (now.diff(givenDateInUserTz, 'days') === FixedValue.CONST_VAL_0) {
    // date is today
    return 'Today';
  } else if (now.diff(givenDateInUserTz, 'days') === FixedValue.CONST_VAL_1) {
    // date is yesterday
    return 'Yesterday';
  } else if (now.diff(givenDateInUserTz, 'hours') < FixedValue.CONST_VAL_1) {
    // date is less than an hour ago
    const minutesAgo = now.diff(givenDateInUserTz, 'minutes');
    return `${minutesAgo} minutes ago`;
  } else if (now.diff(givenDateInUserTz, 'days') <= FixedValue.CONST_VAL_2) {
    // date is within last two days
    const daysAgo = now.diff(givenDateInUserTz, 'days');
    return `${daysAgo} days ago`;
  } else {
    return givenDateInUserTz.format('MMM D, YYYY');
  }
};

export const getGroupInitials = (groupName?: string): string => {
  const words = groupName?.split(' ');
  const initials = words?.map(word => word.charAt(0));
  return initials?.join('') ?? '';
};

export const _ToastHandler = (message: string, isSuccess: boolean): void => {
  return showMessage({
    message,
    backgroundColor: isSuccess ? COLORS._00B25B : COLORS.FF6666,
    color: COLORS.WHITE,
    style: {
      alignItems: GlobalVal.CENTER,
      elevation: FixedValue.CONST_VAL_3,
      shadowColor: isSuccess ? COLORS.DBF1E7 : COLORS.FF6666,
      shadowOffset: {
        width: FixedValue.CONST_VAL_0,
        height: FixedValue.CONST_VAL_5,
      },
      shadowOpacity: FixedValue.CONST_VAL_3,
    },
    titleStyle: {
      fontSize: normalizeFont(FixedValue.CONST_VAL_15),
      // fontFamily: FONT_NAMES.SF_REGULAR,
      lineHeight:
        Platform.OS === 'ios' && Platform.isPad
          ? scaleHeight(FixedValue.CONST_VAL_30)
          : undefined,
    },
    duration: FixedValue.CONST_VAL_5000,
    icon: isSuccess ? IconType.SUCCESS : IconType.FAILED,
  });
};

