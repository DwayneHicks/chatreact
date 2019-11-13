import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Aside from './components/Aside/Aside';
import AsideNav from './components/AsideNav/AsideNav';
import Content from './components/Content/Content';
import AppError from './components/AppError/AppError';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="app app--chat" id="app">
        <div className="containerApp">
          <Route component={AppError} path='/index_errors'/>
          <div className="app__container">
            <AsideNav />
            <Aside />
            <Content />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
