import React, { useState } from 'react'
import { Card } from 'semantic-ui-react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import { LinkButton } from '../../ui'
import styled from 'styled-components'

function renderForm(panel) {
  switch (panel) {
    case 'login':
      return <LoginForm />
    case 'signup':
      return <SignupForm />
    default:
      return null
  }
}

function renderSetPanel([panel, setPanel]) {
  switch (panel) {
    case 'login':
      return (
        <LinkButton
          onClick={e => {
            e.preventDefault()
            setPanel('signup')
          }}
        >
          Go to signup
        </LinkButton>
      )
    case 'signup':
      return (
        <LinkButton
          onClick={e => {
            e.preventDefault()
            setPanel('login')
          }}
        >
          Go to login
        </LinkButton>
      )
    default:
      return null
  }
}

let ExtraRight = styled(Card.Content)`
  text-align: right;
`

function AuthPanel() {
  let [panel, setPanel] = useState('login')

  return (
    <Card fluid>
      <Card.Content>{renderForm(panel)}</Card.Content>
      <ExtraRight extra>{renderSetPanel([panel, setPanel])}</ExtraRight>
    </Card>
  )
}

export { AuthPanel }
