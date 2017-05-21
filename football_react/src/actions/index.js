import { authUser } from './dashboard'
import { selectActiveTeam, chooseTeam } from './lateralBar'
import { fetchLeagues, removeTeamFromUser, increaseLeague, decreaseLeague, increaseTeam, decreaseTeam } from './teamSelector'
import { selectActiveVideo, nextMenuVideos, previousMenuVideos } from './ytMenu'

const actionCreators = {
  authUser,
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
