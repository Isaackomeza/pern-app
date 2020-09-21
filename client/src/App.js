import React, { Fragment } from 'react';
import './App.css';

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <div className= "container">
   <Fragment>
    <InputTodo/>
    <ListTodos/>
  </Fragment>
    </div>

  );
}

export default App;
