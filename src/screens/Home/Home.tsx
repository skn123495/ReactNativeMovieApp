import React, {useEffect, useState} from 'react';
import SafeAreaContainer from '@app/components/layout/safeAreaContainer';
import {View, Text, Image} from 'native-base';
import {ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, IMAGES, ROUTE_NAME} from '@app/constants';
import AppLoader from '@app/components/smallDesigns/appLoader';
import TrendingMovies from '@app/components/TrendingMovies/TrendingMovies';
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from '@app/Api/moviedb';
import MovieList from '@app/components/MovieList/MovieList';
import {navigate} from '@app/services/navigationService';

interface Movie {
  poster_path: string;
  // Add other properties of the Movie object here if available
  // For example:
  title: string;
  // Add other properties of the Movie object here if available
}

const Home = (props: any): JSX.Element => {
  const [trending, setTrending] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    console.log('got trending', data.results.length);
    if (data && data.results) setTrending(data.results);
    setLoading(false);
  };
  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    console.log('got upcoming', data.results.length);
    if (data && data.results) setUpcoming(data.results);
  };
  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    console.log('got top rated', data.results.length);
    if (data && data.results) setTopRated(data.results);
  };

  return (
    <>
      <SafeAreaContainer>
        <View style={{flex: 1, backgroundColor: COLORS._333333}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={IMAGES.ci_hamburger_md}
              alt="image"
              tintColor={COLORS.WHITE}
              style={{marginLeft: 10}}
            />
            <Text fontSize={'2xl'} fontWeight={'bold'} style={{color: '#fff'}}>
              <Text style={{color: '#eab308'}}>M</Text>ovies
            </Text>
            <TouchableOpacity
              onPress={() => navigate(ROUTE_NAME.SEARCH_SCREEN)}>
              <Image
                source={IMAGES.search}
                tintColor={COLORS.WHITE}
                style={{marginRight: 10}}
                alt="images"
              />
            </TouchableOpacity>
          </View>
          {loading ? (
            <AppLoader />
          ) : (
            <>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 10}}>
                {trending.length > 0 && <TrendingMovies data={trending} />}
                {upcoming.length > 0 && (
                  <MovieList title="Upcoming" data={upcoming} />
                )}
                {topRated.length > 0 && (
                  <MovieList title="Top Rated" data={topRated} />
                )}
              </ScrollView>
            </>
          )}
        </View>
      </SafeAreaContainer>
    </>
  );
};
export default React.memo(Home);
