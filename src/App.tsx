import React from 'react';
import ToDoList from './ToDoList';
import Header from './Header';
import Footer from './Footer';

function App() {

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
