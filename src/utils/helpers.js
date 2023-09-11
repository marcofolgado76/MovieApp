// Sort an array of objects by a specified property in ascending or descending order
export const sortArrayOfObjects = (moviesArray, sortBy, sortOrder = 'ascending') => {
  // Create a new array by copying the original one
  const sortedArray = [...moviesArray];

  sortedArray.sort((a, b) => {
    if (sortBy === 'releaseDate') {
      // Handle sorting by releaseDate (assuming it's a string)
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);

      // Compare dates based on sortOrder
      return sortOrder === 'ascending' ? dateA - dateB : dateB - dateA;
    } else if (sortBy === 'rating') {
      // Handle sorting by rating (assuming it's a numeric property)
      // Compare ratings based on sortOrder
      return sortOrder === 'ascending' ? a.vote_average - b.vote_average : b.vote_average - a.vote_average;
    }

    // Default to no sorting if the property is not recognized
    return 0;
  });

  // Return the new sorted array
  return sortedArray;
};

// Search movies by title in the given movies array
export const searchMovies = (movies, searchText) => {
  if (!searchText) {
    return movies; // If searchText is empty, return all movies
  }
  const searchTerm = searchText.toLowerCase();
  
  // Filter movies based on whether their title includes the searchTerm
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm)
  );
};
