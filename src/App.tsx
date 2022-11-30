import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './routes';
import { AuthContext } from './context/AuthContext';

function App() {

  const { isAuthenticated, isLoading, userHasAuthenticated }: any = useContext(AuthContext);
  return (
    <React.Fragment>
      <Routes appProps={{ userHasAuthenticated, isAuthenticated }} />
    </React.Fragment>
  );
}

export default App;
