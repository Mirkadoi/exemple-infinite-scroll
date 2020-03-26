import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../page/main/Main';
import Calculator from '../page/calculator/Calculator';
import ProtectedRouter from './ProtectedRouter';

const RootRouter = ({ isAuth, switchIsAuth }) => (
    <Router>
        <Switch>
            <Route
                exact
                path="/"
                render={() => <Main isAuth={isAuth} switchIsAuth={switchIsAuth}/>}
            />
            <ProtectedRouter
                path="/calculator"
                component={Calculator}
                isAuth={isAuth}
            />
            <Route
                path="*"
                component={Main}
            />
        </Switch>
    </Router>
);

RootRouter.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    switchIsAuth: PropTypes.func.isRequired,
};

export default RootRouter;
