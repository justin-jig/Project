import React from 'react';

import Counter from './counter/index'
import RecodeHistory from  './recode/RecodeHistory'

import NameWrapper from './PropsState/NameWrapper'



function App() {
  return (
    <div className="App">
     
      <NameWrapper></NameWrapper>

     <Counter></Counter>
      <RecodeHistory/>  
    </div>
  );
}

export default App;
