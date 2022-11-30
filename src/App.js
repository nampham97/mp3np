import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


function App() {

  const { test, homeData } = useSelector(state => state.app);

  console.log('test', test)
  console.log('homeData', homeData)
  return (
    <div className="App">
      a
    </div>
  );
}

export default App;
