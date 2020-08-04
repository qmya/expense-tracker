import React from 'react';
import Header from './components/Header/Header.js';
import Balance from './components/Balance/Balance.js';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
      </div>

    </div>
  );
}

export default App;
