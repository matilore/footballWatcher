import axios from 'axios'

const API_KEY = 'AIzaSyDkw0ZpgAST7rCUuyCuB37vN22qrAyilbs'

import YTSearch from '../utils/YTSearch';


export function isFetchingVideos () {
  return {
    type: "FETCHING_VIDEOS",
  };
}

function addVideosToMenu(videos){
  return {
    type: "ADD_VIDEOS",
    payload: videos
  }
}

function fetchVideos(term){
  return function(dispatch) {
    //first in executing
    dispatch(isFetchingVideos());
    YTSearch({key: API_KEY, maxResults:20, term: (term || '') + ' football skills goals'}, (videos) => {
      //after the query is made the videos are added to the store
      dispatch(addVideosToMenu(videos))
    });

  return null;
  }
}


export function selectActiveTeam(team){
  return {
    type: "SELECT_ACTIVE_TEAM",
    payload: team
  }
}

export function chooseTeam(teamObject){
  return function(dispatch){
    dispatch(selectActiveTeam(teamObject))
    dispatch(fetchVideos(teamObject.name))
  }
}

export function selectActiveVideo(video){
  return {
    type: "SELECT_ACTIVE_VIDEO",
    payload: video
  }
}

export function removeTeamFromUser(data){
  return function(dispatch) {

    axios.post('http://localhost:4000/users/removeteam', data)
    .then(function(response){
      let userUpdated = response.data.user
      dispatch(updateUser(userUpdated))
    })
    .catch(function(error){console.log(error)})

  return null;
  }
}


function updateUser(user){
  return {
    type: 'UPDATE_USER',
    payload: user
  }
}

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
    })
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

export function addUserToDashboard(user){
  return {
    type: "ADD_USER",
    payload: user
  }
}

export function nextMenuVideos(){
  return {
    type: "NEXT_VIDEOS"
  }
}

export function previousMenuVideos(){
  return {
    type: "PREVIOUS_VIDEOS"
  }
}
