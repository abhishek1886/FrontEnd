import React, { useState, Fragment } from 'react';

import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';

function App() {
  const [userData, setUserData] = useState([]);

  const userDataHandler = (data) => {
    setUserData(prev => [...prev, data])
  }

  return (
    <React.Fragment>
      <AddUser onAddingUser={userDataHandler} />
      <UsersList  users={userData} />
    </React.Fragment>
  )
}

export default App;