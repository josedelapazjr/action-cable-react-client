import React, { Component } from 'react';
import ActionCable from 'actioncable';
const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
import MyApp from './Messages';

class App extends Component {

  render(){
    return (
        <MyApp cable={cable}/>
    );
  }
}

export default App;
