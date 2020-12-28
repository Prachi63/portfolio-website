import React, {Component} from 'react';
import './App.css';
import {Portfolio} from './Portfolio'

export class App extends Component {
  constructor(){
    super();
    this.state = {
        selectedSection: ""
    };
  }

  handleSectionClick = (sectionName) =>{
    alert(sectionName);
  }
  render (){
    return (
<div className="App">
  <p>
    <Portfolio/> 
   
  </p>
</div>
    );
  }
}

export default App;
