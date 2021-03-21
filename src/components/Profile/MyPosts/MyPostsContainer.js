import {addPostCreator, deletePostCreator} from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {getPosts} from "../../../redux/selectors/profile-selectors";


const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => dispatch(addPostCreator(postText)),
        deletePost: (postId) => dispatch(deletePostCreator(postId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);