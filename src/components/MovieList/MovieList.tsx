import {
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image185} from '@app/Api/moviedb';
import {Text, View} from 'native-base';
import {COLORS, ROUTE_NAME} from '@app/constants';
import {navigate} from '@app/services/navigationService';

const {width, height} = Dimensions.get('window');

interface Movie {
  title: string;
  poster_path: string;
  // Add other properties of the Movie object here if available
}

interface MovieListProps {
  title: string;
  hideSeeAll?: boolean;
  data: Movie[];
}

export default function MovieList({
  title,
  hideSeeAll,
  data,
}: MovieListProps): JSX.Element {
  const navigation = useNavigation();

  return (
    <View mb={5}>
      <View
        mx={4}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text color={COLORS.white} fontSize={'lg'}>
          {title}
        </Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text color={COLORS.moviePri} fontSize={'lg'}>
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data.map((item: any, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              style={{borderRadius: 10}}
              onPress={() => navigate(ROUTE_NAME.MOVIE_SCREEN, item)}>
              <View mr={4}>
                <Image
                  source={{
                    uri: image185(item.poster_path) || fallbackMoviePoster,
                  }}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 10,
                  }}
                />
                <Text ml={1} color={COLORS.WHITE}>
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
