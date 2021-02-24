import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getItems() {
    const snacks = await axios.get(`${BASE_API_URL}/snacks`);
    const drinks = await axios.get(`${BASE_API_URL}/drinks`)

    return [snacks.data, drinks.data];
  }

  static async addSnackToDb(snack) {
    const res = await axios.post(`${BASE_API_URL}/snacks`, snack)
    return res.data
  }
  static async addDrinkToDb(drink) {
    console.log(drink)
    const res = await axios.post(`${BASE_API_URL}/drinks`, drink)
    console.log(res)
    return res.data
  }

}

export default SnackOrBoozeApi;
