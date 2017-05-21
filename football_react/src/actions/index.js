import addUserToDashboard from './dashboard'
import { selectActiveTeam, chooseTeam } from './lateralBar'
import { fetchLeagues, removeTeamFromUser } from './teamSelector'
import { selectActiveVideo, nextMenuVideos, previousMenuVideos } from './ytMenu'

const actionCreators = {
  addUserToDashboard,
  selectActiveVideo,
  chooseTeam,
  fetchLeagues,
  removeTeamFromUser,
  selectActiveVideo,
  nextMenuVideos,
  previousMenuVideos
}

export default actionCreators
