import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';
import {store} from '@app/redux/store';
import MainNavigation from '@app/navigation/mainNavigation';
import UserAppState from '@app/navigation/userAppState';
import {LogBox} from 'react-native';
import AppLoader from '@app/components/smallDesigns/appLoader';
import {COLORS} from '@app/constants';

const App = (): JSX.Element => {
  const [initialRouteName, setInitialRouteName] = React.useState<string | null>(
    null,
  );

  LogBox.ignoreLogs([
    'In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.',
  ]);
  const LoaderState: boolean = false;

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <UserAppState setInitialRouteName={setInitialRouteName}>
          {initialRouteName != null && (
            <>
              {LoaderState && <AppLoader backgroundColor={COLORS.modal} />}
              <MainNavigation initialRouteName={initialRouteName} />
            </>
          )}
        </UserAppState>
      </Provider>
    </NativeBaseProvider>
  );
};
export default App;
