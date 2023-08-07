import {ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import React from 'react';
import {fallbackPersonImage, image185} from '@app/Api/moviedb';
import {Text, View} from 'native-base';
import {COLORS, ROUTE_NAME} from '@app/constants';
import {navigate} from '@app/services/navigationService';
var {width, height} = Dimensions.get('window');

interface Person {
  profile_path: string;
  character: string;
  original_name: string;
  // Add other properties of the Person object here if available
}

interface CastProps {
  cast: Person[];
  navigation: any; // Update this type with the correct navigation prop type
}

export default function Cast({cast, navigation}: CastProps): JSX.Element {
  return (
    <View my={5}>
      <Text fontSize={'lg'} mx={4} mb={5} color={COLORS.WHITE}>
        Top Cast
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person: any, index: any) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigate(ROUTE_NAME.PERSON_SCREEN, person)}
                style={{marginRight: 16, alignItems: 'center'}}>
                <View>
                  <Image
                    source={{
                      uri:
                        image185(person?.profile_path) || fallbackPersonImage,
                    }}
                    style={{width: 80, height: 120, borderRadius: 8}}
                  />
                </View>
                <Text color={COLORS.WHITE} fontSize={'xs'} mt={1}>
                  {person?.character.length > 10
                    ? person.character.slice(0, 10) + '...'
                    : person?.character}
                </Text>
                <Text fontSize={'xs'}>
                  {person?.original_name.length > 10
                    ? person.original_name.slice(0, 10) + '...'
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}
