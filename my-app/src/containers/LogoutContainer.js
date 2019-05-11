import { connect } from "react-redux";
import { logout } from '../actions/authentication.actions'

import Logout from '../components/Logout'

const mapStateToProps = state => ({
  name: state.authentication.profile.name,
  avatar: state.authentication.profile.avatar
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
