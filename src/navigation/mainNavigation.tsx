import React from 'react';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '@app/services/navigationService';
import {ROUTE_NAME} from '@app/constants';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '@app/screens/Home/Home';
import Sidemenu from '@app/components/SideMenu/Sidemenu';
import MovieScreen from '@app/screens/MovieScreen';
import SearchScreen from '@app/screens/SearchScreen';
import PersonScreen from '@app/screens/PersonScreen';

interface IMainNavigation {
  initialRouteName: string;
}

const Stack = createStackNavigator<ParamListBase>();
const Drawer = createDrawerNavigator();
function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerContent={(props: any) => <Sidemenu {...props} />}
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
        drawerType: 'front',
      }}>
      <Drawer.Screen name={ROUTE_NAME.HOME_SCREEN} component={Home} />
      <Drawer.Screen name={ROUTE_NAME.MOVIE_SCREEN} component={MovieScreen} />
      <Drawer.Screen name={ROUTE_NAME.SEARCH_SCREEN} component={SearchScreen} />
      <Drawer.Screen name={ROUTE_NAME.PERSON_SCREEN} component={PersonScreen} />
    </Drawer.Navigator>
  );
}

const MainNavigation = (props: IMainNavigation): JSX.Element => {
  const {initialRouteName} = props;
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}>
        <Stack.Screen name={ROUTE_NAME.DRAWER_NAV} component={DrawerNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
