import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {connect} from 'react-redux';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {

    return (<div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer/>
            <div className={ 'app-wrapper-content' }>
                <Route path={ `/profile/:id?` }
                       render={ () => <ProfileContainer/> }/>
                <Route exact={ true } path={ `/dialogs/:id?` }
                       render={ () => <DialogsContainer/> }/>
                <Route path={ `/news` } component={ News }/>
                <Route path={ `/music` } component={ Music }/>
                <Route path={ `/settings` } component={ Settings }/>
                <Route path={ `/users` } render={ () => <UsersContainer/> }/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        sideBar: state.sideBar,
    };
};

export default connect(mapStateToProps, {})(App);

