import About from './about'
import { connect } from 'react-redux'; 

const mSTP = state => {
    return {
        loggedIn: state.session.isAuthenticated,

    }
}

const mDTP = dispatch => {
    return {}
}

export default connect(mSTP, mDTP)(About);