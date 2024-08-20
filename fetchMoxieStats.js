import axios from 'axios';

const fetchMoxieStats = async (userId) => {
  try {
    const response = await axios.get(https://api.moxie.com/stats/${userId}); // Replace with actual API endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching Moxie stats:', error);
    return null;
  }
};