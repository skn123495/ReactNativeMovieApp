import React from 'react';
import {
  TouchableOpacity,
  ViewStyle,
  Image,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';

interface IImageButton {
  label: ImageSourcePropType;
  onPress?: (param: any) => void;
  buttonStyle?: ViewStyle;
  imgStyle?: ImageStyle;
  disabled?: boolean;
}

const ImageButton = (props: IImageButton): JSX.Element => {
  const {label, onPress, disabled, buttonStyle, imgStyle} = props;
  return (
    <TouchableOpacity
      style={buttonStyle}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}>
      <Image source={label} style={imgStyle} />
    </TouchableOpacity>
  );
};

export default React.memo(ImageButton);
