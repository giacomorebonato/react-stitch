import React from 'react'
import { Container } from 'semantic-ui-react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Route path='/' exact component={Home} />
        <Route path='/email-confirmation' exact component={Home} />
      </Container>
    </BrowserRouter>
  )
}

export default App
