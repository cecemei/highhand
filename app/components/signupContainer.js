import {connect} from 'react-redux';
import {signup} from '../actions/session_actions';
import SignUp from './signup';

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user))
});



export default connect(null, mapDispatchToProps)(SignUp);
