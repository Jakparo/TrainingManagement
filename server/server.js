import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './config';
import userRoute from './routes/userRoute';
import categoryRoute from './routes/categoryRoute';
import courseRoute from './routes/courseRoute';
import topicRoute from './routes/topicRoute';

const mongodbUrl = config.MONGODB_URL;
const app = express();

app.use(bodyParser.json());


mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log( err.reason ));


app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/courses", courseRoute);  
app.use("/api/topics", topicRoute);   


app.listen(config.PORT, ()=> {console.log(`Server started at http://localhost:${config.PORT}`)});