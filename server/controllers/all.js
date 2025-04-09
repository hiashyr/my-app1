const databaseConfig = require('../config/knexfile');
const knex = require('knex')(databaseConfig);

exports.all = (req, res) => {
  knex('list')
    .count('id as count')
    .then(result => {
      res.status(200).json({ count: result[0].count });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    });
};