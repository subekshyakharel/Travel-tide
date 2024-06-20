import axios from 'axios';

const foursquareApiKey = import.meta.env.VITE_FOURSQUARE_API_KEY;

const foursquare = axios.create({
  baseURL: 'https://api.foursquare.com/v3/places/',
  headers: {
    'Authorization': `Bearer ${foursquareApiKey}`
  }
});

export const getCityInfo = async (city) => {
  try {
    const response = await foursquare.get('search', {
      params: {
        near: city,
        limit: 10
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching city info:', error);
    return null;
  }
};
