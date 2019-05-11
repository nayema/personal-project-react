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
  fetch(`https://api.github.com/users/${getState().authentication.username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User fetch failed');
      }
      return response.json();
    })
    .then(profile => dispatch(loginSucceeded({ name: profile.name, avatar: profile.avatar_url })))
    .catch(() => dispatch(loginErrored()));
};

export const logout = () => ({
  type: "LOGOUT_SUCCEEDED"
});
