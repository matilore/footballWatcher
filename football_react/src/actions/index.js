import axios from 'axios'

export function fetchLeagues() {
  // we return a thunk function, not an action object!
  // the thunk function needs to dispatch some actions to change the
  // Store status, so it receives the "dispatch" function as its first parameter
  return function(dispatch) {
    // here starts the code that actually gets executed when the addTodo action
    // creator is dispatched

    // first of all, let's do the optimistic UI update - we need to
    // dispatch the old synchronous action object, using the renamed
    // action creator


    // now that the Store has been notified of the new todo item, we
    // should also notify our server - we'll use here ES6 fetch function
    // to post the data
    axios.get("http://localhost:4000/leagues")
    .then(function(response){
      dispatch(sendLeagues(response.data.leagues));
    }.bind(this))
    .catch(function(error){console.log(error)})
  // what you return here gets returned by the dispatch function that used
  // this action creator
  return null;
  }
}

function sendLeagues(leagues){
  return {
    type: "FETCH_LEAGUES",
    payload: leagues
  }
}

export function increaseLeague(leaguesLength){
  return {
    type: "INCREASE_LEAGUE",
    payload: leaguesLength
  }
}

export function decreaseLeague(leaguesLength){
  return {
    type: "DECREASE_LEAGUE",
    payload: leaguesLength
  }
}

export function increaseTeam(teamsLength){
  return {
    type: "INCREASE_TEAM",
    payload: teamsLength
  }
}

export function decreaseTeam(teamsLength){
  return {
    type: "DECREASE_TEAM",
    payload: teamsLength
  }
}
