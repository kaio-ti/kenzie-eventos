import { Route, Switch } from "react-router-dom";
import Casamento from "../pages/Casamento";
import Confraternização from "../pages/Confraternização";
import Formatura from "../pages/Formatura";
import Home from "../pages/Home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/casamento">
        <Casamento />
      </Route>
      <Route path="/confraternizacao">
        <Confraternização />
      </Route>
      <Route path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
}
export default Routes;
