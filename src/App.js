import React, { Component } from 'react';
import './App.css';

class App extends Component{
  msg = () => {
    return 'Imaginar nos torna infinitos.'
  }

  msgNumber = (n) =>{
    return n * 2
  }
  render() {
    return (
      <div >
        <h2>{this.msg()}</h2>
        {this.msgNumber(25)}
      </div>
    );
  }
}


export default App;
