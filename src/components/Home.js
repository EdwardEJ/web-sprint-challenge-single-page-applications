import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`


export default function Home() {

  return (
    <div>
      <StyledNav>
        <h1>Lambda Eats</h1>

        <div>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link>
        </div>
      </StyledNav>
    </div>
  )

}