import * as actions from '../actions/types';

const initialState = {
  projectNames: [
    'freeCodeCamp/food-bank-app',
    'freeCodeCamp/Mail-for-Good',
    'freeCodeCamp/Conference-for-Good',
    'freeCodeCamp/LetsMeet',
  ],
  projectData: [],
};

/**
 * display project information on card
 * @param {object} state where the info will be stored and passed to <Card /> component
 * @param {string} action string used to identify the function to use
 * @return {object} updated state
 */
export default function projects(state = initialState, action) {
  switch (action.type) {
    case actions.GET_GITHUB_DATA: {
      const newProjectData = state.projectData.slice();
      newProjectData.push(action.githubData);
      return { ...state, projectData: newProjectData };
    }
    case actions.CHECK_USER:
      return { ...state, isDev: action.isDev };
    default:
      return state;
  }
}
