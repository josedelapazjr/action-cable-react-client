import React, { Component } from 'react';
import ActionCable from 'actioncable';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
import Messages from './Messages';

import allReducers from './reducers/index';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

class App extends Component {

  render(){
    return (
      <Provider store={store}>
        <Messages cable={cable}/>
      </Provider>
    );
  }
}

export default App;
