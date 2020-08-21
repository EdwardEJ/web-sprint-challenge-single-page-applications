import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Form from './Form'


const App = () => {


  return (
    <>

      <Switch>
        <Route path='/pizza'>
          <Form />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </>
  );
};
export default App;
