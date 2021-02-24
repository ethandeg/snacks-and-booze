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
import NewItemForm from "./NewItemForm"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([])
  const addSnack = (snack) => {
    setSnacks([...snacks,snack])
  }
  const addDrink = (drink) => {
    setDrinks([...drinks, drink])
  }

  useEffect(() => {
    async function getItems() {
      let [snacks, drinks] = await SnackOrBoozeApi.getItems();
      setSnacks(snacks);
      setDrinks(drinks)
      setIsLoading(false);
    }
    getItems();
  }, []);


  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <SnackContext.Provider value={{snacks, addSnack}}>
          <DrinkContext.Provider value={{drinks, addDrink}}>
            <NavBar />
            <main>
              <Switch>
                <Route exact path="/">
                  <Home  />
                </Route>
                <Route exact path="/snacks">
                  <Menu items={snacks} title="Snacks" />
                </Route>
                <Route exact path="/drinks">
                  <Menu items={drinks} title="Drinks" />
                </Route>
                <Route exact path="/drinks/new">
                  <NewItemForm title = "Drink"/>
                </Route>
                <Route exact path="/snacks/new">
                  <NewItemForm title = "Snack"/>
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
