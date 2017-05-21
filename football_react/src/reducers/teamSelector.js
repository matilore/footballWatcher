const initialState = {
  leagueCounter: {
    value: 0
  },
  teamCounter: {
    value: 0
  },
  leagues: []
};


export default function teamSelector(state = initialState, action){
  switch(action.type) {
    case "FETCH_LEAGUES" :
    return {
      ...state,
      leagues: action.payload
    }
    case 'INCREASE_LEAGUE' :
      return {
        ...state,
        leagueCounter: {
          value: (state.leagueCounter.value +1) % action.payload
        },
        teamCounter: {
          value: 0
        }
      }
      case 'DECREASE_LEAGUE':
        return {
          ...state,
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
