import React, { Component } from "react";
import Login from "./Login"
import Logout from "./Logout";
import ForkedRepoList from "./ForkedRepoList";
import PullRequestList from "./PullRequestList";

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
      .then(response => !response.ok ? Promise.reject('something went wrong!') : response.json())
      .then(forkedRepos => forkedRepos.filter(forkedRepo => forkedRepo.type === 'ForkEvent'))
      .catch(error => console.log('error is', error.message));
  }

  getGitHubPullRequests(username) {
    return fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr+created:>2018`)
      .then(response => !response.ok ? Promise.reject('something went wrong!') : response.json())
      .then(pullRequests => pullRequests.items)
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
      this.getGitHubForkedRepos(this.state.username),
      this.getGitHubPullRequests(this.state.username)
    ])
      .then(responses => {
        const [profile, forkedRepos, pullRequests] = responses;

        this.setState({
          loggedIn: true,
          profile,
          forkedRepos,
          pullRequests,
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
      forkedRepos: [],
      pullRequests: []
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <div>
            <Logout
              {...this.state.profile}
              handleLogout={this.handleLogOut}
            />
            <ForkedRepoList
              title="Forked Repos"
              forkedRepos={this.state.forkedRepos}
            />
            <PullRequestList
              title="Pull Requests"
              pullRequests={this.state.pullRequests}
            />
          </div>
        ) : (
          <Login
            handleChange={this.handleChange}
            handleLogin={this.handleLogin}
            username={this.state.username}
            error={this.state.error}
          />
        )}
      </div>
    );
  }
}
