exports.seed = async function (knex) {
  await knex('list').del(); // Удаляем старые данные

  await knex('list').insert([
    { name: 'Tesla Model S', image_url: 'https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Электромобиль премиум-класса' },
    { name: 'Ford Mustang', image_url: 'https://images.unsplash.com/photo-1625231334168-35067f8853ed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Легендарный muscle car' },
    { name: 'Toyota Prius', image_url: 'https://images.unsplash.com/photo-1611580568467-a8e2bb344bbf?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Гибридный автомобиль' },
  ]);
};