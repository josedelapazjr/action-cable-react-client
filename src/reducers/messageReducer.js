const initialState = {
  all: [],
};

const MessageReducer = (state=initialState, action) => {
  switch(action.type){
    case 'APPEND_MESSAGE':
      return {
        all: state.all.concat(action.payload),
      }
    default:
      break;
  }
  return state;
}

export default MessageReducer;
