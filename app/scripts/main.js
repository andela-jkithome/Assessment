const Users = React.createClass({
  getInitialState() {
    return {
      users: null,
      activeUser: null,
      commits: null,
      currentUser: null
    }
  },

  getMembers() {
    fetch('http://localhost:3000/api/members', {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({users: json});
    }).catch(err => {
      console.log('There was an error')
    })
  },

  getCommits() {
    var body = {username : this.state.currentUser};
    fetch('http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({commits: json});
    }).catch(err => {
      console.log('There was an error')
    })
  },

  setUser(e) {
    var currentUser = e.target.value;
    console.log(currentUser);
    this.setState({currentUser: currentUser})
  },

  render() {
    return(
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <p>ANDELA ORGANISATION USERS</p>
          <button onClick={this.getMembers}>Get Members</button>
          <select onChange={this.setUser} >
            <option>Select a user</option>
            {this.state.users && this.state.users.map(user => {
              return (
                <option name = {user} value={user} key={user}>{user}</option>
                )
            })}
          </select>
          <button onClick={this.getCommits}>Get Commits</button>
          {this.state.users && this.state.users.map(user => {
            return (
              <div key={user} style={{border: '3px solid black'}}>
                <p>{user}</p>
                {this.state.commits ?
                  <div>
                    {this.state.currentUser === user &&
                      this.state.commits.map(commit => {
                        return (
                          <p>Commit {commit.message} to {commit.repo}</p>
                        )
                      })
                  }
                  </div>
                : null
                 }
              </div>
            )
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    )
  }
})

ReactDOM.render(<Users />, document.getElementById('content'));