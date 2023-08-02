require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');

const cors = require('cors');
const routes = require('./routes');
const error = require('./middlewares/erorr');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3001, DB_PORT = 'mongodb://127.0.0.1:27017/mestodb' } = process.env;
const app = express();

mongoose.connect(DB_PORT);

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(error);

app.listen(PORT, () => {
  console.log('Сервер запущен!');
});
