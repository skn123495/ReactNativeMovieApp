import {
  NavigationState,
  ParamListBase,
  Route,
  PartialRoute,
} from '@react-navigation/native';

export type PartialState<State extends NavigationState> = Partial<
  Omit<State, 'stale' | 'routes'>
> &
  Readonly<{
    stale?: true;
    routes: PartialRoute<Route<State['routeNames'][number]>>[];
  }>;

export type NavigationRoute<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = Route<Extract<RouteName, string>, ParamList[RouteName]> & {
  state?: NavigationState | PartialState<NavigationState>;
};

export type TabButtonType = {
  onPress: Function;
  onLongPress: Function;
  label: string;
  isFocused: boolean;
};
