var initialState = null

function contacts(state={}, action) {
  switch(action.type) {
    case 'UPDATE_CONTACT':
      return state
    default:
      return state
  }
}

export default function(state=initialState,action) {
  switch(action.type){
    case 'UPDATE_CONTACT':
      return Object.assign({}, state,{
        contact:contacts(state.contact, action)
      })
    // case 'DELETE_CONTACT':
    //   return
    default:
      return state
  }
}
