import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navigation from './components/Navigation/Navigation';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import Setting from './components/Setting/Setting';
import {HashRouter, Route, withRouter} from 'react-router-dom';
import LoginPage from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const MainContainer = React.lazy(() => import('./components/Main/MainContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
            return <Preloader/>
        }
        return (

            <div className='container'>

                <HeaderContainer/>

                <Navigation state={this.props.state}/>

                <div className="app-wrapper-content">
                    <Route path='/main/:userId?' render={withSuspense(MainContainer)}
                    />
                    <Route path='/dialogs' render={withSuspense(Dialogs)}
                    />
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/contact' render={() => <Contact/>}/>
                    <Route path='/setting' render={() => <Setting/>}/>
                    <Route path='/users' render={withSuspense(UsersContainer)}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialize: state.app.initialize
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SamuraiJSApp = (props) => {
    return <HashRouter >
        <Provider store={store}>
            <AppContainer state = {store.getState()}/>
        </Provider>
    </HashRouter>
}

export default SamuraiJSApp