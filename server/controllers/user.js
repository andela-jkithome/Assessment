const request = require('superagent');

module.exports = {
  fetch: function (req, res) {
    console.log(req.body);
    request
     .get('https://api.github.com/users/' + req.body.username +'/events')
     .auth('jeremy.kithome@andela.com', 'jeregith1', {type:'auto'})
     .set('Accept', 'application/json')
     .end(function(err, response){
        if (err) {
          res.send({error: 'There was an error'})
        } else {
          var events;
          events = response.body.filter((event) => {
            if (event.type === "PushEvent") {
                return event;
            }
          });
          events = events.map((event) => {
            console.log(event);
            var repo = event.repo.name;
            var message = event.payload.commits[0].message;
            var sha = event.payload.commits[0].sha;
            return {
              repo: repo,
              message: message,
              sha: sha
            }
          })
          res.send(events);
        }
     })
  }
}