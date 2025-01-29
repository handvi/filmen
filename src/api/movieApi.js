/* eslint-disable no-unused-vars */
import axios from 'axios';

const apiKey = '891769b';
const categories = ['series', 'action', 'movie', 'horror'];

export const fetchMoviesByCategory = async (category) => {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?s=${category}&apikey=${apiKey}`);
    return response.data.Search || [];
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};
