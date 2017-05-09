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
    console.log("hello")
      return { leagues: action.payload }
  } else {
    return state
  }
}



function selector(state = initialState, action){
  switch(action.type) {
    case 'INCREASE_LEAGUE' :
      return {
        ...state,
        leagueCounter: {
          value: state.leagueCounter.value + 1,
        }
      }
      case 'DECREASE_LEAGUE':
        return {
          ...state,
          leagueCounter: {
          value: state.leagueCounter.value - 1,
        }
      }
      case 'INCREASE_TEAM':
        return {
          ...state,
          teamCounter: {
            value: state.teamCounter.value + 1,
          }
        }
      case 'DECREASE_TEAM':
        return {
          ...state,
          teamCounter: {
            value: state.teamCounter.value - 1,
          }
        }
      default:
      return state;
  }
}





export const rootReducer = combineReducers({selector, leagues, routing})
