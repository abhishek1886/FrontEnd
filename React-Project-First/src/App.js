import React, { useState } from 'react';

import AddUser from './Components/AddUser';
import UsersList from './Components/UsersList';

function App() {
  const [userData, setUserData] = useState([]);

  const userDataHandler = (data) => {
    setUserData(prev => [...prev, data])
  }

  return (
    <div>
      <AddUser onAddingUser={userDataHandler} />
      <UsersList  users={userData} />
    </div>
  )
}

export default App;