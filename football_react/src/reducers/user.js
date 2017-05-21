export default function user(state = {}, action){
  if (action.type === "ADD_USER") {
      console.log(action.payload)
      return action.payload
  } else if (action.type === "UPDATE_USER"){
      return action.payload
  } else {
    return state
  }
}
