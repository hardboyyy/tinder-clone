import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// Components
import Header from './Components/Header'
import TinderCards from './Components/TinderCards'
import SwipeButtons from './Components/SwipeButtons';
import Chats from './Components/Chats'
import ChatScreen from './Components/ChatScreen'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Router>
        <Switch> {/* */}
        <Route path="/chat/:person" >
          <Header backButton="/chat" />
          <ChatScreen />
        </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      {/* Tinder cards */}
      {/* button below tinder cards */}

      {/* chat screens */}
      {/* individual screens */}
      </Router>
      
    </div>
  );
}

export default App;
