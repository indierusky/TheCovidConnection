import { connect } from 'react-redux';
import { fetchFavors, fetchFavorsForUser } from '../../actions/favor_actions';
import { updateFavor, deleteFavor } from '../../actions/favor_actions';
import NewsFeed from './newsfeed'
import {openModal, closeModal} from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  
  return {
    user_profile_id: ownProps.match.params.user_id,
    favors: state.entities.favors,
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    modal: state.ui.modal,

  };
};

const mDTP = dispatch => {
  return {
    fetchFavors: () => dispatch(fetchFavors()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchFavorsForUser: (user_id) => dispatch(fetchFavorsForUser(user_id)),
    updateFavor: (favor) => dispatch(updateFavor(favor)),
    deleteFavor: (favor_id) => dispatch(deleteFavor(favor_id))

  };
};


export default connect(mSTP, mDTP)(NewsFeed);


