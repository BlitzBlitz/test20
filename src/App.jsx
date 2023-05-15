import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import React, { lazy, Suspense } from 'react';
const Courses = lazy(() => import('./pages/Courses'));
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Suspense fallback={<div>Loading...</div>}>
            <Courses />
          </Suspense>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
