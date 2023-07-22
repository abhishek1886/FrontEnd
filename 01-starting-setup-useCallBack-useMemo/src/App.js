import React, { useCallback, useState, useMemo } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/DemoList';

function App() {
  const [listTitle, setListTitle] = useState('My title');

  const changeTitlehandler = useCallback(() => {
    setListTitle('New Title!');
  }, [])
  return (
    <div className="app">
      <DemoList title={listTitle} items={useMemo(() => [5, 3, 1, 10, 9], [])} />
      <Button onClick={changeTitlehandler}>Change List Title</Button>
    </div>
  );
}

export default App;
