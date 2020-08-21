import React from 'react'
import { styled } from 'styled-components'

import { Link } from 'react-router-dom'



export default function Home() {

  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>

        <div>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Pizza</Link>
        </div>
      </nav>
    </div>
  )

}