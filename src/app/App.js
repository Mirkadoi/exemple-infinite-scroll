import React, { useState } from 'react';
import RootRouter from '../router/RootRouter';


function App() {
    const tokenIsTrue = !!localStorage.getItem('token');
    const [isAuth, switchIsAuth] = useState(tokenIsTrue);
    return (
        <RootRouter
            isAuth={isAuth}
            switchIsAuth={switchIsAuth}
        />
    );
}

export default App;
