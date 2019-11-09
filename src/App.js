import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside/Aside';
import AsideNav from './components/AsideNav/AsideNav';
import Content from './components/Content/Content';


function App() {
  return (
    <div className="app app--chat" id="app">
      <div className="containerApp">
        <div className="app__container">
          <AsideNav />
          <Aside />
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
