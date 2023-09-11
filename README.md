# Moovie Application

Welcome to Moovie, your go-to movie tracking app! This README provides instructions on how to set up and run the Moovie application locally on your machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

- **Expo CLI**: Make sure you have Expo CLI installed on your computer. You see more informations on [docs.expo.dev](https://docs.expo.dev/get-started/installation/).

## Getting Started

Follow these steps to get the Moovie application up and running:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/marcofolgado76/MovieApp.git

2. **Navigate to the Project Directory**: Change your working directory to the cloned project folder:

    ```bash
   cd MovieApp

3. **Install Dependencies**: Install the project dependencies by running:

    ```bash
   npm install

3. **API Key Configuration**:
   The Moovie app requires an API key to fetch movie data from external sources, such as TMDb. To configure your own API key, follow these steps:
   
   - Navigate to the src/services/NetworkService.js file in your project.
   
   - In the NetworkService.js file, locate the token constant.
   
   - Replace the existing API key with your own API key.
   
   By following these steps, you can configure the Moovie app to use your API key for fetching movie data from external sources.
   

4. **Run the Application**: Start the development server by running:

    ```bash
      npx expo start

5. **View the Application**: To view the app, simply scan the QR Code with your phone or use an emulator.
   

**Usage**: Here's how you can use the Moovie application:
   
   
    -Watch the most popular and top rated movies.
   
    -Ascending and descending ratings and release date sorting.
   
    -Search for the name of the movie.
   
    -Clear all the searches and filters.
    
    -View additional information about each movie. 
   
    -At the bottom of the page, load more movies.
   
    -The app requires a connection at all times; there is no option to utilize it offline.


**Fork this repository**: 

   -Create a new branch for your feature or bug fix: git checkout -b feature/new-feature.

   -Make your changes and commit them: git commit -m "Add new feature".

   -Push to your forked repository: git push origin feature/new-feature.

   -Create a Pull Request on the original repository.

**Acknowledgments**: 
   Thanks to The Movie Database (TMDb) for providing the movie data API.
   Happy movie tracking! 🎥
