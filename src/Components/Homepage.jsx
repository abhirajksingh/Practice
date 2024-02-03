import React from 'react';
import Chat from "./Chat";
import Social from "./Social";
import SendQuary from "./SendQuary";
import Header from './Header';

function Homepage() {
  return (
    <>
      <Header/>
      <Chat />
      <Social />
      <SendQuary />
    </>
  )
}

export default Homepage
