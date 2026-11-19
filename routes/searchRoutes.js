import express from 'express'

import { searchMovies } from '../controllers/searchController.js'

const router = express.Router();

router.get('/search', searchMovies)

export default router