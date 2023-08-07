import {
  CommonActions,
  createNavigationContainerRef,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
import {FixNum} from '@app/constants';

export const navigationRef =
  createNavigationContainerRef<ReactNavigation.RootParamList>();

export const getCurrentActiveRoute = (): string | undefined => {
  if (navigationRef.isReady()) {
    return navigationRef?.getCurrentRoute()?.name;
  } else return '';
};

export function navigate(name: string, params?: object) {
  if (navigationRef?.isReady()) {
    navigationRef?.dispatch(CommonActions.navigate(name, params));
  }
}

export function goBack() {
  if (navigationRef?.canGoBack()) {
    navigationRef?.goBack();
  }
}

export function reset(name: string) {
  navigationRef?.dispatch(
    CommonActions.reset({
      index: FixNum.CONST_VAL_0,
      routes: [{name}],
    }),
  );
}

export function push(name: string, params?: object) {
  navigationRef?.dispatch(StackActions.push(name, params));
}

export function replace(name: string, params?: object) {
  navigationRef?.dispatch(StackActions.replace(name, params));
}

export function popToTop() {
  navigationRef?.dispatch(StackActions.popToTop());
}

export function toggleDrawer() {
  navigationRef?.dispatch(DrawerActions.toggleDrawer());
}
