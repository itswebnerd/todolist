import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Routes from './routes/routes';
import history from './service/history';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
