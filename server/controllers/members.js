const request = require('superagent');

module.exports = {
  fetch: function (req, res) {
    // console.log('Request made it thus far.')
    request
     .get('https://api.github.com/orgs/andela/members')
     .auth('jeremy.kithome@andela.com', 'jeregith1', {type:'auto'})
     .set('Accept', 'application/json')
     .end(function(err, response){
        if (err) {
          console.log(err);
          res.send({error: 'There was an error'})
        } else {
          var users;
          users = response.body.map((user) => {
            return user.login;
          })
          res.send(users);
        }
     })
  }
}