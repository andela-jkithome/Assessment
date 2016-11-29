module.exports = function(app) {
  require('./members')(app);
  require('./user')(app)
}