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
      forkedRepos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then(response => {
        if (!response.ok) {
          throw new Error("User fetch failed");
        }
        return response.json();
      });
  }

  getGitHubForkedRepos(username) {
    return fetch(`https://api.github.com/users/${username}/events`)
      .then(response => {
        if (!response.ok) {
          return Promise.reject('something went wrong!')
        }

        return response.json()

      })
      .then(data => data.filter(event => event.type === 'ForkEvent'))
      .catch(error => console.log('error is', error.message));
  }


  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleLogin() {
    return Promise.all([
      this.getGithubUser(this.state.username),
      this.getGitHubForkedRepos(this.state.username)
    ])
      .then(responses => {
        const [profile, forkedRepos] = responses;

        this.setState({
          loggedIn: true,
          profile,
          forkedRepos,
          error: false
        });
      })
      .catch(err => {
        this.setState({
          error: true
        });
      });
  }

  handleLogOut() {
    this.setState({
      loggedIn: false,
      username: "",
      profile: {},
      forkedRepos: []
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
