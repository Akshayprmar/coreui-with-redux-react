import * as constance from "./action.constance";
export const DASHBOARD_REQUEST = "DASHBOARD_REQUEST";
export const DASHBOARD_SUCCESS = "DASHBOARD_SUCCESS";
export const DASHBOARD_FAILURE = "DASHBOARD_FAILURE";

export function getRequest() {
  return {
    type: DASHBOARD_REQUEST,
    status: constance.REQUESTING
  };
}

export function getFailure(error) {
  return {
    type: DASHBOARD_FAILURE,
    error,
    status: constance.ERROR
  };
}

export function getSuccess(matches) {
  return {
    type: DASHBOARD_SUCCESS,
    matches,
    status: constance.SUCCESS
  };
}

export function getUsers() {
  return async (dispatch, getState, { api }) => {
    dispatch(getRequest());
    try {
        const result = await api.get("users");
      let resultJson = await result.json();     
      let resultBodyJson = JSON.parse(resultJson.body);      
      if (resultJson.statusCode > 400) {
        throw new Error(`[${result.status}] ${resultBodyJson.error}`);
      }
      dispatch(getSuccess(resultBodyJson));
    } catch (e) {
      dispatch(getFailure(e.message));
    }
  };
}
