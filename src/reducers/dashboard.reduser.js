import * as dashboardAction from "../actions/action.dashboard";

const dashboard = (
  state = {
    dashboard: [],
    error: null,
    status: null
  },
  action
) => {
  switch (action.type) {
    case dashboardAction.DASHBOARD_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });
    case dashboardAction.DASHBOARD_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    case dashboardAction.DASHBOARD_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        dashboard: action.matches
      });
    default:
      return state;
  }
};

export default dashboard;
