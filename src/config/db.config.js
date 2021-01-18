module.exports = {
  HOST: 'localhost',
  USER: 'me',
  PASSWORD: 'souravinsights',
  DB: 'portfoliocms',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
