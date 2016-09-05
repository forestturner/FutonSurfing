
import { connect } from 'react-redux';
import EditFuton from './edit_futon';
import { updateFuton } from '../../actions/futon_actions';


const mapStateToProps = (state, ownProps) => {  
    const errors = state.session.errors;
    const currentUser = state.session.currentUser;
    const futonId = state.session.currentUser.id;
    const futon = state.futons[futonId] || {};
    return {
      errors,
      currentUser,
      futonId,
      futon
    };
  };

const mapDispatchToProps = (dispatch) => ({
  updateFuton: (id, futon) => dispatch(updateFuton(id, futon)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditFuton);
