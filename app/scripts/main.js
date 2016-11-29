const Users = React.createClass({
  getInitialState() {
    return {
      users: null,
      activeUser: null,
      commits: null
    }
  },

  componentDidMount() {
    fetch('http://localhost:3000/api/members', {
      method: 'GET'
    }).then(response => {
      return response.json()
    }).then(json => {
      this.setState({user: json});
    })
  },

  render() {
    return(
      <div>This is working as it should</div>
    )
  }
})

ReactDOM.render(<Users />, document.getElementById('content'));