import {addMessageCreator, changeMessageTextCreator} from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: () => {
            dispatch(addMessageCreator());
        },
        changeMessageValue: (value) => {
            dispatch(changeMessageTextCreator(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);