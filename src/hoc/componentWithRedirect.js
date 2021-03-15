import {Redirect} from "react-router-dom";

const componentWithRedirect = (Component) => {
debugger;
    return (props) =>
    {
        return !props.isAuth ? <Redirect to={ `/login` }/> : <Component { ...props }/>}
};


export default componentWithRedirect;
