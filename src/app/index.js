import React from 'react';

const App = ({loggedIn, login, logOut}) => (
    <header>
        <h1>APP</h1>
        <button onClick={() => loggedIn ? logOut() : login() }>Toggle Login State</button>
        {loggedIn ? <h2>LIN</h2> : <h2>LOUT</h2>}
    </header>
);

export default App;