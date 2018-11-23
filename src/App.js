import { Stitch, AnonymousCredential } from 'mongodb-stitch-browser-sdk'
import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Grid, Header } from 'semantic-ui-react'
import AuthPanel from './components/AuthPanel'
import { APP_ID } from './constants/stitch'

// function initializeAndLogin() {
//   const client = Stitch.initializeDefaultAppClient(APP_ID)
//   client.auth.loginWithCredential(new AnonymousCredential()).then(user => {
//     document.getElementById(
//       'auth-status'
//     ).innerHTML = `Logged in as anonymous user with id ${user.id}`
//   })
// }

// window.onload = initializeAndLogin

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          React - Stitch
          <Header.Subheader>
            Todo list app with ReactJS and MongoDB Stitch
          </Header.Subheader>
        </Header>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column>
              <AuthPanel />
            </Grid.Column>
            <Grid.Column>Right column</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default App
