import React, { useState } from 'react'
import { UserPasswordCredential } from 'mongodb-stitch-browser-sdk'
import { Button, Form, Header, Message } from 'semantic-ui-react'
import { stitchClient } from '../../lib/stitch'

let { auth } = stitchClient

function LoginForm() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [error, setError] = useState('')

  return (
    <Form
      onSubmit={() => {
        let credential = new UserPasswordCredential(email, password)

        auth
          .loginWithCredential(credential)
          .then(authedId => {
            console.log(`successfully logged in with id: ${authedId}`)
          })
          .catch(error => {
            console.error(error)
            setError(error.message)
          })
      }}
    >
      <Header as='h3'>Login</Header>
      <Form.Field>
        <label>Email</label>
        <input
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
          type='email'
          value={email}
        />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
          value={password}
        />
      </Form.Field>
      <Button type='submit'>Submit</Button>
      {error && (
        <Message negative>
          <Message.Header>Error</Message.Header>
          <p>{error}</p>
        </Message>
      )}
    </Form>
  )
}

export { LoginForm }
