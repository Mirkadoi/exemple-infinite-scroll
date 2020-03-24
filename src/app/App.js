import React, { useState } from 'react';
import RootRouter from '../router/RootRouter';


function App() {
    const [isAuth, switchIsAuth] = useState(false);
    return (
        <RootRouter
            isAuth={isAuth}
            switchIsAuth={switchIsAuth}
        />
    );
}

export default App;
