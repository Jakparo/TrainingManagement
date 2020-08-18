import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';
import categoryRoute from './routes/categoryRoute';

const mongodbUrl = config.MONGODB_URL;
const app = express();

app.use(bodyParser.json());


mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log( err.reason ));


app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/categories", categoryRoute);


app.listen(config.PORT, ()=> {console.log(`Server started at http://localhost:${config.PORT}`)});