// Import the required modules and constants
import {apiBaseUrl, apiKey} from '@app/constants/environment';
import axios, {AxiosResponse} from 'axios';

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMoviesEndpoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

// Define endpoints with dynamic parameters for movie and person data
const movieDetailsEndpoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndpoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndpoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;
const personDetailsEndpoint = (id: number) =>
  `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const personMoviesEndpoint = (id: number) =>
  `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;

// Functions to get images of different widths, used to improve loading times
export const image500 = (posterPath: string | null) =>
  posterPath ? 'https://image.tmdb.org/t/p/w500' + posterPath : null;
export const image342 = (posterPath: string | null) =>
  posterPath ? 'https://image.tmdb.org/t/p/w342' + posterPath : null;
export const image185 = (posterPath: string | null) =>
  posterPath ? 'https://image.tmdb.org/t/p/w185' + posterPath : null;

// Fallback images in case the actual image is not available
export const fallbackMoviePoster =
  'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg';
export const fallbackPersonImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU';

// Generic function for making API calls with error handling
const apiCall = async <T,>(endpoint: string, params?: any): Promise<T> => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params ? params : {}, // Optional parameters passed to the API call
  };

  try {
    // Make the API call using Axios and wait for the response
    const response: AxiosResponse<T> = await axios.request(options);
    // Return the response data
    return response.data;
  } catch (error) {
    // If there's an error, log it and return an empty object as a fallback
    console.log('error: ', error);
    return {} as T;
  }
};

// Home screen APIs
export const fetchTrendingMovies = (): Promise<any> => {
  return apiCall<any>(trendingMoviesEndpoint);
};

export const fetchUpcomingMovies = (): Promise<any> => {
  return apiCall<any>(upcomingMoviesEndpoint);
};

export const fetchTopRatedMovies = (): Promise<any> => {
  return apiCall<any>(topRatedMoviesEndpoint);
};

// Movie screen APIs
export const fetchMovieDetails = (id: number): Promise<any> => {
  return apiCall<any>(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = (movieId: number): Promise<any> => {
  return apiCall<any>(movieCreditsEndpoint(movieId));
};

export const fetchSimilarMovies = (movieId: number): Promise<any> => {
  return apiCall<any>(similarMoviesEndpoint(movieId));
};

// Person screen APIs
export const fetchPersonDetails = (personId: number): Promise<any> => {
  return apiCall<any>(personDetailsEndpoint(personId));
};

export const fetchPersonMovies = (personId: number): Promise<any> => {
  return apiCall<any>(personMoviesEndpoint(personId));
};

// Search screen API
export const searchMovies = (params: any): Promise<any> => {
  return apiCall<any>(searchMoviesEndpoint, params); // The `params` object contains the search query and other optional parameters
};
