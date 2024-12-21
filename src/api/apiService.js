import axios from 'axios';

// Base URL for the TVMaze API
const BASE_URL = 'https://api.tvmaze.com';

/**
 * Fetch all shows from the API.
 * @returns {Promise} - Resolves with the list of all shows.
 */
export const fetchAllShows = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/search/shows?q=all`);
    return response.data; // Array of shows
  } catch (error) {
    console.error('Error fetching all shows:', error);
    throw error;
  }
};

/**
 * Search for shows based on a query.
 * @param {string} searchTerm - The search term entered by the user.
 * @returns {Promise} - Resolves with the list of matching shows.
 */
export const searchShows = async (searchTerm) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/shows?q=${searchTerm}`);
    return response.data; // Array of matching shows
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
};
