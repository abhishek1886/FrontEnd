import React from 'react';

import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container fluid className='m-5'>
      <h1>Welcome to Expense Tracker</h1>
      <p>Your profile is incomplete. <Link to='/profile'>Complete</Link></p>
    </Container>
  )
}

export default Home