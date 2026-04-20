const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

