# Sample react app that connects to Rails Action Cable

1. Create react project:

		> create-react-app sampleChatClient
		> cd sampleChatClient
		> npm start
		
	If create-react-app is not installed yet:
	
		> npm install -g create-react-app

		
2. Connect to the action cable server:

		const cable = ActionCable.createConsumer('ws://localhost:3000/cable')
		
		
3. Wait for the incoming messages:

		componentDidMount () {
		  let self = this;
		  this.subscription = this.props.cable.subscriptions.create('RoomChannel', {
		    received (data) {
			   this.appendMessage(data, self);
			 },
			 
			 appendMessage: this.appendMessage
		    
		  });
		}