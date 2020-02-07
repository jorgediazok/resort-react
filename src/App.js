import React from 'react';
import './App.css';
import Home from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Rooms from './pages/Rooms';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Home />
      <SingleRoom />
      <Rooms />
      <Error />
    </>
  );
}

export default App;
