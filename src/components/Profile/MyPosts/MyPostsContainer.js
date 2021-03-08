import {addPostCreator, changePostTextCreator, deletePostCreator} from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostMessage,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostCreator()),
        updatePostText: (value) => dispatch(changePostTextCreator(value)),
        deletePost: (postId) => dispatch(deletePostCreator(postId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);