import React from 'react';

import SomeListComponent from './SomeListComponent';

import useItems from './useItems';

import './App.css';

const testItems = [{ text: 'hello' }, { text: 'world!' }, { text: 'JORDAN!' }];

const listDetails = {
  size: {
    width: 400,
    height: 800,
  },
};

const handleOnclick = i => console.log(`You have clicked item ${i}`);

function App() {
  const items = useItems(testItems);

  return (
    <div className='App'>
      <SomeListComponent items={items} listDetails={listDetails} onClick={handleOnclick} />
    </div>
  );
}

export default App;
