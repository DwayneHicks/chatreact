import React from 'react';

import Header from '../Header/Header';
import ChatInput from '../ChatInput/ChatInput';
import ChatWindow from '../ChatWindow/ChatWindow';
import ChatWindowText from '../ChatWindowText/ChatWindowText';
import ChatWindowAnswer from '../ChatWindowAnswer/ChatWindowAnswer';
import First from '../First/First';
import {BrowserRouter, Route} from "react-router-dom";

function Content() {
  return (
    <BrowserRouter>
    <div className="app__asideChatWindow asideChatWindow">
      <Header />
      <Route component={ChatWindow} path='/index'/>
      <Route component={First} exact path='/'/>
      <Route component={ChatWindowText} path='/index_2'/>
      <Route component={ChatWindowAnswer} path='/index_3'/>
      <ChatInput />
    </div>
    </BrowserRouter>
  )
}

export default Content;