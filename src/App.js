import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Country from "./components/Country/Country";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route path="/country/:countryName">
          <CountryDetails />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
