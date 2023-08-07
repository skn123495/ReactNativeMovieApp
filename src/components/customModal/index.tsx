import React from 'react';
import {View, Modal, ScrollView, Pressable} from 'react-native';
import styles from './styles';

const CustomModal = (props: any): JSX.Element => {
  const {
    children,
    isModalVisible,
    setIsModalVisible,
    modalStyle,
    animationType,
  } = props;
  return (
    <Modal
      transparent={true}
      animationType={animationType || 'slide'}
      visible={isModalVisible}>
      <Pressable style={[styles.modalContainer]} onPress={setIsModalVisible}>
        <View style={[styles.boxContainer, modalStyle]}>
          <ScrollView>{children}</ScrollView>
        </View>
      </Pressable>
    </Modal>
  );
};

export default React.memo(CustomModal);
