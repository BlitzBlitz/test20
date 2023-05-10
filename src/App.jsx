import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import ScrollToFragment from "./utils/ScrollToFragment.js";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToFragment></ScrollToFragment>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/courses">
        <Courses></Courses>
      </Route>
    </BrowserRouter>
  );
};

export default App;
