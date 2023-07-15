import React, { useState } from 'react';

import UserInput from './UserInput/UserInput';
import ItemsList from './ItemsList/ItemsList';
import InvalidWindow from './ItemsList/InvalidWindow';

function App() {
  const [inputData, setInputData] = useState([]);
  const [isValid, setIsValid] = useState(true);

  const userInputDataHandler = (userData) => {
    setInputData(prevData => {
      return [userData, ...inputData];
    })
  }

  return (
    <div>
      <UserInput onSubmit={userInputDataHandler}/>
      <ItemsList userData={inputData} />
      <div >
        {!isValid && <InvalidWindow isValid={isValid}/> }
      </div>
      
    </div>
  );
}

export default App;
