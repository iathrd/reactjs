import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import Message from './components/Message';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'

function App() {
  return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <Greet name="iqbal" >
        <p>this is childern props</p>
      </Greet>
      <Greet name="alisa" />
      <Greet name="budi" />
      <Welcome name="budi pake Class" /> */}
    </div>
  );
}

export default App;
