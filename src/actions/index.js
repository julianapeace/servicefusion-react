export function updateContact(payload){
  return{
    type:'UPDATE_CONTACT',
    payload
  }
}

export function deleteContact(payload){
  return{
    type:'DELETE_CONTACT',
    payload
  }
}
