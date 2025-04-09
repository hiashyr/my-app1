const knex = require('knex');
const databaseConfig = require('../config/knexfile');

// Создаем экземпляр Knex с конфигурацией
const db = knex(databaseConfig);

exports.add = async (req, res) => {
  const { name, description, image_url } = req.body;
  
  try {
    await db('list').insert({ 
      name, 
      description, 
      image_url 
    });
    
    res.status(200).json({ message: 'Машина добавлена' });
  } catch (error) {
    console.error('Ошибка при добавлении машины:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};