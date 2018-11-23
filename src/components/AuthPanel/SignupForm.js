import React, { useState } from 'react'
import { UserPasswordAuthProviderClient } from 'mongodb-stitch-browser-sdk'
import { Button, Form, Header, Message } from 'semantic-ui-react'
import { stitchClient } from '../../lib/stitch'

let { auth } = stitchClient
const emailPassClient = auth.getProviderClient(
  UserPasswordAuthProviderClient.factory
)

function SignupForm() {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [error, setError] = useState('')

  return (
    <Form
      onSubmit={() => {
        emailPassClient
          .registerWithEmail(email, password)
          .then(() => {
            console.log('Successfully sent account confirmation email!')
          })
          .catch(error => {
            console.log('Error registering new user:', error)
            setError(error.message)
          })
      }}
    >
      <Header as='h3'>Signup</Header>
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

export { SignupForm }
