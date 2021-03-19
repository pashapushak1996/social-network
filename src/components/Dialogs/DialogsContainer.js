import {addMessageCreator} from '../../redux/reducers/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddMessage: (message) => {
            dispatch(addMessageCreator(message));
        },
    };
};

const componentWithAuthRedirect = withAuthRedirect(Dialogs);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);