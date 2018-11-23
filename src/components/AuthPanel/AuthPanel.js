import React from 'react'
import { Button, Card, Form, Header } from 'semantic-ui-react'

function AuthPanel() {
  return (
    <Card>
      <Card.Content>
        <Form>
          <Header as="h3">Login</Header>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Card.Content>
    </Card>
  )
}

export { AuthPanel }
