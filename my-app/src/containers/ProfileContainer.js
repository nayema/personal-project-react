import { connect } from "react-redux";
import { logout } from '../actions/authentication.actions'

import Profile from '../components/Profile'

const mapStateToProps = state => ({
  name: state.authentication.profile.name,
  avatar: state.authentication.profile.avatar,
  forkedRepos: state.authentication.profile.forkedRepos
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
