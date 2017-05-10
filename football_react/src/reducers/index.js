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





export const rootReducer = combineReducers({selector, leagues, routing})
