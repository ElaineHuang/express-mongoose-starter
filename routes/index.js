const UserController = require('../controllers/users_controller');

module.exports = (app) => {
  app.post('/api/users', UserController.create);
  app.put('/api/users/:id', UserController.edit);
  app.delete('/api/users/:id', UserController.delete);
  app.get('/api/users', UserController.index);
  app.get('/api/users/:id', UserController.get);
};
