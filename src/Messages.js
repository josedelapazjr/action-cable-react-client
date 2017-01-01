import React, {Component} from 'react';

export const setSelectedCategory = (data) => {
  console.log(data.name);
};

class Messsages extends Component {
  constructor(props){
    super(props);
    this.state = {
      messageList: [],
    };
  }

  appendMessage2(data){
    console.log('appendMessage2');
    this.setState({messageList: this.state.messageList.push(data)});
  }

  componentDidMount () {
        this.subscription = this.props.cable.subscriptions.create(
            'RoomChannel',
            {
                received (data) {
                    setSelectedCategory(data);
                }
            }
        )
    }

    componentWillUnmount () {
        this.subscription &&
            this.props.cable.subscriptions.remove(this.subscription)
    }

    renderMessages(){
      return this.state.messageList.map((data) =>  {
        return (
          <li>Test</li>
        );
      });
    }

    render(){
      return(
        <ul>
          {this.renderMessages()}
        </ul>
      );
    }

}

export default Messsages;
