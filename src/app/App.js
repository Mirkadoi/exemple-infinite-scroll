import React, { useState } from 'react';
import RootRouter from '../router/RootRouter';
import styles from './App.module.scss';


function App() {
    const [isAuth, switchIsAuth] = useState(false);
    return (
        <div className={styles.app}>
            <RootRouter
                isAuth={isAuth}
                switchIsAuth={switchIsAuth}
            />
        </div>
    );
}

export default App;
