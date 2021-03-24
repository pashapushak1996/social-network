import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import {connect} from 'react-redux';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {initializeApp} from "./redux/reducers/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import MusicContainer from "./components/Music/MusicContainer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (<div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={ 'app-wrapper-content' }>
                    <Route path={ `/profile/:id?` }
                           render={ () => <ProfileContainer/> }/>
                    <Route exact={ true } path={ `/dialogs/:id?` }
                           render={ () => <DialogsContainer/> }/>
                    <Route path={ `/news` } component={ News }/>
                    <Route path={ `/music` } render={ () => <MusicContainer/> }/>
                    <Route path={ `/users` } render={ () => <UsersContainer/> }/>
                    <Route path={ `/login` } render={ () => <Login/> }/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar,
        initialized: state.app.initialized
    };
};

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter)(App);

