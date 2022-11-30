import { useState } from 'react';
import { Home, Publics, Login } from './containers/public'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Publics />}>
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
