import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom'

import axios from 'axios'
import formSchema from '../validation/formSchema'
import * as yup from 'yup'

import Home from './Home'
import Form from './Form'

const initialPizzaOrder = {
  name: '',
  pizzaSize: '',
  toppings: {
    ham: false,
    beef: false,
    pepperoni: false,
    sausage: false,
  },
  specialInstructions: ''
}

const initialFormErrors = {
  name: '',
}

const initalPizza = []


const App = () => {
  const [pizza, setPizza] = useState(initalPizza)
  const [pizzaOrder, setPizzaOrder] = useState(initialPizzaOrder)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const getPizza = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        console.log(res.data.data)
        setPizza(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewPizza = newPizza => {
    axios.post('https://reqres.in/api/users', newPizza)
      .then(res => {
        setPizza([res.data, ...pizza])
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setPizzaOrder(initialPizzaOrder)
      })
  }

  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setPizzaOrder({
      ...pizzaOrder,
      [name]: value
    })
  };

  const checkboxChange = (name, isChecked) => {
    setPizzaOrder({
      ...pizzaOrder,
      toppings: {
        ...pizzaOrder.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newPizza = {
      name: pizzaOrder.name.trim(),
      pizzaSize: pizzaOrder.pizzaSize,
      specialInstructions: '',

      toppings: Object.keys(pizzaOrder.toppings).filter(topping =>
        pizzaOrder.toppings[topping])
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    getPizza()
  }, [])

  return (
    <>

      <Switch>
        <Route path='/pizza'>
          <Form
            values={pizzaOrder}
            submit={submit}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            errors={formErrors}
          />
        </Route>

        <Route path='/'>
          <Home />
        </Route>

      </Switch>
    </>
  );
};
export default App;
