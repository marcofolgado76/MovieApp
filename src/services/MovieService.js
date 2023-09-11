// MovieService.js

// Import the getData function from NetworkService
import { getData } from './NetworkService';

// Define the authentication token for API requests
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTcyNDFmNjdhMjg3MDgzN2VmYmFiNjYyMjZmMzUxZCIsInN1YiI6IjY0ZmNlOGE2NjY0NjlhMDBjNjdiNDZlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YsA5gjoomv_KSTVbYd85Qymqo429qunXID1FjvkNZfE'; // Replace with your actual API token

// Define the options specific to this GET request
const getOptions = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
};

// Function to make a GET request using async/await to fetch movies
export const getMovies = async (type, page) => {
  try {
    // Define the URL for the movies API endpoint based on the 'type' parameter
    let url = "";
    if (type === "toprated") {
      url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=" + page;
    } else if (type === "popular") {
      url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=" + page;
    }

    // Make the GET request to fetch movie data
    const data = await getData(url, getOptions);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
