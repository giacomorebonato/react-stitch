import queryString from 'query-string'
import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import AuthPanel from '../components/AuthPanel'
import {
  Stitch,
  UserPasswordAuthProviderClient
} from 'mongodb-stitch-browser-sdk'

let { Subheader } = Header
let { Column, Row } = Grid

function Home({ location }) {
  let { token, tokenId } = queryString.parse(location.search)

  if (token && tokenId) {
    let emailPassClient = Stitch.defaultAppClient.auth.getProviderClient(
      UserPasswordAuthProviderClient.factory
    )

    return emailPassClient.confirmUser(token, tokenId)
  }

  return (
    <>
      <Header>
        React - Stitch
        <Subheader>Todo list app with ReactJS and MongoDB Stitch</Subheader>
      </Header>
      <Grid divided='vertically'>
        <Row columns={2}>
          <Column>
            <AuthPanel />
          </Column>
          <Column>Right column</Column>
        </Row>
      </Grid>
    </>
  )
}

export { Home }
