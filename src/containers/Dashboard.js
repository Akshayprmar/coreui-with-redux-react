import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getUsers 
} from "../actions/action.dashboard"; 

import Dashboard from "../views/Dashboard/Dashboard"

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCandidates: () => {
      dispatch(getUsers());
    },
    getRecruiter: () => {
      dispatch(getUsers());
    },
    getMatch: () => {
      dispatch(getUsers());
    }
  };
};

const mapStateToProps = state => {  
  return {
    user: state.dashboard.dashboard   
  };
};

const DashboardContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);

export default DashboardContainer;
