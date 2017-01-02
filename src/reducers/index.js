import {combineReducers} from 'redux';
import MessageReducer from './messageReducer'
const allReducers = combineReducers({
  messageList: MessageReducer,
});

export default allReducers;
