import React from 'react';
import './App.css';
import UserPage from './components/UserPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> User List App</h1>
      </header>
      <main>
        <UserPage />
      </main>
    </div>
  );
}

export default App;
