import React from 'react';
import Login from "../containers/LoginContainer"
import Logout from "../containers/LogoutContainer";

const App = ({ loggedIn }) => (
  <div>
    {!loggedIn ? <Login/> : <Logout/>}
  </div>
);

export default App;

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//       username: '',
//       profile: {},
//       forkedRepos: [],
//       pullRequests: []
//     };
//
//     this.setUsername = this.setUsername.bind(this);
//     this.authentication = this.authentication.bind(this);
//     this.handleLogOut = this.handleLogOut.bind(this);
//   }
//
//   getGithubUser(username) {
//     return fetch(`https://api.github.com/users/${username}`)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('User fetch failed');
//         }
//         return response.json();
//       });
//   }
//
//   getGitHubForkedRepos(username) {
//     return fetch(`https://api.github.com/users/${username}/events`)
//       .then(response => !response.ok ? Promise.reject('something went wrong!') : response.json())
//       .then(forkedRepos => forkedRepos.filter(forkedRepo => forkedRepo.type === 'ForkEvent'))
//       .catch(error => console.log('error is', error.message));
//   }
//
//   getGitHubPullRequests(username) {
//     return fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr+created:>2018`)
//       .then(response => !response.ok ? Promise.reject('something went wrong!') : response.json())
//       .then(pullRequests => pullRequests.items)
//       .catch(error => console.log('error is', error.message));
//   }
//
//
//   setUsername(e) {
//     this.setState({
//       username: e.target.value
//     });
//   }
//
//   authentication() {
//     return Promise.all([
//       this.getGithubUser(this.state.username),
//       this.getGitHubForkedRepos(this.state.username),
//       this.getGitHubPullRequests(this.state.username)
//     ])
//       .then(responses => {
//         const [profile, forkedRepos, pullRequests] = responses;
//
//         this.setState({
//           loggedIn: true,
//           profile,
//           forkedRepos,
//           pullRequests,
//           error: false
//         });
//       })
//       .catch(err => {
//         this.setState({
//           error: true
//         });
//       });
//   }
//
//   handleLogOut() {
//     this.setState({
//       loggedIn: false,
//       username: '',
//       profile: {},
//       forkedRepos: [],
//       pullRequests: []
//     });
//   }
//
//   render() {
//     return (
//       <div className='App'>
//         {this.state.loggedIn ? (
//           <Profile
//             profile={this.state.profile}
//             handleLogOut={this.handleLogOut}
//             forkedRepos={this.state.forkedRepos}
//             pullRequests={this.state.pullRequests}
//           />
//         ) : (
//           <Login
//             setUsername={this.setUsername}
//             authentication={this.authentication}
//             username={this.state.username}
//             error={this.state.error}
//           />
//         )}
//       </div>
//     );
//   }
// }
