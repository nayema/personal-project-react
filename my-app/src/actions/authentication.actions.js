export const loginStarted = () => ({
  type: "LOGIN_STARTED",
});

export const loginSucceeded = payload => ({
  type: "LOGIN_SUCCEEDED",
  payload
});

export const loginErrored = () => ({
  type: "LOGIN_ERRORED"
});

export const setUsername = payload => ({
  type: "SET_USERNAME",
  payload
});

export const login = () => (dispatch, getState) => {
  dispatch(loginStarted());
  const username = getState().authentication.username;
  Promise.all([
    getGithubUser(username),
    getGitHubForkedRepos(username)
  ])
    .then(responses => {
      const [profile, forkedRepos] = responses;
      dispatch(loginSucceeded({
        name: profile.name,
        avatar: profile.avatar_url,
        forkedRepos
      }))
    })
    .catch(() => dispatch(loginErrored()));
};

export const logout = () => ({
  type: "LOGOUT_SUCCEEDED"
});

const getGithubUser = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(response => !response.ok ? Promise.reject('something went wrong!') : response.json())
    .catch(error => console.log('error is', error.message));

};

const getGitHubForkedRepos = username => {
  return fetch(`https://api.github.com/users/${username}/events`)
    .then(response => !response.ok ? Promise.reject('something went wrong!') : response.json())
    .then(forkedRepos => forkedRepos.filter(forkedRepo => forkedRepo.type === 'ForkEvent'))
    .catch(error => console.log('error is', error.message));
};

// const getGitHubPullRequests = username => {
//   return fetch(`https://api.github.com/search/issues?q=author:${username}+type:pr+created:>2018`)
//     .then(response => !response.ok ? Promise.reject('something went wrong!') : response.json())
//     .then(pullRequests => pullRequests.items)
//     .catch(error => console.log('error is', error.message));
// };
