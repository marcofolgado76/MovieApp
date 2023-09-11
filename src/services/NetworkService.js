// NetworkService.js

// Function to make a GET request using async/await
export const getData = async (url, options = {}) => {
  try {
    // Send a GET request to the specified URL with the provided options
    const response = await fetch(url, options);

    // Check if the response status is not OK (HTTP status code other than 200)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response body as JSON and return the data
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error('Fetch error:', error);
    throw error; // Re-throw the error for handling at a higher level
  }
};
