import React, { Component } from "react";
import Login from "./Login"
import Profile from "./Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: "",
      profile: {},
      forkedRepos: [],
      pullRequests: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }

  getGithubEvents(username) {
    return fetch(`https://api.github.com/users/${username}/events`)
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleLogin() {
    this.getGithubUser(this.state.username)
      .then(res => res.json())
      .then(profile => this.setState({...this.state, loggedIn: true, profile}))
      .catch(err => this.setState({error: err}));
    this.getGithubEvents(this.state.username)
      .then(res => res.json())
      .then(events => {
        this.setState({
          forkedRepos: events.filter(event => event.type === "ForkEvent"),
          pullRequests: events.filter(event => event.type === "PullRequestEvent")
        })
      })
  }

  handleLogOut() {
    this.setState({
      loggedIn: false,
      username: "",
      profile: {},
      forkedRepos: [],
      pullRequests: []
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <Profile
            {...this.state.profile}
            handleLogout={this.handleLogOut}
            forkedRepos={this.state.forkedRepos}
            pullRequests={this.state.pullRequests}
          />
        ) : (
          <Login
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            username={this.state.username}
          />
        )}
      </div>
    );
  }
}