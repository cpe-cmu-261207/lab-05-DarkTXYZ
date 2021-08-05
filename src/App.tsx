import React from 'react';
import { useState } from 'react'
import Task from './Task';
import ToDoList from './ToDoList';
import Header from './Header';
import Footer from './Footer';

function App() {

  const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    /* check pressing enter key here */
  }

  return (
    <div>
      <Header></Header>
      <ToDoList></ToDoList>
      <Footer></Footer>
    </div>
  );
}

function a(input: any) {
  console.log(input)
}

export default App;
