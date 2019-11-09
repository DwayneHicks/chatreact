import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside/Aside';


function App() {
  return (
    <div className="app app--chat" id="app">
      <div className="containerApp">
        <Aside />
        
      </div>
    </div>
  );
}

export default App;
