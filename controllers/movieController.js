import { apiClient } from '../api/apiClient.js';

export const getMovieDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const response = await apiClient.get('/', { params: { i: id } });

    if (response.data.Response === 'False') {
      return res.status(404).json({ error: response.data.Error });
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching movie details:', error.message);
    res.status(500).json({ error: 'Failed to fetch movie details from OMDb' });
  }
};

// export default getMovieDetails;