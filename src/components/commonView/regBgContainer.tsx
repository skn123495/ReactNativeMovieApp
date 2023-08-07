import React from 'react';
import ViewContainer from '../layout/viewContainer';
import {commonViewStyle} from './commonViewStyle';
import SafeAreaContainer from '../layout/safeAreaContainer';
import {Image, Text, View} from 'react-native';
import {IMAGES} from '@app/constants';

interface IRegisterBgContainer {
  children: React.ReactNode;
  title?: string;
  description?: string;
  descriptionTwo?: string;
}

const RegisterBgContainer = (props: IRegisterBgContainer): JSX.Element => {
  const {children, title, description, descriptionTwo} = props;
  return (
    <ViewContainer>
      <SafeAreaContainer>
        <View style={commonViewStyle.regBgView}>
          <View style={commonViewStyle.languageContain}>
            <Text>English</Text>
            <Text>日本語</Text>
          </View>
          <Image source={IMAGES.logo} style={commonViewStyle.imgLogo} />
          <Text style={commonViewStyle.titleText}>{title}</Text>
          <Text style={commonViewStyle.descriptionText}>{description}</Text>
          <Text style={commonViewStyle.descriptionText}>{descriptionTwo}</Text>
          <View style={commonViewStyle.regBgContentView}>{children}</View>
        </View>
      </SafeAreaContainer>
    </ViewContainer>
  );
};

export default React.memo(RegisterBgContainer);
