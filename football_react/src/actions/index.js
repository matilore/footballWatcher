import { authUser, logout } from './dashboard'
import { selectActiveTeam, chooseTeam } from './lateralBar'
import { fetchLeagues, removeTeamFromUser, increaseLeague, decreaseLeague, increaseTeam, decreaseTeam } from './teamSelector'
import { selectActiveVideo, nextMenuVideos, previousMenuVideos } from './ytMenu'

const actionCreators = {
  authUser,
  logout,
  selectActiveVideo,
  chooseTeam,
  fetchLeagues,
  removeTeamFromUser,
  increaseLeague,
  decreaseLeague,
  increaseTeam,
  decreaseTeam,
  selectActiveVideo,
  nextMenuVideos,
  previousMenuVideos
}

export default actionCreators
