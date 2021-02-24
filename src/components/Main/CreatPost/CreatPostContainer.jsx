import CreatPost from './CreatPost';
import {addPostActionCreator } from '../../../redux/profileReducer';
import {connect} from 'react-redux';



let mapStateToProps = (state) => {
    
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
        addPosts: (inputPost) => {
            dispatch(addPostActionCreator(inputPost))
        }
    }
}


const CreatPostContainer = connect (mapStateToProps, mapDispatchToProps) (CreatPost)

export default CreatPostContainer;