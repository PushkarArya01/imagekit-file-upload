import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import postRoutes from './routes/post.route.js'
app.use(express.json())


app.use('/api/post',postRoutes)

export default app