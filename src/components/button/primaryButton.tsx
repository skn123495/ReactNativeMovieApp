import React from 'react';
import {TouchableOpacity, Text, TextStyle, ViewStyle} from 'react-native';

interface IPrimaryButton {
  label: string;
  onPress?: (param: any) => void;
  buttonStyle?: ViewStyle;
  labelStyle?: TextStyle;
  disabled?: boolean;
}

const PrimaryButton = (props: IPrimaryButton): JSX.Element => {
  const {label, onPress, disabled, buttonStyle, labelStyle} = props;
  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(PrimaryButton);
