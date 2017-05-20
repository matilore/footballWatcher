import { combineReducers } from 'redux'
import { routerReducer as routing} from 'react-router-redux'

const initialState = {
  leagueCounter: {
    value: 0
  },
  teamCounter: {
    value: 0
  }
};



function leagues(state = {}, action){
  if (action.type === "FETCH_LEAGUES") {
      return action.payload
  } else {
    return state
  }
}



function selector(state = initialState, action){
  switch(action.type) {
    case 'INCREASE_LEAGUE' :
      return {
        leagueCounter: {
          value: (state.leagueCounter.value +1) % action.payload
        },
        teamCounter: {
          value: 0
        }
      }
      case 'DECREASE_LEAGUE':
        return {
          leagueCounter: {
          value: ((state.leagueCounter.value + action.payload) -1) % action.payload
        },
        teamCounter: {
          value: 0
        }
      }
      case 'INCREASE_TEAM':
        return {
          ...state,
          teamCounter: {
            value: (state.teamCounter.value +1) % action.payload
          }
        }
      case 'DECREASE_TEAM':
        return {
          ...state,
          teamCounter: {
            value: ((state.teamCounter.value + action.payload) -1) % action.payload
          }
        }
      default:
      return state;
  }
}

function user(state = {}, action){
  if (action.type === "ADD_USER") {
      return action.payload
  } else if (action.type === "UPDATE_USER"){
      return action.payload
  } else {
    return state
  }
}


const initialVideosState = {
  list: [],
  isLoading: false,
  selectedTeam: {},
  selectedVideo: {},
  menuCounter: 0
}

function videos(state = initialVideosState, action){
  if (action.type === "ADD_VIDEOS") {
    return {
      ...state,
      list: action.payload,
      isLoading: false,
    }
  } else if (action.type === "FETCHING_VIDEOS") {
    return {
      ...state,
      isLoading: true,
    }
  } else if(action.type === "SELECT_ACTIVE_TEAM"){
    return {
      ...state,
      selectedTeam: action.payload,
    }
  } else if(action.type === "SELECT_ACTIVE_VIDEO"){
    return {
      ...state,
      selectedVideo: action.payload,
    }
  } else if(action.type === "NEXT_VIDEOS"){
    if (state.menuCounter != state.list.length - 10) {
      return {
          ...state,
          menuCounter: state.menuCounter + 10
      }
    } else {
      return state
    }
  } else if(action.type === "PREVIOUS_VIDEOS"){
    if (state.menuCounter != 0) {
      return {
          ...state,
          menuCounter: state.menuCounter - 10
      }
    } else {
      return state
    }
  } else {
    return state
  }
}


export const rootReducer = combineReducers({selector, user, leagues, routing, videos})
