import 'dotenv/config';
const cors = require('cors');
const express = require('express');

const app = express();

// Application-Level Middleware

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to PortfolioCMS application.' });
});

const db = require('./src/models');
db.sequelize.sync();

// Routes
require('./src/routes/project')(app);

const PORT = process.env.PORT || 8080;
if (!process.env.DETA_RUNTIME) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
}

module.exports = app;
