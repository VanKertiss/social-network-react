import {connect} from 'react-redux';
import {addMessageActionCreator} from '../../../redux/dialogsReducer';
import AddMessage from './AddMessage';
import {withAuthRedirect} from '../../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (inputText) => {
            dispatch(addMessageActionCreator(inputText));
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(AddMessage);