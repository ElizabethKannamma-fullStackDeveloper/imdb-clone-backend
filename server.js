const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes=require("./routes/auth")
const movieRoutes = require('./routes/movies');
const actorRoutes = require('./routes/actors');
const producerRoutes = require('./routes/producers');

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(`${process.env.MONGODB_URL}${process.env.DB_NAME}`);

app.use('/auth',authRoutes );
app.use('/api/movies', movieRoutes);
app.use('/api/actors', actorRoutes);
app.use('/api/producers', producerRoutes);

app.listen(process.env.PORT, () => {
  console.log('server listening on port ' + process.env.PORT);
});
