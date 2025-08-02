import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/LeaderBoard';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <h1>Intern Portal</h1>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <Dashboard />
          <Leaderboard />
        </>
      )}
    </div>
  );
}

export default App;
