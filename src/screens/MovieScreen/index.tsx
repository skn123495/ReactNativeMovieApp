import React, {useEffect, useState} from 'react';
import {TouchableOpacity, ScrollView, Platform} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View, Image} from 'native-base';
import {
  fallbackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
} from '@app/Api/moviedb';
import MovieList from '@app/components/MovieList/MovieList';
import AppLoader from '@app/components/smallDesigns/appLoader';
import Cast from '@app/components/Cast/Cast';
import {IMAGES} from '@app/constants';
import {styles} from './styles';

const MovieScreen: React.FC = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [movie, setMovie] = useState<any>({});
  const [cast, setCast] = useState<any[]>([]);
  const [similarMovies, setSimilarMovies] = useState<any[]>([]);
  const [isFavourite, toggleFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item?.id ?? 0);
    getMovieCredits(item?.id ?? 0);
    getSimilarMovies(item?.id ?? 0);
  }, [item]);

  const getMovieDetails = async (id: number) => {
    const data = await fetchMovieDetails(id);
    console.log('got movie details');
    setLoading(false);
    if (data) {
      setMovie({...movie, ...data});
    }
  };

  const getMovieCredits = async (id: number) => {
    const data = await fetchMovieCredits(id);
    console.log('got movie credits');
    if (data && data.cast) {
      setCast(data.cast);
    }
  };

  const getSimilarMovies = async (id: number) => {
    const data = await fetchSimilarMovies(id);
    console.log('got similar movies');
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      style={styles.container}>
      <View style={styles.movieContainer}>
        <SafeAreaView style={styles.safeArea}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={IMAGES.arrow_back}
              tintColor="white"
              style={styles.arrowBackIcon}
              alt="img"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            {/* <HeartIcon
              size={35}
              color={isFavourite ? theme.background : 'white'}
            /> */}
          </TouchableOpacity>
        </SafeAreaView>
        {loading ? (
          <AppLoader />
        ) : (
          <View>
            <Image
              source={{
                uri: image500(movie.poster_path) || fallbackMoviePoster,
              }}
              style={styles.moviePoster}
              alt="img"
            />
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              colors={[
                'transparent',
                'rgba(23, 23, 23, 0.8)',
                'rgba(23, 23, 23, 1)',
              ]}
              style={styles.gradient}>
              {/* <Text style={styles.buttonText}>Sign in with Facebook</Text> */}
            </LinearGradient>
          </View>
        )}
      </View>

      <View style={styles.movieDetailsContainer}>
        {/* title */}
        <Text fontSize="xl" style={styles.movieTitle}>
          {movie?.title}
        </Text>

        {/* status, release year, runtime */}
        {movie?.id ? (
          <Text mt={2} style={styles.movieStatus}>
            {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} •{' '}
            {movie?.runtime} min
          </Text>
        ) : null}

        {/* genres */}
        <View style={styles.genresContainer}>
          {movie?.genres?.map((genre: any, index: any) => {
            const showDot = index + 1 !== movie.genres.length;
            return (
              <Text key={index} style={styles.genreText}>
                {genre?.name} {showDot ? '•' : null}
              </Text>
            );
          })}
        </View>

        {/* description */}
        <Text fontSize="sm" style={styles.movieDescription}>
          {movie?.overview}
        </Text>
      </View>

      {/* cast */}
      {movie?.id && cast?.length > 0 && (
        <Cast navigation={navigation} cast={cast} />
      )}

      {/* similar movies section */}
      {movie?.id && similarMovies.length > 0 && (
        <MovieList
          title={'Similar Movies'}
          hideSeeAll={true}
          data={similarMovies}
        />
      )}
    </ScrollView>
  );
};
export default React.memo(MovieScreen);
