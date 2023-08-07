import React from 'react';
import {Input} from 'native-base';
import {COLORS, FixNum, Percentage} from '@app/constants';
import {Text} from 'react-native';
import {scaleHeight, scaler} from '@app/utils/responsive';
import {commonViewStyle} from '../commonView/commonViewStyle';

interface IPrimaryInput {
  value: string;
  onChangeText: (val: string) => void;
  onBlur: (val: any) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
  error: string | undefined;
}

const PrimaryInput = (props: IPrimaryInput): JSX.Element => {
  return (
    <>
      <Input
        borderColor={props.error ? COLORS.colorRed : COLORS._ACB0B8}
        minHeight={scaler(FixNum.CONST_VAL_24)}
        value={props.value}
        placeholder={props.placeholder}
        w={Percentage.PRECENT_100}
        onChangeText={props.onChangeText}
        onBlur={props.onBlur}
        underlineColorAndroid={COLORS.clear}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        placeholderTextColor={props.placeholderTextColor}
        leftElement={props.leftElement}
        rightElement={props.rightElement}
        fontSize={FixNum.CONST_VAL_15}
        color={COLORS._333333}
        padding={FixNum.CONST_VAL_11}
        borderRadius={scaleHeight(FixNum.CONST_VAL_4)}
      />
      {props.error && (
        <Text style={commonViewStyle.errMessage}>{props.error}</Text>
      )}
    </>
  );
};
export default React.memo(PrimaryInput);
