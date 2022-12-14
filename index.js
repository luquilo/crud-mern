import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoute from './routes/UserRoutes.js';


const app = express()
//found this on on stackoverflow
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database Connected...'))

//menggunakan middleware cors
app.use(cors())
//menggunakan express json agar bisa menerima data dalam format json
app.use(express.json())
app.use

app.listen(5000, ()=> console.log('server is up and running...') ) 
