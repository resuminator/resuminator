import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import UserAccount from '../components/User/UserAccount'
import Content from '../layout/Content'
import Providers from './Providers'

const ProtectedRoutes = ({children}) => {
    return (
        <Switch>
          <Route exact path="/">
            <Providers>
              {children}
              <Header />
              <Content />
              <Footer />
            </Providers>
          </Route>
          <Route exact path="/account" component={UserAccount} />
        </Switch>
    )
}

export default ProtectedRoutes
