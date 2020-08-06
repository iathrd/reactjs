import React, { Component } from 'react';
import './App.css';
import FragmentDemo from './components/FragmentDemo';
import Tabel from './components/Tabel';
import PureComp from './components/PureComp'
import RefsDemo from './components/RefsDemo';



class App extends Component {

  render() {
    return (
      <div className="App" >
        <RefsDemo />
        {/* <PureComp /> */}
        {/* <Tabel /> */}
        {/* <FragmentDemo /> */}
      </div>
    );
  }
}

export default App;
