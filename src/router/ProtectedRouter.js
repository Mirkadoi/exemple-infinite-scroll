import React from 'react';
import {
    Redirect,
    Route,
} from 'react-router-dom';
import PropTypes from 'prop-types';


const ProtectedRouter = ({ component: Component, ...rest }) => {
    const { isAuth } = rest;
    return (
        <Route
            {...rest}
            render={({ location }) => (isAuth ? (
                <Component />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location },
                    }}
                />
            ))}
        />
    );
};

ProtectedRouter.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
};

export default ProtectedRouter;
