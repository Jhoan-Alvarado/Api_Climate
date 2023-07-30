import express from'express';
import router from '../src/routes/routes.js'
const app = express()
    .use(express.json())
    .use(router)
export default app;



