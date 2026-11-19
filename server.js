import 'dotenv/config'

import express from 'express'
import movieRoutes from './routes/movieRoutes.js'
import searchRoutes from './routes/searchRoutes.js'

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json())

// app.use('/api/movies', movieRoutes);
app.use('/api', searchRoutes);
app.use('/api', movieRoutes);

app.get('/', (req,res) =>{
    res.send('hello world')
})

app.listen(port, () => {
    console.log('server is running on port: ' + port)
})