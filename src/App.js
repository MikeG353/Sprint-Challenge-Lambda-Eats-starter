import React, { useState } from "react";
import { Route, Switch, Router, Link } from 'react-router-dom'
import Form from './Form'

const initialFormValues = {
  customer_name:'',
  size:'',
  sauce:'',
  toppings:'',
  instructions:''
}

const App = () => {
  const [orderList, setOrderList] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onCheckboxChange = evt => {
    const {name} = evt.target
    const isChecked =evt.target.isChecked
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    const newOrder = {
      customer_name : formValues.customer_name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }
    setOrderList([...orderList, newOrder])
    setFormValues(initialFormValues)
  }

  return (
    <div>
      {/* <Header > will put the below inside a header onject since it doesnt change in the wireframe*/}
        <div className={'header container'}>
          <h1>Lambda Eats</h1>
          <div className={'header-buttons'}>
            <Link to='/'><button id={'home-button'}>Home</button></Link>
            <button id={'help-button'}>Help</button>
          </div>
        </div>
      {/* </Header> */}
      <Switch>
        <Route path='/Pizza'>
          <Form
          values={formValues}
          onInputChange={onInputChange}
          onCheckboxChange={onCheckboxChange}
          onSubmit={onSubmit}
          />
          
        </Route>
        <Route path='/'>
          

            <div className={'hero-image container'}>
              <img src={'./image/Pizza.jpg'}/>
              <div className={"centered"}>Your favorite food, delivered while coding</div>
              <Link to='/Pizza'><button>Click!</button></Link> {/* this button will lead to the form */}
            </div>
        </Route>
      </Switch>
    </div>
  );
};
export default App;
