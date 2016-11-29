const Members = require('../controllers/members');
module.exports = function(app) {
  app.route('/api/members')
    .get(Members.fetch);
}