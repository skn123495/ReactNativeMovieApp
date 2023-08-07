import { BASESTYLE } from '@app/constants';
import { edges } from '@app/constants/enum';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaViewProps} from 'react-native-safe-area-context';

interface ISafeAreaProps {
  children: React.ReactNode;
  SafeAreaProps?: SafeAreaViewProps;
}

const styles = StyleSheet.create({
  viewStyle: {
    ...BASESTYLE.flex1,
  },
});

const SafeAreaContainer = (props: ISafeAreaProps): JSX.Element => {
  const {children, SafeAreaProps} = props;

  return (
    <SafeAreaView
      edges={[edges.TOP, edges.RIGHT, edges.LEFT]}
        style={styles.viewStyle}
      {...SafeAreaProps}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
