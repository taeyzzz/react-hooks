import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import LoginPage from './containers/LoginPage'
import HomePage from './containers/HomePage'
import Playground from './containers/Playground'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home"/>}/>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/login" component={LoginPage}/>
        <Route exact path="/playground" component={Playground}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
