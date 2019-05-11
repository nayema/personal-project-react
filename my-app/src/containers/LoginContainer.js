import { connect } from "react-redux";
import { setUsername, login } from '../actions/authentication.actions'

import Login from '../components/Login'

const mapStateToProps = state => ({
  username: state.authentication.username,
  error: state.authentication.error
});

const mapDispatchToProps = {
  setUsername,
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
