import {addMessageCreator, changeMessageTextCreator} from '../../redux/reducers/dialogs-reducer';
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
        onAddMessage: () => {
            dispatch(addMessageCreator());
        },
        changeMessageValue: (value) => {
            dispatch(changeMessageTextCreator(value));
        },
    };
};

const componentWithAuthRedirect = withAuthRedirect(Dialogs);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs);