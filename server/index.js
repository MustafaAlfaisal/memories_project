import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app = new express();


app.use(bodyParser.json( {limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded( {limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

const COONECTION_URL = 'mongodb+srv://mustafa_alfaisal:PRNJURQw26r3SqPV@cluster0.mrhsv1n.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(COONECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

