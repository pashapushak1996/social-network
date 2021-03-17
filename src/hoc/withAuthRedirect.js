import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import React from 'react'

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {

//HOC приймає компоненту і повертає іншу компоненту (контейнерну)

    class RedirectComponent extends React.Component {
        render() {
            return !this.props.isAuth ? <Redirect to={ `/login` }/> : <Component { ...this.props }/>;
        }
    }

    //Тут ми конектимо Компоненту до стору і беремо з стору значення isAuth

    const ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;


