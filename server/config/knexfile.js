module.exports = {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres', // Логин для подключения к БД
      password: '', // Пароль
      database: 'postgres' // Название БД
    },
    migrations: {
      directory: '../migrations'
    },
    seeds: {
      directory: '../seeds'
    }
  };