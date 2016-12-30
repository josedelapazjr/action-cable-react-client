import React, { Component } from 'react';
import ActionCable from 'actioncable'
import ActionCableProvider from 'react-actioncable-provider';
const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
import MyApp from './MyApp';

class App extends Component {

  render(){
    return (
      <ActionCableProvider cable={cable}>
        <MyApp cable={cable}/>
      </ActionCableProvider>
    );
  }

}

export default App;
