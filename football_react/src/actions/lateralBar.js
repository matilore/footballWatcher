const API_KEY = 'AIzaSyDkw0ZpgAST7rCUuyCuB37vN22qrAyilbs'
import YTSearch from '../utils/YTSearch';


function isFetchingVideos () {
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


function selectActiveTeam(team){
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
