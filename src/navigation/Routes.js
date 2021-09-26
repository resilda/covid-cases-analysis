import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../view/auth/AuthService'
import RegisterPage from '../view/auth/RegisterPage'
import LoginPage from '../view/auth/LoginPage'
import HomePage from '../view/main/HomePage'
import GlobeCovidNews from '../view/shared/pages/globe/GlobeCovidNews'
import AlbaniaCovidNews from '../view/shared/pages/albania/AlbaniaCovidNews'
import CovidStatistics from '../view/shared/pages/statistics/CovidStatistics'
import CommentsSection from '../view/shared/pages/comments/CommentsSection'
import FeedbackSection from '../view/shared/pages/feedback/FeedbackSection'

function PrivateRoute({ children, refreshToken, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        refreshToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

function PublicRoute({ children, refreshToken, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !refreshToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/main',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

function Root() {
  const context = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" refreshToken={context.refreshToken}>
          <RegisterPage />
        </PublicRoute>

        <PublicRoute exact path="/login" refreshToken={context.refreshToken}>
          <LoginPage />
        </PublicRoute>

        <PrivateRoute exact path="/main" refreshToken={context.refreshToken}>
          <HomePage />
        </PrivateRoute>

        <Route exact path="/main/globe" component={GlobeCovidNews} />

        <Route exact path="/main/albania" component={AlbaniaCovidNews} />

        <Route exact path="/main/statistics" component={CovidStatistics} />

        <Route
          exact
          path="/main/comments-section"
          component={CommentsSection}
        />

        <Route exact path="/main/your-feedback" component={FeedbackSection} />
      </Switch>
    </BrowserRouter>
  )
}

export default Root
