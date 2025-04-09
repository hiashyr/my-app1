const databaseConfig = require('../config/knexfile');
const knex = require('knex')(databaseConfig);

exports.lim = (req, res) => {
    const offset = parseInt(req.query.offset) || 0;
    const limit = parseInt(req.query.limit) || 5;
  
    knex('list')
      .select('id', 'name', 'image_url', 'description') // Убедитесь, что возвращаются все поля
      .limit(limit)
      .offset(offset)
      .then(list => {
        res.status(200).json({ list });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Ошибка сервера' });
      });
  };