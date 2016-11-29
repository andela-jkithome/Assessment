const User = require('../controllers/user');
module.exports = function(app) {
  app.route('/api/user')
    .get(User.fetch);
}