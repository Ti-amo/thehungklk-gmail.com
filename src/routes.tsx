import React, { SFC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import IndexPage from './pages/index'
import Header from './components/layouts/Header'
import Container from './components/layouts/Container'
interface Props {}

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_API_ENDPOINT}/graphql`
})
const Routes: SFC<Props> = () => {
  return (
    <ApolloProvider client={client}>
      <Container>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            {/* <Route path="/companies/:id" exact component={CompanyDetail} /> */}
          </Switch>
        </BrowserRouter>
      </Container>
    </ApolloProvider>
  )
}

export default Routes
