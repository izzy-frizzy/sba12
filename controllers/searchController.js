import { apiClient } from '../api/apiClient.js';

export const searchMovies = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: 'Title query parameter is required' });
  }

  try {
    // the apikey param is added automatically by apiClient
    const response = await apiClient.get('/', { params: { s: title } });

    // OMDb returns HTTP 200 even for errors, so check the Response field
    if (response.data.Response === 'False') {
      return res.status(404).json({ error: response.data.Error });
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error searching movies:', error.message);
    res.status(500).json({ error: 'Failed to fetch movies from OMDb' });
  }
};

// export default searchMovies;