# Sample react app that connects to Rails Action Cable

1. Create react project:

		> create-react-app sampleChatClient
		> cd sampleChatClient
		> npm start
		
	If create-react-app is not installed yet:
	
		> npm install -g create-react-app

		
2. Install the react-actioncable-provider

		> npm install react-actioncable-provider --save
3. Connect to the action cable server and pass the instance to the component:

		import ActionCable from 'actioncable';
		
		const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
		
		class App extends Component {
			render(){
				return (
				  <Provider store={store}>
				    <Messages cable={cable}/>
				  </Provider>
				);
			}
		}

		
4. Wait for the incoming messages:

		componentDidMount () {
		  let self = this;
		  this.subscription = this.props.cable.subscriptions.create('RoomChannel', {
		    received (data) {
			   this.appendMessage(data, self);
			 },
			 
			 appendMessage: this.appendMessage
		    
		  });
		}
		
Note:
 Don't forget to update the config/environments/development.rb in rails server and modify the following line:
 
 		Rails.application.config.action_cable.allowed_request_origins = ['http://localhost:3001','http://localhost:3002']	