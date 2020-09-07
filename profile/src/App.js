import React from 'react';
import Profile from './profile_data';
import Header from './components/Headers';
import Body from './components/Body';
import './App.css';

function App() {
  return (
    <div className="document">
      <Header Profile={Profile}/>
      <Body Profile={Profile} />
    </div>
  );
}

export default App;
