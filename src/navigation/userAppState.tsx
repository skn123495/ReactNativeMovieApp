import React from 'react';
import {View} from 'react-native';
import {BASESTYLE, ROUTE_NAME} from '@app/constants';
import {getDataLocally} from '@app/utils/helperFunctions';
import {StorageConstants} from '@app/constants/appConst';
import {appStateName} from '@app/constants/enum';

interface IUserAppState {
  setInitialRouteName: Function;
}

const UserAppState = (
  props: React.PropsWithChildren<IUserAppState>,
): JSX.Element => {
  const {children, setInitialRouteName} = props;

  const userAppState = React.useCallback(async (): Promise<void> => {
    const userState = await getDataLocally(StorageConstants.USER_APP_STATE);
    switch (userState) {
      case appStateName.AUTHENTICATION:
        console.log('userAppState default AUTHENTICATION');
        setInitialRouteName(ROUTE_NAME.LOGIN_PAGE);
        break;
      case appStateName.INSIDE_APP:
        console.log('userAppState default INSIDE_APP');
        const result = await getDataLocally(StorageConstants.USER_TOKENS);
        setInitialRouteName(ROUTE_NAME.DRAWER_NAV);
        if (result != null) {
        }
        break;
      case appStateName.INITIAL:
      default:
        console.log('userAppState default');
        setInitialRouteName(ROUTE_NAME.LOGIN_PAGE);
        break;
    }
  }, []);

  React.useEffect((): void => {
    setInitialRouteName(ROUTE_NAME.DRAWER_NAV);
    // userAppState();
  }, []);

  return <View style={BASESTYLE.flex1}>{children}</View>;
};

export default UserAppState;
