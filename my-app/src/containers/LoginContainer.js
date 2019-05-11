import { connect } from "react-redux";
import {setUsername, login} from '../actions/login.actions'

import Login from '../components/Login'

const mapStateToProps = state => ({
  username: state.username,
  error: state.error
});

const mapDispatchToProps = {
  setUsername,
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)
