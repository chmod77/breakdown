import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userHasAuthenticated, setUserHasAuthenticated] = useState(false)
  return (
    <React.Fragment>
      <Routes appProps={{ userHasAuthenticated, isAuthenticated }} />
    </React.Fragment>
  );
}

export default App;
