import {Image, TouchableWithoutFeedback, Dimensions} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {image500} from '@app/Api/moviedb';
import {Text, View} from 'native-base';
import {COLORS, ROUTE_NAME} from '@app/constants';
import {navigate} from '@app/services/navigationService';

const {width, height} = Dimensions.get('window');

interface Movie {
  poster_path: string;
  // Add other properties of the Movie object here if available
}

interface TrendingMoviesProps {
  data: Movie[];
}

const TrendingMovies = ({data}: TrendingMoviesProps, props: any) => {
  const handleClick = (item: Movie) => {
    navigate(ROUTE_NAME.MOVIE_SCREEN, item);
  };

  return (
    <View mb={5}>
      <Text mb={5} mx={4} fontSize={'xl'} color={COLORS.WHITE}>
        Trending
      </Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
        firstItem={1}
        // loop={true}
        // inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};

interface MovieCardProps {
  item: Movie;
  handleClick: (item: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        // source={require('../assets/images/moviePoster1.png')}
        source={{uri: image500(item.poster_path)}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 10,
        }}
        className="rounded-3xl"
      />
    </TouchableWithoutFeedback>
  );
};

export default React.memo(TrendingMovies);
