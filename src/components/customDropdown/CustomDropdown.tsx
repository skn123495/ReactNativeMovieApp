import {IMAGES} from '@app/constants';
import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import CustomModal from '../customModal';
import {Image, View, Text} from 'native-base';
import {styles} from './styles';

interface SelectOption {
  label: string;
  value: string;
}

interface CustomSelectProps {
  selectedValue: string;
  onValueChange: (itemValue: string) => void;
  placeholder?: string;
}

const CustomDropdown: React.FC<CustomSelectProps> = ({
  selectedValue,
  onValueChange,
  placeholder,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [service, setService] = useState(selectedValue);

  const services: SelectOption[] = [
    {label: 'Choose Service', value: ''},
    {label: 'UX Research', value: 'ux'},
    {label: 'Web Development', value: 'web'},
    {label: 'Cross Platform Development', value: 'cross'},
    {label: 'UI Designing', value: 'ui'},
    {label: 'Backend Development', value: 'backend'},
  ];

  const handleServiceChange = (itemValue: string) => {
    setService(itemValue);
    onValueChange(itemValue);
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View>
      <Text pl={0.5}>{placeholder || 'Select Value'}</Text>
      <TouchableOpacity
        onPress={() => setIsModalVisible(true)}
        style={styles.container}>
        <View style={styles.outerContain}>
          <View style={styles.innerContain}>
            {service !== '' && <View style={styles.circle} />}
            <Text>{service || `Select ${placeholder || ''}`}</Text>
          </View>
          <Image
            source={IMAGES.arrow_down}
            alt="image"
            style={styles.img}
          />
        </View>
      </TouchableOpacity>
      <CustomModal
        isModalVisible={isModalVisible}
        animationType="fade"
        setIsModalVisible={() => setIsModalVisible(!isModalVisible)}>
        {services?.map(serviceItem => (
          <TouchableOpacity
            key={serviceItem.value}
            onPress={() => handleServiceChange(serviceItem.value)}
            style={styles.modalItem}>
            <Text>{serviceItem.label}</Text>
            {/* {serviceItem.value === service && (
              <Image source={IMAGES.arrow_back} alt="image" />
            )} */}
          </TouchableOpacity>
        ))}
      </CustomModal>
    </View>
  );
};

export default CustomDropdown;
