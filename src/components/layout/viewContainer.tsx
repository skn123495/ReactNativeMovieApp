import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {BASESTYLE} from '@app/constants';

const ViewContainer = (props: PropsWithChildren) => {
  const {children} = props;

  return <View style={BASESTYLE.flex1}>{children}</View>;
};

export default ViewContainer;
