import React from 'react';

import { Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="sm" className='mb-3'>
        <Container>
          <Navbar.Brand>
            Expense Tracker
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header