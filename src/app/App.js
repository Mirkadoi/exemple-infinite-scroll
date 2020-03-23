import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import logo from '../img/logo.svg';
import styles from './App.module.scss';

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Switch>
                    <Route path="/auth">
                        auth
                    </Route>
                    <Route path="/sum">
                        sum
                    </Route>
                    <Route path="/">
                        <header className={styles['app-header']}>
                            <img src={logo} className={styles['app-logo']} alt="logo" />
                            <p>
                                Кнопка <code><Link to="/about">about</Link></code> and save to reload.
                            </p>
                            <a
                                className={styles['app-link']}
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
