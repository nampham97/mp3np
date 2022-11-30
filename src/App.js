import { useState } from 'react';
import { Home, Publics, Login } from './containers/public'
import { Routes, Route } from 'react-router-dom'
import path from './ultis/path'
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Publics />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
