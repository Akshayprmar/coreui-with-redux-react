import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout,DashboardContainer } from './containers';
// Pages
import { Login, Page404, Page500, Register } from './views/Pages';

// import { renderRoutes } from 'react-router-config';

class App extends React.Component {
  constructor(props) {
    super(props);    
  }
  componentDidMount() {
    // if (
    //   !this.props.isLoggedIn &&
    //   localStorage.getItem("Authorization") &&
    //   localStorage.getItem("Authorization").length > 0
    // ) {
    //   this.props.verifyUserIsLoggedIn();
    // }
  }
  componentWillReceiveProps(nextProps) {
    // if (nextProps.user && this.state.isLoggedIn === false) {
    //   this.setState({ isLoggedIn: true });
    // }
  }

  render() {
    return (
      <HashRouter>
        <Switch> 
          <DefaultLayout/>              
          <Route exact path="/login" name="Login Page" component={Login} />
          <Route exact path="/register" name="Register Page" component={Register} />
          <Route exact path="/404" name="Page 404" component={Page404} />
          <Route exact path="/500" name="Page 500" component={Page500} />
          <Route path="/" name="Home" component={DashboardContainer} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
