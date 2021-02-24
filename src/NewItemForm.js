import React, {useState, useContext} from "react"
import SnackContext from "./SnackContext"
import DrinkContext from "./DrinkContext"
import {FormGroup, Label, Button, Input, Form} from "reactstrap"
import { Redirect } from "react-router-dom"
const NewItemForm = ({title}) => {
    const {addDrink} = useContext(DrinkContext)
    const {addSnack} = useContext(SnackContext)
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
            
        }
        if(title === "Snack"){
            addSnack(formData)
            
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
        <h1 className="display-3" style={{color: 'red'}}>Add a New {title}</h1>
        <Form className="col-8 px-5 pt-3 mt-3" style={{color: 'red', fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.9)', borderRadius: 10}} onSubmit ={handleSubmit}>
        <FormGroup>
            <Label htmlFor='id'>{title} Id</Label>
            
            <Input name ='id' type ='text' id = "id" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <Label htmlFor='name'>{title} Name</Label>
            <Input name ='name' type ='text' id = "name" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="description">{title} Description</Label>
            <Input name ='description' type ='textarea' id = "description" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="recipe">{title} Recipe</Label>
            <Input name ='recipe' type ='textarea' id = "recipe" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="serve">{title} Serve</Label>
            <Input name ='serve' type ='textarea' id = "serve" onChange={handleChange}/>
        </FormGroup>
        <FormGroup>    
            <Button className="btn-sm btn-danger">Submit</Button>
        </FormGroup>
        </Form>
        </>
    )
}

export default NewItemForm