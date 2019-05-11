import { connect } from "react-redux";

import App from '../components/App'

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

export default connect(mapStateToProps)(App)
