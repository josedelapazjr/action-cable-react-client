import React, {Component} from 'react';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions/messageActions';

class Messsages extends Component {

  appendMessage(data, self){
    // Append new message
    self.props.actions.appendMessage(data)
  }

  componentDidMount () {
    let self = this;
    this.subscription = this.props.cable.subscriptions.create('RoomChannel', {
      received (data) {
        this.appendMessage(data, self);
      },
      appendMessage: this.appendMessage
    });
  }

  componentWillUnmount () {
      this.subscription &&
          this.props.cable.subscriptions.remove(this.subscription)
  }

  renderMessages(){
    return this.props.messageList.map((data, index) =>  {
      return (
        <li key={index}>{data.name}: {data.content}</li>
      );
    });
  }

  render(){
    return(
      <div>
        <h4>MESSAGES (using react)</h4>
        <ul className="no-style">
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    messageList: state.messageList.all,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messsages);
