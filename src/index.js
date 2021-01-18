import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to PortfolioCMS application.' });
});

const db = require('./models');
db.sequelize.sync();

// Routes
require('./routes/project')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
