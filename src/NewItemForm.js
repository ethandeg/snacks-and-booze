import React, {useState, useContext} from "react"
import SnackContext from "./SnackContext"
import DrinkContext from "./DrinkContext"
import SnackOrBoozeApi from "./Api";
const NewItemForm = ({title}) => {
    const {addDrink, drinks} = useContext(DrinkContext)
    const {addSnack, snacks} = useContext(SnackContext)
    const INITIAL_STATE={id:'',name:'',description:'',recipe:'', serve:''}
    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
          }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(title === "Drink"){
            addDrink(formData)
            await SnackOrBoozeApi.addDrinkToDb(formData)
        }
        if(title === "Snack"){
            addSnack(formData)
            await SnackOrBoozeApi.addSnackToDb(formData)
        }
        setFormData(INITIAL_STATE)
    }
    return (
        <>
    {/* "id": "martini",
      "name": "Martini",
      "description": "An ice-cold, refreshing classic.",
      "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
      "serve": "Serve very cold, straight up." */}
        <h1>Add a New {title}</h1>
        <form onSubmit ={handleSubmit}>
            <label htmlFor='id'>{title} Id</label>
            <input name ='id' type ='text' id = "id" onChange={handleChange}/>
            <label htmlFor='name'>{title} Name</label>
            <input name ='name' type ='text' id = "name" onChange={handleChange}/>
            <label htmlFor="description">{title} Description</label>
            <textarea name ='description' type ='textarea' id = "description" onChange={handleChange}/>
            <label htmlFor="recipe">{title} Recipe</label>
            <textarea name ='recipe' type ='text' id = "recipe" onChange={handleChange}/>
            <label htmlFor="serve">{title} Serve</label>
            <textarea name ='serve' type ='text' id = "serve" onChange={handleChange}/>
            <button>Submit</button>
        </form>
        </>
    )
}

export default NewItemForm