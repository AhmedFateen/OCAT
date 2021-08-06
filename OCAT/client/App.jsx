import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { SiteWrapper } from './components';
import { DashboardBulletin } from './pages/Dashboard/DashboardBulletin';
import { NewAssessment } from './pages/Assessments/NewAssessment.jsx';
import { AssessmentList } from './pages/Assessments/AssessmentList';
import { Login } from './pages/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import auth from './auth';
const ProtectedRoute = ({
  component: Component,
  ...rest
}) =>
  <Route
    {...rest}
    render={props => {
      if (auth.isAuthenticated()) {
        return <Component {...props} />;
      }
      return (
        <Redirect
          to={{
            pathname: `/assessment/login`,
            state: {
              from: props.location,
            },
          }}
        />
      );

    }}
  />;
export const App = () => <SiteWrapper>
  <BrowserRouter>
    <Route path="/" component={DashboardBulletin} />
    <Route path="/assessment/new" component={NewAssessment} />
    <ProtectedRoute path="/assessment/list" component={AssessmentList} />
    <Route path="/assessment/login" component={Login} />
  </BrowserRouter>
</SiteWrapper>;
