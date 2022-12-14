import { useState, useEffect } from 'react';
import { Home, Publics, Login } from './containers/public'
import { Routes, Route } from 'react-router-dom'
import path from './ultis/path'
import * as actions from './store/actions'
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getHome())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">
      <Routes>
        <Route path={path.PUBLIC} element={<Publics />}>
          <Route path={path.HOME} element={<Home />} />
          <Route path={path.LOGIN} element={<Login />} />

          <Route path={path.STAR} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
