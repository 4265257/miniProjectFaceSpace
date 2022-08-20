import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Profile from "./Profile";
import SignUp from "./SignUp";
import { UserProvider } from "../UserContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <GlobalStyles />
        <div>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route exact path="/users/:id">
              <Profile></Profile>
            </Route>
            <Route exact path="/sign-up">
              <SignUp></SignUp>
            </Route>
          </Switch>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
