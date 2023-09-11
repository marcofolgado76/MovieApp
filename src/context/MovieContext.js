// MovieContext.js
import React, { createContext, useState } from 'react';

// Create a context
export const MovieContext = createContext();

// Movie context provider component
export const MovieContextProvider = ({ children }) => {
  // States to manage various movie-related context data
  const [sortType, setSortType] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  const [sortTypeShow, setSortTypeShow] = useState(false);
  const [sortBy, setSortBy] = useState('releaseDate');
  const [sortOrder, setSortOrder] = useState('descending');
  const [clearFiltersSearch, setClearFiltersSearch] = useState(false);

  // Function to update the sort type
  const updateSortType = (newSortType) => {
    setSortType(newSortType);
  };

  // Function to update whether the search component is shown
  const updateSearchShow = (newSearchShow) => {
    setSearchShow(newSearchShow);
  };

  // Function to update whether the sort type component is shown
  const updateSortTypeShow = (newSortTypeShow) => {
    setSortTypeShow(newSortTypeShow);
  };

  // Function to update the search text
  const updateSearchText = (newSearchText) => {
    setSearchText(newSearchText);
  };

  // Function to update whether filters should be cleared in the search
  const updateClearFiltersSearch = (newClearFiltersSearch) => {
    setClearFiltersSearch(newClearFiltersSearch);
  };

  // Function to update the sort by criteria
  const updateSortBy = (newSortBy) => {
    setSortBy(newSortBy);
  };

  // Function to update the sort order
  const updateSortOrder = (newSortOrder) => {
    setSortOrder(newSortOrder);
  };

  // Provide the context values to the wrapped components
  return (
    <MovieContext.Provider
      value={{
        sortType,
        updateSortType,
        searchShow,
        updateSearchShow,
        sortTypeShow,
        updateSortTypeShow,
        searchText,
        updateSearchText,
        clearFiltersSearch,
        updateClearFiltersSearch,
        sortBy,
        updateSortBy,
        sortOrder,
        updateSortOrder,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
