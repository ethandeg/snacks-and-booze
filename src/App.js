import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SnackContext from "./SnackContext"
import DrinkContext from "./DrinkContext"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getSnacks();
  }, []);
  useEffect(() => {
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setIsLoading(false);
    }
    getDrinks();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <SnackContext.Provider value={snacks}>
          <DrinkContext.Provider value={drinks}>
            <NavBar />
            <main>
              <Switch>
                <Route exact path="/">
                  <Home snacks={snacks} drinks={drinks} />
                </Route>
                <Route exact path="/snacks">
                  <Menu items={snacks} title="Snacks" />
                </Route>
                <Route exact path="/drinks">
                  <Menu items={drinks} title="Drinks" />
                </Route>
                <Route path="/snacks/:id">
                  <MenuItem items={snacks} cantFind="/snacks" />
                </Route>
                <Route path="/drinks/:id">
                  <MenuItem items={drinks} cantFind="/snacks" />
                </Route>
                <Route>
                  <>
                    <h1>Unfortunately we cannot find what you are looking for.</h1>
                    <h2>404</h2>
                    <Link to="/">Go back to the home page.</Link>
                  </>
                </Route>
              </Switch>
            </main>
          </DrinkContext.Provider>
        </SnackContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
