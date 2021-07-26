import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = { 

    }
  }

  render (){
    return (
    <div className="App">
      <header>Search Bar </header>

      
      <div class="row">

        <div class="col s3">
          <p>Email List</p>
        
        </div>

        <div class="col s9">
          <p>Email</p>
      
        </div>

      </div>
    </div>
    ); 
  }
}

export default App;
