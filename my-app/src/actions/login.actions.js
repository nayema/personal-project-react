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
  fetch(`https://api.github.com/users/${getState().login.username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('User fetch failed');
      }
      return response.json();
    })
    .then(profile => dispatch(loginSucceeded(profile)))
    .catch(() => dispatch(loginErrored()));
};


