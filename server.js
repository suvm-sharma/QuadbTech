const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
mongoose.set('strictQuery', false);

const app = express();

// __dirname will gave us the root folder detail
console.log(__dirname);
const publicPath = path.join(__dirname, 'public');

require('dotenv').config('.env');
const userRouter = require('./router/userRouter');

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DataBase is connected Successfully!!');
  })
  .catch(() => {
    console.error('Error getting from DataBase');
  });

const PORT = process.env.PORT || 1997;

app.use(express.json());
app.use('/user', userRouter);
app.use(express.static(publicPath)); // this is a middleware, this will load the static file

app.listen(PORT, () => {
  console.log(`port is running in ${PORT}`);
});
