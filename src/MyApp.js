import {Component} from 'react';

class MyApp extends Component {

  componentDidMount () {
        this.subscription = this.props.cable.subscriptions.create(
            'RoomChannel',
            {
                received (data) {
                    console.log(data)
                }
            }
        )
    }

    componentWillUnmount () {
        this.subscription &&
            this.props.cable.subscriptions.remove(this.subscription)
    }

    render(){
      return null;
    }

}

export default MyApp;
