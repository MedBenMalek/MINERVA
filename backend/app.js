const  express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const postRouter = require('./routes/posts');
const userRoutes = require("./routes/user");

const app = express();
mongoose.connect('mongodb+srv://root:lD4na479b7LxXpkD@cluster0-iv1ig.mongodb.net/freeStyle',  { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to database successfully');
  })
  .catch(() => {
    console.log('Unable to connected to database');
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/api/posts', postRouter);
app.use("/api/user", userRoutes);

module.exports = app;
