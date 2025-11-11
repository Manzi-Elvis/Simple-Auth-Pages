const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Mongo connected'))
.catch(err => console.error(err));
// Models
const User = require('./models/User');
const Book = require('./models/Book');
// Routes
const authRoutes = require('./routes/auth');
const bookRoutes = require('./routes/books');
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));