import React from 'react'
import styled from 'styled-components'

let Button = styled.button`
  background: none !important;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  cursor: pointer;
`

function LinkButton({ children, ...otherProps }) {
  return <Button {...otherProps}>{children}</Button>
}

export { LinkButton }
