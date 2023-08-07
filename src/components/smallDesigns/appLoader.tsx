import {COLORS, GlobalVal} from '@app/constants';
import React from 'react';
import {View, ActivityIndicator, ViewStyle} from 'react-native';
import styles from './smallDesignStyle';

interface IAppLoader {
  backgroundColor?: string;
  loaderStyle?: ViewStyle;
}

const AppLoader = (props: IAppLoader): JSX.Element => {
  const {backgroundColor, loaderStyle} = props;
  return (
    <View style={[styles.loaderView, {backgroundColor}, loaderStyle]}>
      <ActivityIndicator size={GlobalVal.LARGE} color={COLORS.PRIMARY_BLUE} />
    </View>
  );
};

export default React.memo(AppLoader);
