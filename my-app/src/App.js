import React, { Component } from "react";
import Login from "./Login"
import Profile from "./Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: "",
      profile: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  getGithubUser(username) {
    return fetch(`https://api.github.com/users/${username}`);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleLogin() {
    this.getGithubUser(this.state.username)
      .then(res => res.json())
      .then(data => this.setState({...this.state, loggedIn: true, profile: data}))
      .catch(err => this.setState({error: err}));
  }

  handleLogOut() {
    this.setState({loggedIn: false, username: "", profile: {}});
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <Profile
            {...this.state.profile}
            handleLogout={this.handleLogOut}
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