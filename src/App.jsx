import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/courses">
          <Courses></Courses>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
