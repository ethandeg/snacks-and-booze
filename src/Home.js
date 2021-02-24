import React, {useContext} from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import SnackContext from "./SnackContext"
import DrinkContext from "./DrinkContext"

function Home() {
  const {snacks, addSnack} = useContext(SnackContext)
  const {drinks, addDrink} = useContext(DrinkContext)
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!<br></br>
              Snacks: {snacks.length} Drinks: {drinks.length}
            </h3>

          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
