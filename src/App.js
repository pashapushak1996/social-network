import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {connect} from 'react-redux';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {

    return (<div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Route path={`/profile`}
                           render={() => <Profile/>}/>
                    <Route exact={true} path={`/dialogs/:id?`}
                           render={() => <DialogsContainer/>}/>
                    <Route path={`/news`} component={News}/>
                    <Route path={`/music`} component={Music}/>
                    <Route path={`/settings`} component={Settings}/>
                    <Route path={`/users`} render={() => <UsersContainer/>}/>
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

